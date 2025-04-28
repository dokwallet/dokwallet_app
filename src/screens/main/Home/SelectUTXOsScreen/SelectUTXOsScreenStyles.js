import {StyleSheet, Platform} from 'react-native';

const myStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    containerContainerStyle: {
      flexGrow: 1,
      paddingHorizontal: 14,
      backgroundColor: theme.backgroundColor,
    },
    sectionListContainerContainerStyle: {
      flexGrow: 1,
    },
    checkboxStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      padding: 0,
      marginLeft: 0,
    },
    emptyView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyText: {
      color: theme.font,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 16,
      color: theme.font,
      fontWeight: 'bold',
      fontFamily: 'Roboto-Regular',
    },
    rowView: {
      marginLeft: 25,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowLabel: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    btn: {
      backgroundColor: theme.background,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      marginTop: 24,
      marginBottom: 24,
      marginHorizontal: 24,
    },
    btnDisabled: {
      backgroundColor: '#708090',
    },
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#C0C0C0',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
          shadowRadius: 5,
        },
        android: {
          shadowColor: theme.font,
          elevation: 10,
        },
      }),
    },
    btnText: {
      color: theme.title,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      textTransform: 'uppercase',
    },
    optionsContainer: {
      marginTop: 30,
      width: 200,
    },
    optionMenu: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionText: {
      color: theme.font,
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '700',
    },
  });

export default myStyles;
