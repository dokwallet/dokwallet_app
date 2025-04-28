import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    contentContainerStyle: {
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },

    walletBox: {
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      color: theme.gray,
      fontSize: 14,
      margin: 20,
    },
    textContainer: {padding: 10, fontSize: 18},
    mainText: {
      fontSize: 18,
      color: theme.gray,
    },

    avatarWrapper: {
      position: 'relative',
    },
    avatarAvatar: {
      backgroundColor: 'white',
    },
  });

export default myStyles;
