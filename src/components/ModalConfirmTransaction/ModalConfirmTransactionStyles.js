import {StyleSheet, Dimensions, Platform} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;

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
      flex: 1,
      padding: ITEM_PAD,
      width: ITEM_WIDTH,
      alignItems: 'center',
    },
    infoHeader: {
      flexDirection: 'row',
    },
    titleInfo: {
      color: theme.font,
      fontSize: 25,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    infoIcon: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginTop: 10,
      borderRadius: 10,
      height: 60,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.background,
    },
    buttonTitle: {
      color: theme.title,
      fontSize: 16,
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
    formInput: {
      width: ITEM_WIDTH - 20,
      height: 50,
    },
    input: {
      marginBottom: 20,
      backgroundColor: theme.backgroundColor,
      textAlign: 'center',
    },
    textConfirm: {
      marginTop: -15,
      color: 'red',
      marginLeft: 10,
      fontSize: 12,
    },
    textWarning: {
      marginTop: -15,
      color: 'red',
      fontSize: 15,
    },
  });

export default myStyles;
