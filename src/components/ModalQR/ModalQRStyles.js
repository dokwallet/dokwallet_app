import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);

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
    info2: {
      color: theme.font,
      fontSize: 16,
      textAlign: 'center',
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
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    checkText: {
      color: theme.font,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
    },
    btnVerify: {
      alignSelf: 'center',
      width: ITEM_WIDTH - 140,
      borderRadius: 10,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    verifyTitle: {
      color: theme.backgroundColor,
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
