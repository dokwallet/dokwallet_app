import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const isIpad = WIDTH >= 768;

let ITEM_WIDTH;
let ITEM_PAD;

if (isIpad) {
  ITEM_WIDTH = Math.round(WIDTH * 0.6);
  ITEM_PAD = 20;
} else {
  ITEM_WIDTH = Math.round(WIDTH * 0.7);
  ITEM_PAD = 10;
}

const myStyles = theme =>
  StyleSheet.create({
    infoList: {
      padding: ITEM_PAD,
      width: ITEM_WIDTH,
      height: modalHeight - 120,
      display: 'flex',
      justifyContent: 'center',
    },
    titleInfo: {
      color: theme.font,
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      marginBottom: 10,
    },
    info: {
      color: theme.font,
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
    },
    buttonList: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: ITEM_WIDTH,
      height: 60,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',

      borderTopWidth: 1,
      borderTopColor: theme.gray,
    },
    buttonTitle: {
      color: theme.background,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
  });

export default myStyles;
