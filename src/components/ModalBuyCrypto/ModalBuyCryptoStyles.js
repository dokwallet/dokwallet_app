import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(WIDTH * 0.7);
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const myStyles = theme =>
  StyleSheet.create({
    infoList: {
      padding: 10,
      width: ITEM_WIDTH,
      height: modalHeight - 120,
      display: 'flex',
      justifyContent: 'center',
    },
    infoBox: {
      textAlign: 'left',
      width: ITEM_WIDTH / 1.2,
      marginBottom: 20,
    },
    titleInfo: {
      color: theme.font,
      fontSize: 22,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      marginBottom: 10,
    },
    info: {
      color: theme.font,
      fontSize: 15,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      marginBottom: 10,
    },
    buttonList: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: ITEM_WIDTH,
      height: 60,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',

      borderTopWidth: 1,
      borderTopColor: theme.gray,
    },
    buttonTitle: {
      color: theme.background,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      textTransform: 'uppercase',
    },
  });

export default myStyles;
