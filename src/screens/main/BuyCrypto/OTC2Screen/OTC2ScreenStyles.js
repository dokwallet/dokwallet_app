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
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    contentContainerStyle: {
      flexGrow: 1,
      alignItems: 'center',
    },
    formInput: {
      width: inputWidth,
      marginTop: 40,
      flex: 1,
    },
    title: {
      color: theme.font,
      fontSize: 24,
      marginBottom: 10,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      fontWeight: '700',
    },
    text: {
      color: theme.primary,
      fontSize: 15,
      marginBottom: 20,
      fontFamily: 'Roboto-Regular',
    },
    mainOptionsView: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      borderWidth: 1,
      borderColor: theme.background,
      marginBottom: 24,
      borderRadius: 4,
      overflow: 'hidden',
    },
    mainSubViewOptions: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    selectedMainOptions: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    mainOptionText: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '600',
    },
    cryptoText: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '500',
    },
    cryptoOptionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      borderWidth: 1,
      borderColor: theme.gray,
      marginBottom: 24,
      borderRadius: 4,
      overflow: 'hidden',
      paddingHorizontal: 16,
    },
    selectedMainOptionText: {
      color: '#fff',
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '600',
    },
    input: {
      marginBottom: 20,
      backgroundColor: theme.backgroundColor,
    },
    inputContainer: {
      flex: 1,
      height: 56,
    },
    dropdownContainer: {
      marginBottom: 24,
    },
    button: {
      backgroundColor: theme.background,
      height: 60,
      borderRadius: 10,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: inputWidth,
      marginBottom: 20,
    },
    itemWidth: {
      width: inputWidth,
    },
    buttonTitle: {
      color: theme.title,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    textStyle: {
      color: theme.primary,
      fontSize: 15,
      marginBottom: 8,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
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
