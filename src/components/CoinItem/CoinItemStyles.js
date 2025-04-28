import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    hidden: {
      display: 'none',
    },
    section: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 52,
      paddingHorizontal: 16,
    },
    list: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.gray,
      flex: 1,
      justifyContent: 'space-between',
      height: '100%',
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    },
    rowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      maxHeight: 24,
    },
    item: {
      alignItems: 'flex-start',
      flex: 1,
    },
    itemNumber: {
      alignItems: 'flex-end',
    },
    title: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      flexShrink: 1,
    },
    text: {
      color: theme.gray,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      flexShrink: 1,
    },
    iconBox: {
      width: 39,
      height: 39,
      color: theme.backgroundColor,
      backgroundColor: theme.font,
      borderRadius: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    arrow: {
      fill: theme.gray,
    },
    btn: {
      alignSelf: 'center',
    },
    circle: {
      fill: theme.background,
    },
    imageStyle: {
      height: '100%',
      width: '100%',
      borderRadius: 20,
    },
    dragIcon: {
      marginRight: 8,
    },
    boxBtn: {
      width: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
  });

export default myStyles;
