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
    },
    list: {
      flex: 1,
      paddingHorizontal: 20,
    },
    contentContainerStyle: {
      paddingBottom: 20,
    },
    title: {
      color: theme.font,
      fontSize: 18,
      fontFamily: 'Roboto-Bold',
      marginBottom: 15,
      marginTop: 15,
    },
    btn: {
      width: itemWidth - 20,
      flexDirection: 'row',
      minHeight: 55,
      fontSize: 20,
      alignItems: 'center',
      alignSelf: 'center',
    },
    box: {
      marginLeft: 15,
      flexShrink: 1,
      marginRight: 4,
    },
    btnTitle: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Bold',
    },
    btnText: {
      color: theme.gray,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
  });

export default myStyles;
