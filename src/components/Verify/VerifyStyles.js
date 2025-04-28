import {StyleSheet, Dimensions, Platform} from 'react-native';

export const WIDTH = Dimensions.get('window').width + 80;
const isIpad = Platform.OS === 'ios' && WIDTH >= 768;
let ITEM_WIDTH;
if (isIpad) {
  ITEM_WIDTH = (WIDTH - 80) / 1.15;
} else {
  ITEM_WIDTH = Math.round(WIDTH * 0.75);
}

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    section: {
      width: ITEM_WIDTH,
      alignSelf: 'center',
      paddingBottom: 40,
    },
    formInput: {
      width: ITEM_WIDTH,
      alignSelf: 'center',
      paddingBottom: 20,
      flex: 1,
      justifyContent: 'flex-end',
    },
    title: {
      color: theme.font,
      fontSize: 25,
      marginBottom: 10,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    span: {
      color: theme.gray,
      fontSize: 15,
      marginBottom: 5,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    textFirst: {
      color: theme.gray,
      fontSize: 15,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    text: {
      color: theme.gray,
      fontSize: 15,
      marginBottom: 10,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    input: {
      backgroundColor: theme.backgroundColor,
      width: ITEM_WIDTH,
      alignSelf: 'center',
    },
    checkbox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      width: ITEM_WIDTH,
      marginVertical: 10,
    },
    checkText: {
      width: ITEM_WIDTH - 32,
      color: 'red',
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    textConfirm: {
      marginTop: 5,
      color: 'red',
      marginLeft: 18,
      fontSize: 12,
    },
    btn: {
      width: ITEM_WIDTH,
      alignSelf: 'center',
      borderRadius: 10,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    btnTitle: {
      color: theme.title,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    info: {
      color: theme.font,
      fontSize: 15,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    wordsList: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignSelf: 'center',
    },
    wordsBox: {
      width: 50,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    number: {
      fontSize: 17,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      width: '100%',
      height: '100%',
      // borderRadius: 5,
      color: theme.gray,
      backgroundColor: '#E6E2E1',
      paddingTop: 20,
      ...Platform.select({
        android: {
          borderRadius: 5,
        },
        ios: {
          borderRadius: 5,
          overflow: 'hidden',
        },
      }),
    },
    numberRandom: {
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      width: '100%',
      height: '100%',
      // borderRadius: 5,
      paddingTop: 6,
      borderWidth: 1,
      borderColor: 'solid',
      ...Platform.select({
        android: {
          borderRadius: 5,
        },
        ios: {
          borderRadius: 5,
          overflow: 'hidden',
        },
      }),
    },
    icon: {
      textAlign: 'center',
      position: 'absolute',
      left: '26%',
      top: '50%',
    },
    cross: {
      fill: '#FF647C',
      textAlign: 'center',
      position: 'absolute',
      left: '35%',
      top: '55%',
    },
    check: {
      fill: '#FFFF',
      textAlign: 'center',
      position: 'absolute',
      left: '35%',
      top: '55%',
    },
  });

export default myStyles;
