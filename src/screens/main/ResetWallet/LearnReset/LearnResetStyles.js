import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;
const HEIGHT = Dimensions.get('window').height;

const isIpad = WIDTH >= 768;

let inputWidth;

if (isIpad) {
  inputWidth = Math.round(WIDTH * 0.8);
} else {
  inputWidth = Math.round(WIDTH * 0.75);
}

const myStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      height: HEIGHT,
    },
    infoList: {
      marginTop: 20,
      width: inputWidth,
      alignSelf: 'center',
    },
    titleInfo: {
      color: theme.font,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      marginBottom: 10,
    },
    info: {
      color: theme.font,
      fontSize: 17,
      marginBottom: 20,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    span: {
      color: theme.font,
      fontSize: 17,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
      marginTop: 20,
    },
    learnText: {
      color: theme.background,
      fontSize: 17,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
  });

export default myStyles;
