import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const isIpad = WIDTH >= 768;

let itemWidth;

if (isIpad) {
  itemWidth = WIDTH / 1.12;
} else {
  itemWidth = WIDTH / 1.1;
}

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    walletSection: {
      marginTop: 20,
      width: itemWidth,
      alignSelf: 'center',
    },
    walletBox: {
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 10,
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: theme.headerBorder,
    },
    title: {color: theme.gray, fontSize: 14, marginLeft: 70},
    textContainer: {paddingHorizontal: 10, flex: 1, marginLeft: 12},
    mainText: {
      fontSize: 18,
      color: theme.gray,
    },
    secondaryText: {
      fontSize: 14,
      color: theme.gray,
      marginTop: 6,
    },
    walletList: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 5,
      paddingRight: 10,
      flex: 1,
    },
    avatarWrapper: {
      position: 'relative',
    },
    avatarAvatar: {
      backgroundColor: 'white',
    },
    badge: {
      backgroundColor: '#2F77BA',
      zIndex: 2,
      position: 'absolute',
      top: -5,
      right: -5,
    },
    boxBtn: {
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
    },
    settingsBtn: {fontSize: 24, color: theme.font, fontWeight: 'bold'},
    input: {
      width: '90%',
      alignSelf: 'center',
      backgroundColor: theme.backgroundColor,
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 10,
      marginTop: 16,
      marginBottom: 16,
      fontSize: 18,
      height: 50,
      padding: 0,
      paddingTop: 0,
      alignItems: 'center',
    },
  });

export default myStyles;
