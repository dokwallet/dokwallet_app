import {StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    contentContainerStyle: {
      flexGrow: 1,
    },
    itemView: {
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 8,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.gray,
      justifyContent: 'space-between',
    },
    subView: {
      flex: 1,
      paddingRight: 8,
    },
    subRowView: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerTitle: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '600',
    },
    blockButton: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: theme.background,
      borderRadius: 8,
    },
    buttonTitle: {
      color: 'white',
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '600',
    },
  });

export default myStyles;
