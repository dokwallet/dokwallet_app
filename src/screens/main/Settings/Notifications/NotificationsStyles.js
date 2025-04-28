import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const isIpad = WIDTH >= 768;

let itemWidth;

if (isIpad) {
  itemWidth = WIDTH / 1.15;
} else {
  itemWidth = WIDTH / 1.1;
}

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
    },
    list: {
      width: itemWidth,
    },
    title: {
      color: theme.gray,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      marginBottom: 15,
      marginTop: 15,
      textTransform: 'uppercase',
    },
    btn: {
      width: itemWidth,
      flexDirection: 'row',
      height: 50,
      fontSize: 20,
      alignItems: 'center',
      alignSelf: 'center',
    },
    box: {
      marginLeft: 15,
    },
    btnTitle: {
      color: theme.font,
      fontSize: 17,
      fontFamily: 'Roboto-Bold',
    },
  });

export default myStyles;
