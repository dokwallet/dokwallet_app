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
    },
    box: {
      paddingHorizontal: 20,
    },
    titleTrans: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    rowView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },

    address: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    viewButton: {
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
    viewButtonText: {
      color: theme.blue,
      fontSize: 16,
      fontFamily: 'Roboto-Bold',
    },
    borderBox: {
      borderTopWidth: 1,
      borderTopColor: theme.gray,
      paddingHorizontal: 20,
    },
    sortList: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 4,
    },
    sortTitle: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      textTransform: 'uppercase',
    },
    titleItem: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
  });

export default myStyles;
