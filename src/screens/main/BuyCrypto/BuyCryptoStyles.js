import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    contentContainer: {
      flexGrow: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
    },
    centerView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      color: theme.primary,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '700',
    },
    cardBox: {
      marginTop: 20,
      marginHorizontal: 20,
      width: 325,
      height: 186,
    },
    cardItem: {
      height: 186,
      resizeMode: 'contain',
    },
    textContainer: {
      position: 'absolute',
      bottom: 20,
      left: 30,
      overflow: 'hidden',
      width: 285,
      zIndex: 9999,
    },
    cardTitle: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
      fontWeight: '500',
      flexShrink: 1,
    },
    cardDescription: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      fontWeight: '500',
      marginTop: 6,
      flexShrink: 1,
    },
  });

export default myStyles;
