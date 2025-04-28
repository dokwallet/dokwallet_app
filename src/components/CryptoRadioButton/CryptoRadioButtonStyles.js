import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    section: {
      paddingVertical: 24,
      justifyContent: 'center',
    },
    title: {
      color: theme.primary,
      fontSize: 15,
      marginBottom: 15,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    item: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    itembox: {
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
    },
  });

export default myStyles;
