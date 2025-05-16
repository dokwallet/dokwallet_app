import {Dimensions, StyleSheet} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    navigationHeader: {
      height: 44,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderBottomColor: theme.headerBorder,
      borderBottomWidth: 1,
    },
    rowFlex: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 12,
      gap: 8,
      flex: 1,
    },
    mainTitle: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      fontWeight: '500',
      flexShrink: 1,
    },

    indicatorStyle: {
      backgroundColor: '#191B26',
    },
    tabBarStyle: {
      backgroundColor: theme.background,
    },
    tabBarFontStyle: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      fontWeight: '700',
    },
    syncView: {
      paddingHorizontal: 16,
      height: 60,
      flexDirection: 'row',
      backgroundColor: theme.walletItemColor,
      alignItems: 'center',
    },
    syncButton: {
      paddingHorizontal: 24,
      height: 40,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginHorizontal: 12,
    },
    syncTitle: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '600',
      flex: 1,
    },
    syncButtonTitle: {
      color: 'white',
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '600',
    },
  });

export default myStyles;
