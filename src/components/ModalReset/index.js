import React, {useState, useEffect, useContext, useLayoutEffect} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {Modal, Portal, Text, Provider} from 'react-native-paper';
import {getUserPassword} from 'dok-wallet-blockchain-networks/redux/auth/authSelectors';
import {
  logOutSuccess,
  logOutFailure,
  fingerprintAuthOut,
} from 'dok-wallet-blockchain-networks/redux/auth/authSlice';
import {ThemeContext} from 'theme/ThemeContext';
import myStyles from './ModalResetStyles';
import {resetWallet} from 'dok-wallet-blockchain-networks/redux/wallets/walletsSlice';
import {useDispatch} from 'react-redux';

// import {getLoading} from 'dok-wallet-blockchain-networks/redux/auth/authSelectors';

const WIDTH = Dimensions.get('window').width + 80;
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const isIpad = WIDTH >= 768;

let ITEM_WIDTH;

if (isIpad) {
  ITEM_WIDTH = Math.round(WIDTH * 0.6);
} else {
  ITEM_WIDTH = Math.round(WIDTH * 0.7);
}

const ModalReset = ({visible, hideModal, navigation, page}) => {
  const {theme} = useContext(ThemeContext);
  const styles = myStyles(theme);
  const dispatch = useDispatch();
  // const storePassword = useSelector(getUserPassword);
  const [list, setList] = useState('');

  useEffect(() => {
    setList(page);
  }, [page]);

  const handlerNo = () => {
    if (list === 'Delete Account') {
      hideModal(false);
      navigation.navigate('Sidebar', {
        screen: 'Home',
      });
    } else {
      hideModal(false);
    }
  };

  const handlerYes = () => {
    if (list === 'Delete Account' || list === 'Forgot') {
      dispatch(resetWallet());
      hideModal(false);
      dispatch(logOutSuccess());
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'CarouselCards'}],
        });
      }, 200);
    } else {
      hideModal(false);
      dispatch(fingerprintAuthOut());
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
  };

  return (
    <Modal
      visible={visible}
      contentContainerStyle={{
        backgroundColor: theme.secondaryBackgroundColor,
        width: ITEM_WIDTH,
        alignSelf: 'center',
        borderRadius: 10,
        height: modalHeight,
      }}
      dismissable={false}>
      <View style={styles.infoList}>
        <Text style={styles.titleInfo}>{page}</Text>
        <Text style={styles.info}>
          It will delete all wallets and password. Please make sure you have a
          copy of 12/18/24-word seed phrase. You will need it in order to
          restore your wallet. Without it you will NOT be able to restore your
          wallet and you will lose access to your funds.
        </Text>
        <Text style={styles.info}>Are you sure you want to proceed?</Text>
      </View>
      <View style={styles.btnList}>
        <View style={styles.learnBorder}>
          <TouchableOpacity style={styles.learnBox} onPress={() => handlerNo()}>
            <Text style={styles.learnText}>No</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.learnBox} onPress={() => handlerYes()}>
          <Text style={styles.learnText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalReset;
