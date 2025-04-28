import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    containerContainerStyle: {
      flexGrow: 1,
      backgroundColor: theme.backgroundColor,
      padding: 20,
    },
    input: {
      backgroundColor: theme.backgroundColor,
      textAlign: 'auto',
      lineHeight: undefined,
    },
    infoView: {
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    info: {
      color: 'red',
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    button: {
      marginTop: 20,
      backgroundColor: theme.background,
      height: 60,
      borderRadius: 10,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTitle: {
      color: theme.title,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    textConfirm: {
      color: 'red',
      fontSize: 13,
      marginLeft: 8,
      marginTop: 8,
    },
    formInput: {
      flex: 1,
    },
    box: {
      backgroundColor: theme.whiteOutline,
      paddingHorizontal: 16,
      borderRadius: 8,
      overflow: 'hidden',
      marginTop: 24,
    },
    itemView: {
      flexDirection: 'row',
      height: 40,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: theme.font,
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
    },
    boxBalance: {
      color: theme.gray,
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'Roboto-Regular',
      alignSelf: 'center',
      flexShrink: 1,
      marginLeft: 8,
    },
    footerView: {
      flex: 1,
      paddingTop: 20,
      justifyContent: 'flex-end',
    },
  });

export default myStyles;
