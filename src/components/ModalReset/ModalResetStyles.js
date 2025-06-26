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
      height: modalHeight - 60,
      display: 'flex',
      justifyContent: 'center',

      alignItems: 'center',
    },
    titleInfo: {
      color: theme.font,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      marginBottom: 20,
      textTransform: 'uppercase',
    },
    info: {
      color: theme.font,
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      marginTop: 16,
    },
    inputStyle: {
      borderWidth: 1,
      height: 44,
      maxHeight: 44,
      borderColor: theme.headerBorder,
      flex: 1,
      width: '100%',
      color: theme.font,
      borderRadius: 8,
      paddingHorizontal: 20,
      marginVertical: 8,
    },
    btnList: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: theme.gray,
    },
    learnBorder: {
      borderRightWidth: 1,
      borderRightColor: theme.gray,
    },
    learnBox: {
      width: ITEM_WIDTH / 2,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
    },
    learnText: {
      color: theme.background,
      fontSize: 17,
      fontFamily: 'Roboto-Regular',
    },
  });

export default myStyles;
