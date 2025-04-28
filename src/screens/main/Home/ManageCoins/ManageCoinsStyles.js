import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const ITEM_HEIGHT = Math.round(HEIGHT * 0.18);

const WIDTH = Dimensions.get('window').width;

const isIpad = WIDTH >= 768;

let formWidth;

if (isIpad) {
  formWidth = WIDTH / 1.1;
} else {
  formWidth = WIDTH / 1.05;
}

const myStyles = theme =>
  StyleSheet.create({
    input: {
      width: formWidth,
      backgroundColor: theme.backgroundColor,
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 10,
      fontSize: 18,
    },
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    mainView: {
      flex: 1,
    },
    searchView: {
      width: '100%',
      alignItems: 'center',
    },

    btnList: {
      height: ITEM_HEIGHT,
      width: WIDTH,
      backgroundColor: theme.backgroundColor,
    },
    btnAdd: {
      height: ITEM_HEIGHT / 2,
      width: WIDTH,
      borderBottomWidth: 1,
      borderBottomColor: theme.gray,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    box: {
      marginLeft: 20,
    },
    circle: {
      fill: theme.gray,
    },
    title: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    text: {
      color: theme.gray,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    optionsContainer: {
      marginTop: 36,
      width: 150,
      marginLeft: -16,
    },
    optionMenu: {
      width: '100%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundColor,
      borderBottomColor: theme.gray,
      borderBottomWidth: 1,
      flexDirection: 'row',
      gap: 8,
    },
    optionText: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '700',
    },
    doneButtonStyle: {
      paddingHorizontal: 16,
    },
    doneText: {
      color: theme.background,
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default myStyles;
