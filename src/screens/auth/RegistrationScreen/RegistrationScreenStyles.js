import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const isIpad = screenWidth >= 768;

let inputWidth;

if (isIpad) {
  inputWidth = screenWidth / 2;
} else {
  inputWidth = screenWidth / 1.1;
}

const myStyles = theme =>
  StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    formInput: {
      width: inputWidth,
    },
    title: {
      color: theme.font,
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    text: {
      color: theme.primary,
      fontSize: 15,
      marginBottom: 20,
      fontFamily: 'Roboto-Regular',
    },
    input: {
      marginBottom: 20,
      backgroundColor: theme.backgroundColor,
    },
    button: {
      backgroundColor: theme.background,
      height: 60,
      borderRadius: 10,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTitle: {
      color: theme.title,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    textConfirm: {
      marginTop: -15,
      marginBottom: 10,
      color: 'red',
      marginLeft: 10,
      fontSize: 12,
    },
  });

export default myStyles;
