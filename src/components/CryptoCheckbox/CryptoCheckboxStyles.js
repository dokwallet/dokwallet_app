import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 10,
    },
    text: {
      color: theme.font,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
    },
    checkText: {
      color: theme.background,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      marginLeft: 10,
    },
  });

export default myStyles;
