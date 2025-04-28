import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 4,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 16,
      justifyContent: 'space-between',
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
