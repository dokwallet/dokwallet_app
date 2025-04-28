import {StyleSheet, Dimensions} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      width: '100%',
    },
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      width: '100%',
      paddingHorizontal: 20,
    },
    formInput: {
      marginTop: 24,
      flex: 1,
    },
    input: {
      marginTop: 20,
      backgroundColor: theme.backgroundColor,
    },
    button: {
      backgroundColor: theme.background,
      height: 60,
      borderRadius: 10,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 32,
    },
    buttonTitle: {
      color: theme.title,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    textConfirm: {
      marginTop: 4,
      color: 'red',
      marginLeft: 10,
      fontSize: 12,
      fontFamily: 'Roboto-Regular',
    },
    listHeaderView: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.font,
      backgroundColor: theme.backgroundColor,
    },
    listHeaderTitle: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      fontWeight: '700',
    },
    listItemView: {
      width: '92%',
      height: 50,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.headerBorder,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    derivePathStyle: {
      color: theme.font,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      marginBottom: 4,
    },
    activeDerivePathStyle: {
      color: theme.background,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
    },
    addressStyle: {
      color: theme.primary,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    iconStyle: {
      height: 32,
      width: 32,
      resizeMode: 'contain',
      marginRight: 12,
    },
  });

export default myStyles;
