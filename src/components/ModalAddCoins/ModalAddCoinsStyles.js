import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    tabBar: {
      backgroundColor: theme.lightBackground,
      borderRadius: 20,
      marginHorizontal: 16,
      marginTop: 10,
      // height: 40,
      elevation: 0, // Remove shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
    },
    indicator: {
      backgroundColor: theme.background,
      height: '100%',
      borderRadius: 20,
    },
    tabLabel: {
      fontSize: 16,
      color: theme.font,
    },
    tabLabelFocused: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });

export default myStyles;
