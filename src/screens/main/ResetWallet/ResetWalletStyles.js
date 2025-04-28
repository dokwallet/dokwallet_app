import {StyleSheet, Dimensions, Platform} from 'react-native';

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
      flex: 1,
      alignItems: 'center',
    },
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    infoList: {
      marginTop: 20,
      width: inputWidth,
    },
    titleInfo: {
      color: theme.font,
      fontSize: 28,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    info: {
      color: theme.gray,
      fontSize: 17,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      marginTop: 20,
    },
    learnText: {
      color: theme.background,
      fontSize: 17,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    btnList: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
    },
    btn: {
      borderRadius: 10,
      position: 'relative',
      width: 150,
      height: 150,
    },
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#C0C0C0',
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 1,
          shadowRadius: 5,
        },
        android: {
          shadowColor: theme.font,
          elevation: 20,
        },
      }),
    },
    textBox: {
      position: 'absolute',
      left: '3%',
      bottom: '3%',
    },
    textBox2: {
      position: 'absolute',
      left: '5%',
      bottom: '3%',
    },
    textBtn: {
      fontSize: 17,
      fontFamily: 'Roboto-Regular',
    },
    icon_plus: {
      fill: theme.backgroundColor,
      position: 'absolute',
      top: '5%',
      left: '4%',
    },
    icon_create: {
      position: 'absolute',
      left: '18.53%',
      right: '6.07%',
      top: '12.8%',
      bottom: '11.43%',
    },
    icon_arrow: {
      position: 'absolute',
      left: '4%',
      top: '7%',
    },
  });

export default myStyles;
