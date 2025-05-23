import {View, Text, TouchableOpacity} from 'react-native';
import myStyles from './NotificationsStyles';
import {Switch} from 'react-native-paper';
import ArrowDown from 'assets/images/settings/arrow-down.svg';
import ArrowUp from 'assets/images/settings/arrow-up.svg';
import {useSelector, useDispatch} from 'react-redux';
import {
  isNotificationsReceived,
  isNotificationsSent,
} from 'dok-wallet-blockchain-networks/redux/settings/settingsSelectors';
import {
  updateReceived,
  updateSent,
} from 'dok-wallet-blockchain-networks/redux/settings/settingsSlice';
import {useContext} from 'react';
import {ThemeContext} from 'theme/ThemeContext';

const Notifications = () => {
  const {theme} = useContext(ThemeContext);
  const styles = myStyles(theme);

  const isReceived = useSelector(isNotificationsReceived);
  const isSent = useSelector(isNotificationsSent);

  const onToggleSwitchReceive = () => dispatch(updateReceived(!isReceived));
  const onToggleSwitchSent = () => dispatch(updateSent(!isSent));

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.title}>Funds</Text>
        <View
          style={{
            ...styles.btn,
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderBottomColor: theme.gray,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ArrowDown width="25" height="25" fill={theme.font} />
            <View style={styles.box}>
              <Text style={styles.btnTitle}>Received</Text>
            </View>
          </View>
          <Switch
            value={isReceived}
            onValueChange={onToggleSwitchReceive}
            trackColor={{false: 'gray', true: '#E8E8E8'}}
            thumbColor={isSent ? theme.background : 'white'}
            ios_backgroundColor="#E8E8E8"
          />
        </View>
        <View
          style={{
            ...styles.btn,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ArrowUp width="25" height="25" fill={theme.font} />
            <View style={styles.box}>
              <Text style={styles.btnTitle}>Sent</Text>
            </View>
          </View>
          <Switch
            value={isSent}
            onValueChange={onToggleSwitchSent}
            trackColor={{false: 'gray', true: '#E8E8E8'}}
            thumbColor={isSent ? theme.background : 'white'}
            ios_backgroundColor="#E8E8E8"
          />
        </View>
      </View>
    </View>
  );
};

export default Notifications;
