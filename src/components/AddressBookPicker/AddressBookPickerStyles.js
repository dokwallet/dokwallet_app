import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      paddingLeft: 8,
      paddingTop: 16,
      paddingBottom: 8,
    },
    textStyle: {
      fontSize: 15,
      color: theme.font,
      fontWeight: '600',
      textAlign: 'center',
      flex: 1,
    },
  });

export default myStyles;
