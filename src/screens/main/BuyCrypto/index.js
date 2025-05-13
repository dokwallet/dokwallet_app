import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  ImageBackground,
} from 'react-native';
import myStyles from './BuyCryptoStyles';
import {cards} from 'data/data';
import {useContext} from 'react';
import {ThemeContext} from 'theme/ThemeContext';
import {useSelector} from 'react-redux';
import {
  getCryptoProviders,
  getCryptoProvidersOTC,
  getSelectedCountry,
} from 'dok-wallet-blockchain-networks/redux/cryptoProviders/cryptoProvidersSelectors';
import {getName} from 'country-list';
import {getLocalCurrency} from 'dok-wallet-blockchain-networks/redux/settings/settingsSelectors';
import {currencySymbol} from 'data/currency';

const BuyCrypto = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = myStyles(theme);
  const providers = useSelector(getCryptoProviders);
  const shownOTC = useSelector(getCryptoProvidersOTC);
  const country = useSelector(getSelectedCountry);
  const localCurrency = useSelector(getLocalCurrency);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {providers.length === 0 && !shownOTC ? (
          <View style={styles.centerView}>
            <Text
              style={
                styles.title
              }>{`No providers are available for selected country '${getName(
              country,
            )}'.`}</Text>
          </View>
        ) : (
          cards.map((item, index) => {
            if (
              (index === 0 && providers.length >= 1) ||
              (index === 1 && shownOTC)
            ) {
              return (
                <TouchableOpacity
                  style={styles.cardBox}
                  key={index}
                  onPress={() => {
                    if (index === 0) {
                      navigation.navigate('CryptoProviders');
                    } else {
                      navigation.navigate('OTC');
                    }
                  }}>
                  <ImageBackground
                    source={item.src}
                    style={styles.cardItem}
                    resizeMode={'contain'}>
                    <View style={styles.textContainer}>
                      <Text style={styles.cardTitle} numberOfLines={3}>
                        {index === 0 ? 'Credit Card\nBank Transfer' : 'OTC'}
                      </Text>
                      <Text style={styles.cardDescription} numberOfLines={1}>
                        {index === 0 ? 'Alternative Payment Method' :  `(Must be over ${currencySymbol[localCurrency]}10000)`}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }
            return null;
          })
        )}
      </ScrollView>
    </View>
  );
};

export default BuyCrypto;
