import {StyleSheet, Dimensions, Platform} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const myStyles = theme =>
  StyleSheet.create({
    modal: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    list: {
      display: 'flex',
      padding: 10,
    },
    listTitle: {
      color: theme.backgroundColor,
      fontSize: 25,
      fontFamily: 'Roboto-Regular',
      marginBottom: 20,
    },
    listText: {
      color: theme.backgroundColor,
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
    },
    listbtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 30,
    },
    button: {
      height: 50,
      borderRadius: 10,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    btnBuy: {
      color: theme.backgroundColor,
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
      textTransform: 'uppercase',
    },
    btnEx: {
      color: theme.backgroundColor,
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
