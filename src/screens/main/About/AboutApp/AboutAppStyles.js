import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const isIpad = WIDTH >= 768;

let itemLeft;

if (isIpad) {
  itemLeft = 50;
}

const myStyles = theme =>
  StyleSheet.create({
    section: {
      width: WIDTH,
      flex: 1,
      alignItems: 'flex-start',
      padding: 15,
      backgroundColor: theme.backgroundColor,
      paddingLeft: itemLeft,
    },
    title: {
      color: theme.font,
      fontSize: 24,
      fontFamily: 'Roboto-Medium',
      marginBottom: 5,
    },
    list: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      lineHeight: 30,
    },
    item: {color: '#BB612F'},
    marginLeft: 110,
  });

export default myStyles;
