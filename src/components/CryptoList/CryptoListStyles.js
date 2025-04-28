import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
    },
    searchContainer: {
      paddingHorizontal: 16,
      backgroundColor: theme.backgroundColor,
    },
    input: {
      backgroundColor: theme.backgroundColor,
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 10,
      fontSize: 18,
      marginBottom: 8,
      overflow: 'hidden',
      height: 50,
    },
  });

export default myStyles;
