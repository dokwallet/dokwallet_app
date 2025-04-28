import {StyleSheet, Dimensions} from 'react-native';

import {Platform} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;

const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const isIpad = WIDTH >= 768;

let ITEM_WIDTH;
let ITEM_PAD;

if (isIpad) {
  ITEM_WIDTH = Math.round(WIDTH * 0.6);
  ITEM_PAD = 30;
} else {
  ITEM_WIDTH = Math.round(WIDTH * 0.7);
  ITEM_PAD = 20;
}

const myStyles = theme =>
  StyleSheet.create({
    infoList: {
      padding: ITEM_PAD,
      width: ITEM_WIDTH,
      height: modalHeight - 60,
      display: 'flex',
      justifyContent: 'center',
    },
    titleInfo: {
      color: theme.font,
      fontSize: 28,
      textAlign: 'center',
      fontFamily: 'Roboto-Bold',
      marginBottom: 20,
    },
    info: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      marginBottom: 25,
    },
    button: {
      alignSelf: 'center',
      width: ITEM_WIDTH - 140,
      borderRadius: 10,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'transparent',
      backgroundColor: theme.background,
    },
    btnEx: {
      color: theme.title,
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
    },
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: theme.background,
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowOffset: {
            height: 5,
            width: 5,
          },
        },
        android: {
          elevation: 5,
          backgroundColor: theme.background,
        },
      }),
    },
  });

export default myStyles;
