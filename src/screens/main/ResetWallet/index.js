import myStyles from './ResetWalletStyles';
import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Create from 'assets/images/icons/reset_create.svg';
import Import from 'assets/images/icons/reset_import.svg';
import Plus from 'assets/images/icons/plus.svg';
import ArrowRight from 'assets/images/icons/arrowright.svg';
import ArrowRightDark from 'assets/images/icons/arrowright_dark.svg';

import {ThemeContext} from 'theme/ThemeContext';
import {useDispatch} from 'react-redux';
import {DokSafeAreaView} from 'components/DokSafeAreaView';

const ResetWallet = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  const styles = myStyles(theme);
  const isFromOnBoarding = route?.params?.isFromOnBoarding;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (isFromOnBoarding) {
      navigation.setOptions({
        headerShown: false,
      });
    } else {
      navigation.setOptions({
        headerShown: true,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFromOnBoarding]);

  return (
    <DokSafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.infoList}>
          <Text style={styles.titleInfo}>Set up </Text>
          <Text style={styles.titleInfo}>your Wallet </Text>
          <Text style={styles.info}>
            {
              'A cryptocurrency wallet is simply a virtual wallet used to send, receive and store digital assets such as Bitcoin, Ethereum, BNB and Solana, among others.'
            }
          </Text>
          <Text style={styles.info}>
            To set up a wallet, we will generate a seed phrase for you,
            consisting of 12 unique words. It is very important that you store
            your seed phrase in a safe place.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LearnReset')}>
            <Text style={styles.learnText}>Learn more</Text>
          </TouchableOpacity>
          <View style={styles.btnList}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('CreateWallet');
                // if (isFromOnBoarding) {
                //   navigation.navigate('VerifyInfoModal');
                // } else {
                //   setTimeout(() => {
                //     dispatch(loadingOn());
                //     navigation.push('VerifyInfoModal', {
                //       reset: 'CreateWallet',
                //     });
                //   }, 200);
                // }
              }}
              style={{
                ...styles.btn,
                ...styles.shadow,
                backgroundColor: '#FF4C00',
              }}>
              <Plus height="17" width="17" style={styles.icon_plus} />
              <Create width="113" height="113" style={styles.icon_create} />
              <View style={styles.textBox}>
                <Text style={{...styles.textBtn, color: theme.font}}>
                  Create
                </Text>
                <Text
                  style={{
                    ...styles.textBtn,
                    color: theme.backgroundColor,
                  }}>
                  Wallet
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                navigation.navigate('ImportWallet', {isAdd: !!isFromOnBoarding})
              }
              style={{
                ...styles.btn,
                ...styles.shadow,
                backgroundColor: theme.font,
              }}>
              {theme.backgroundColor === '#121212' ? (
                <ArrowRightDark style={styles.icon_arrow} />
              ) : (
                <ArrowRight style={styles.icon_arrow} />
              )}
              <Import width="108" height="101" style={styles.icon_create} />
              <View style={styles.textBox2}>
                <Text
                  style={{
                    ...styles.textBtn,
                    color: theme.background,
                  }}>
                  Import
                </Text>
                <Text
                  style={{
                    ...styles.textBtn,
                    color: theme.backgroundColor,
                  }}>
                  Wallet
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DokSafeAreaView>
  );
};

export default ResetWallet;
