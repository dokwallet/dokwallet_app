import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const isIpad = WIDTH >= 768;

let itemWidth;
let marginIcon;

if (isIpad) {
  itemWidth = WIDTH / 1.25;
  marginIcon = 50;
} else {
  itemWidth = WIDTH / 1.1;
  marginIcon = 10;
}

const myStyles = theme =>
  StyleSheet.create({
    safeareaView: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingHorizontal: 20,
    },
    list: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: theme.gray,
    },
    iconBoxChecked: {
      width: 39,
      height: 39,
      backgroundColor: theme.background,
      borderRadius: 20,
      marginLeft: marginIcon,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    iconBox: {
      width: 39,
      height: 39,
      backgroundColor: theme.backgroundColor,
      borderRadius: 20,
      marginLeft: marginIcon,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
      borderColor: theme.gray,
      borderWidth: 1,
    },

    items: {
      alignItems: 'flex-start',
      width: itemWidth,
    },
    title: {
      color: theme.font,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
    },
  });

export default myStyles;
