import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Platform, Linking, Text, TextInput, StatusBar} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {useRoute} from 'routers/router';
import {
  getLoading,
  getUserPassword,
} from 'dok-wallet-blockchain-networks/redux/auth/authSelectors';
import Spinner from 'components/Spinner';
import {MainNavigation} from 'utils/navigation';
import {
  checkNewCoinAvailable,
  checkNewsAvailable,
  fetchCurrencies,
} from 'dok-wallet-blockchain-networks/redux/currency/currencySlice';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initWalletConnect} from 'dok-wallet-blockchain-networks/service/walletconnect';
import {AppState} from 'react-native';
import {
  addMinutes,
  isAfterCurrentDate,
  validateNumber,
} from 'dok-wallet-blockchain-networks/helper';
import {getLockTime} from 'dok-wallet-blockchain-networks/redux/settings/settingsSelectors';
import {
  createClientIdIfNotExist,
  createIfNotExistsMasterClientId,
  resetCoinsToDefaultAddressForPrivacyMode,
  resetNfts,
} from 'dok-wallet-blockchain-networks/redux/wallets/walletsSlice';
import {isReduxStoreLoaded} from 'dok-wallet-blockchain-networks/redux/walletConnect/walletConnectSelectors';
import {selectWalletConnectSessions} from 'dok-wallet-blockchain-networks/redux/wallets/walletsSelector';
import {clearWalletConnectStorageCache} from 'utils/asyncStorage';
import LoginModal from 'components/LoginModal';
import {
  compareRpcUrls,
  fetchRPCUrl,
} from 'dok-wallet-blockchain-networks/rpcUrls/rpcUrls';
import {
  fetchSupportedBuyCryptoCurrency,
  setCountry,
} from 'dok-wallet-blockchain-networks/redux/cryptoProviders/cryptoProviderSlice';
import {
  getBuildNumber,
  getBundleId,
  getVersion,
} from 'react-native-device-info';
import {IS_ANDROID, IS_IOS} from 'utils/dimensions';
import {getCountry} from 'react-native-localize';
import {MenuProvider} from 'react-native-popup-menu';
import {parseUrlQS, validatePaymentUrl, validateWCUrl} from 'utils/common';
import {
  setIsUpdateAvailable,
  setIsWalletConnectInitialized,
  setPaymentData,
  setWcUri,
} from 'dok-wallet-blockchain-networks/redux/extraData/extraDataSlice';
import ModalAppUpdate from 'components/ModalAppUpdates';
import dayjs from 'dayjs';
import axios from 'axios';
import {isTestFlight} from 'react-native-test-flight';
import {setAdjustPan} from 'rn-android-keyboard-adjust';
import {getDisableMessage} from 'dok-wallet-blockchain-networks/redux/cryptoProviders/cryptoProvidersSelectors';
import DisableComponent from 'components/DisableComponent';
import {getLastUpdateCheckTimestamp} from 'dok-wallet-blockchain-networks/redux/auth/authSelectors';
import {setLastUpdateCheckTimestamp} from 'dok-wallet-blockchain-networks/redux/auth/authSlice';
import {getFeesInfo} from 'dok-wallet-blockchain-networks/feesInfo/feesInfo';
import {WALLET_CONNECT_DATA} from 'utils/wlData';
import {ThemeContext} from 'theme/ThemeContext';

const unsecureRoute = [
  'ContactUs',
  'CryptoProviders',
  'CarouselCards',
  'Registration',
  'TransactionList',
];

