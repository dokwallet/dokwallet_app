import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const isIpad = screenWidth >= 768;

let itemWidth;

if (isIpad) {
  itemWidth = screenWidth / 1.15;
} else {
  itemWidth = screenWidth / 1.1;
}

const myStyles = theme =>
  StyleSheet.create({
    section: {
      backgroundColor: theme.backgroundColor,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 20,
    },
    list: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: theme.gray,
      width: itemWidth,
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },

    iconBox: {
      padding: 10,
    },
    arrow: {
      fill: theme.gray,
    },
  });

export default myStyles;
