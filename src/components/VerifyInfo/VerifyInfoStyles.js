import {StyleSheet, Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('window').width + 80;
const isIpad = WIDTH >= 768;
let ITEM_WIDTH;
if (isIpad) {
  ITEM_WIDTH = (WIDTH - 80) / 2;
} else {
  ITEM_WIDTH = Math.round(WIDTH * 0.7);
}

const myStyles = theme =>
  StyleSheet.create({
    icon: {
      alignSelf: 'center',
      backgroundColor: 'red',
      width: 60,
      height: 60,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: theme.font,
      fontSize: 30,
      marginTop: 10,
      marginBottom: 20,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
    },
    info: {
      color: theme.gray,
      fontSize: 15,
      marginBottom: 20,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    span: {
      color: theme.gray,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    infoNext: {
      color: theme.gray,
      fontSize: 15,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    learnText: {
      color: theme.background,
      fontSize: 15,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      marginBottom: 20,
    },
    infoRed: {
      color: 'red',
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      textAlign: 'left',
    },
    spanRed: {
      color: 'red',
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    btnVerify: {
      alignSelf: 'center',
      width: ITEM_WIDTH - 40,
      borderRadius: 10,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    verifyTitle: {
      color: theme.title,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    btnLater: {
      marginTop: 10,
      alignSelf: 'center',
      width: ITEM_WIDTH - 40,
      borderRadius: 10,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'transparent',
      backgroundColor: theme.backgroundColor,
    },
    laterTitle: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
  });

export default myStyles;