let lastCallTimeStamp;

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const Main = () => {
  // persistor.purge();
  // const localCurrency = useSelector(getLocalCurrency);
  // const newKey = useSelector(getNewKey);
  // const totalWallets = useSelector(getTotalWallets);
  // const currentWallet = useSelector(getCurrentWallet);
  // const allCoins = useSelector(getAllCoins);
  // const allWallets = useSelector(getWallets);
  // const currentWalletName = useSelector(getWalletName);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const navigationRef = React.useRef();
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const storePassword = useSelector(getUserPassword);
  const lockTime = useSelector(getLockTime);
  const isReduxStoreLoad = useSelector(isReduxStoreLoaded);
  const walletConnectSessions = useSelector(
    selectWalletConnectSessions,
    shallowEqual,
  );
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  // const phrase = useSelector(getWalletPhrase);
  const routing = useRoute(storePassword);
  const appState = useRef(AppState.currentState);
  const lockTimeSet = useRef(null);
  const lockTimeRef = useRef(lockTime);
  const compareRpcUrlsIntervalRef = useRef(null);
  const disableMessage = useSelector(getDisableMessage);
  const lastUpdateCheckTimestamp = useSelector(getLastUpdateCheckTimestamp);

  const fetchAndCompareRpcUrls = useCallback(() => {
    fetchRPCUrl().then(resp => {
      setTimeout(() => {
        compareRpcUrls();
      }, 1000);
    });
    compareRpcUrlsIntervalRef.current = setInterval(() => {
      compareRpcUrls();
    }, 1000 * 60 * 10);
  }, []);

  const fetchFeesInfo = useCallback(() => {
    getFeesInfo().then(_ => {});
  }, []);

  const initializeWalletConnect = useCallback(async () => {
    try {
      if (!Object.keys(walletConnectSessions).length) {
        await clearWalletConnectStorageCache();
      }
      await initWalletConnect(WALLET_CONNECT_DATA);
      dispatch(setIsWalletConnectInitialized(true));
    } catch (e) {
      console.error('Error in initialize WalletConnect');
    }
  }, [dispatch, walletConnectSessions]);

  const getInitialUrlLink = async () => {
    try {
      const url = await Linking.getInitialURL();
      const qsObj = parseUrlQS(url);
      if (validateWCUrl(url, qsObj)) {
        dispatch(setWcUri(decodeURIComponent(qsObj?.uri)));
      } else if (validatePaymentUrl(url, qsObj)) {
        const currentDate = new Date().toISOString();
        dispatch(setPaymentData({...qsObj, date: currentDate}));
      }
    } catch (e) {
      console.warn('error in getInitialUrlLink', e);
    }
  };

  const getLiveVersion = useCallback(async () => {
    try {
      let latestVersion = null;
      if (IS_IOS) {
        const resp = await axios.get(
          `https://itunes.apple.com/lookup?bundleId=${getBundleId()}`,
        );
        latestVersion = resp.data?.results?.[0]?.version;
      } else if (IS_ANDROID) {
        const playstore = await axios.get(
          `https://play.google.com/store/apps/details?id=${getBundleId()}&hl=en`,
        );
        const data = playstore.data;
        latestVersion = data.match(/Current Version.+?>([\d.-]+)<\/span>/);
        if (!latestVersion) {
          const matchNewLayout = data.match(/\[\[\["([\d-.]+?)"]]/);
          latestVersion = matchNewLayout[1].trim();
        }
      }
      const versionNumber = validateNumber(latestVersion);
      if (!versionNumber) {
        throw new Error('Version number is null');
      }
      return versionNumber;
    } catch (e) {
      console.error('Error in fetching latest version', e);
      throw e;
    }
  }, []);
  const checkInAppUpdates = async isAppLaunched => {
    const isDevelopmentOrTestFlight = __DEV__ || isTestFlight;
    const hasRecentUpdateCheck =
      lastUpdateCheckTimestamp &&
      dayjs().diff(dayjs(lastUpdateCheckTimestamp), 'minutes') <= 10;
    const hasRecentCallWhenNotLaunched =
      lastCallTimeStamp &&
      dayjs().diff(dayjs(lastCallTimeStamp), 'minutes') <= 60;

    if (
      !isDevelopmentOrTestFlight &&
      ((isAppLaunched && !hasRecentUpdateCheck) ||
        (!isAppLaunched && !hasRecentCallWhenNotLaunched))
    ) {
      console.log('checking');
      try {
        lastCallTimeStamp = new Date();
        if (isAppLaunched) {
          dispatch(setLastUpdateCheckTimestamp(new Date()));
        }
        const liveVersion = await getLiveVersion();
        const currentVersion = validateNumber(getVersion());
        if (currentVersion < liveVersion) {
          setShowUpdateModal(true);
        } else {
          dispatch(setIsUpdateAvailable('no'));
        }
      } catch (e) {
        console.error('Error in check in app updates', e);
      }
    } else {
      dispatch(setIsUpdateAvailable('no'));
    }
  };

  useEffect(() => {
    let unsubscribe = null;
    if (IS_ANDROID) {
      setAdjustPan();
    }
    if (isReduxStoreLoad) {
      checkInAppUpdates(true);
      getInitialUrlLink();
      dispatch(createIfNotExistsMasterClientId());
      dispatch(createClientIdIfNotExist());
      dispatch(resetCoinsToDefaultAddressForPrivacyMode());
      const onUrlGet = event => {
        try {
          const url = event.url;
          const qsObj = parseUrlQS(url);
          if (validateWCUrl(url, qsObj)) {
            dispatch(setWcUri(decodeURIComponent(qsObj?.uri)));
          } else if (validatePaymentUrl(url, qsObj)) {
            const currentDate = new Date().toISOString();
            dispatch(setPaymentData({...qsObj, date: currentDate}));
          }
        } catch (e) {
          console.warn('error in getInitialUrlLink', e);
        }
      };
      unsubscribe = Linking.addEventListener('url', onUrlGet);
      dispatch(checkNewCoinAvailable());
      const key = `${
        IS_IOS ? 'ios' : 'android'
      }_${getVersion()}_${getBuildNumber()}`;
      dispatch(checkNewsAvailable({key}));
      initializeWalletConnect();
    }
    return () => {
      unsubscribe?.remove && unsubscribe.remove();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReduxStoreLoad]);

  useEffect(() => {
    const fromDevice = Platform.OS;
    const country = getCountry();
    dispatch(setCountry(country));
    dispatch(fetchSupportedBuyCryptoCurrency({fromDevice, country}));
    fetchAndCompareRpcUrls();
    fetchFeesInfo();
    dispatch(fetchCurrencies({}));
    setTimeout(() => {
      dispatch(resetNfts({}));
    }, 2000);
    return () => {
      clearInterval(compareRpcUrlsIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    lockTimeRef.current = lockTime;
  }, [lockTime]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const currentRouteName =
        navigationRef?.current?.getCurrentRoute?.()?.name || '';

      if (appState.current.match(/background/) && nextAppState === 'active') {
        if (
          currentRouteName !== 'Login' &&
          !unsecureRoute.includes(currentRouteName) &&
          isAfterCurrentDate(lockTimeSet.current)
        ) {
          setLoginModalVisible(true);
        }
        checkInAppUpdates();
        compareRpcUrls();
        fetchFeesInfo();
      } else if (nextAppState === 'background') {
        lockTimeSet.current = addMinutes(lockTimeRef.current).toISOString();
        if (
          !unsecureRoute.includes(currentRouteName) &&
          currentRouteName !== 'Login' &&
          lockTimeRef.current === 0
        ) {
          setLoginModalVisible(true);
        }
      }
      appState.current = nextAppState;
    });
    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {theme} = useContext(ThemeContext);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        backgroundColor={theme.backgroundColor}
        barStyle={
          theme.backgroundColor === '#121212' ? 'light-content' : 'dark-content'
        }
      />
      {disableMessage ? (
        <DisableComponent />
      ) : (
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            MainNavigation.setNavigationObject(navigationRef.current);
          }}>
          <MenuProvider>
            <BottomSheetModalProvider>{routing}</BottomSheetModalProvider>
            <ModalAppUpdate visible={showUpdateModal} />
          </MenuProvider>
          <LoginModal
            visible={loginModalVisible}
            onClose={() => {
              setLoginModalVisible(false);
            }}
          />
        </NavigationContainer>
      )}
      {/*<Delete />*/}
      {isLoading && <Spinner />}
    </GestureHandlerRootView>
  );
};

export default Main;
