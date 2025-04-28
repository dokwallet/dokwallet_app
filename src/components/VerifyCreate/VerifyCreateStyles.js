import {StyleSheet, Dimensions, Platform} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    title: {
      color: theme.font,
      fontSize: 25,
      marginTop: 5,
      marginBottom: 5,
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
      marginBottom: 20,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    btn: {
      alignSelf: 'center',
      backgroundColor: theme.background,
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
      color: theme.gray,
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      marginTop: 10,
      alignSelf: 'center',
      marginBottom: 12,
    },
    wordsList: {
      marginTop: 20,
    },
    wordsBox: {
      width: 100,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 6,
      position: 'relative',
      marginTop: 15,
    },
    number: {
      color: theme.fontSecondary,
      fontSize: 12,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      width: 40,
      height: 40,
      backgroundColor: '#E6E2E1',
      paddingTop: 5,
      position: 'absolute',
      left: '30%',
      top: '-25%',
      fontWeight: 'bold',
      ...Platform.select({
        android: {
          borderRadius: 50,
        },
        ios: {
          borderRadius: 20,
          overflow: 'hidden',
        },
      }),
    },
    word: {
      color: theme.fontSecondary,
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      width: 100,
      height: 40,
      backgroundColor: '#E6E2E1',
      paddingTop: 5,
      ...Platform.select({
        android: {
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
        },
      }),
    },
    ...Platform.select({
      ios: {
        wordContainerIOS: {
          overflow: 'hidden',
          borderBottomLeftRadius: 50,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
        },
      },
    }),
  });

export default myStyles;
