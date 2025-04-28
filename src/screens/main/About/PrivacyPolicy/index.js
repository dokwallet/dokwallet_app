import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import myStyles from './PrivacyPolicyStyles';
import {ThemeContext} from 'theme/ThemeContext';
import {useContext} from 'react';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {inAppBrowserOptions} from 'utils/common';

const PrivacyPolicy = () => {
  const uri = 'https://dokwallet.com/privacypolicy.html';
  const {theme} = useContext(ThemeContext);
  const styles = myStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GDPR Compliant</Text>
      <View style={styles.mainContainer}>
        <WebView
          style={styles.main}
          source={{uri}}
          onShouldStartLoadWithRequest={request => {
            if (request.url !== uri) {
              InAppBrowser.open(request?.url, inAppBrowserOptions).then();
              return false;
            }
            return true;
          }}
        />
      </View>
    </View>
  );
};

export default PrivacyPolicy;
