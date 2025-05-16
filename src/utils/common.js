import {IS_ANDROID} from 'utils/dimensions';
import {sha256} from 'react-native-sha256';
import {getBuildNumber, getVersion} from 'react-native-device-info';
import crypto from 'react-native-quick-crypto';

export const inAppBrowserOptions = IS_ANDROID
  ? {
      forceCloseOnRedirection: false,
      showInRecents: true,
    }
  : {modalEnabled: true};

export async function generateSHA256ForCoins(coins, isEVMChain) {
  const coinData = Array.isArray(coins) ? coins : [];
  if (coinData.length) {
    let coinNames = [];
    for (let i = 0; i < coinData.length; i++) {
      const item = coinData[i];
      const str = `${
        isEVMChain(item?.chain_name) ? 'ETH' : item.chain_symbol
      }:${item.address}`;
      if (item?.type === 'coin' && !coinNames.includes(str)) {
        coinNames.push(str);
      }
    }
    return Promise.all(coinNames.map(item => sha256(item)));
  }
  return [];
}

export const APP_VERSION = `${getVersion()}_${getBuildNumber()}`;

export function randomNumber(min, max) {
  return crypto.randomInt(min, max);
}

export const parseUrlQS = url => {
  try {
    let params = {};
    if (url) {
      const queryString = url.split('?')[1];
      if (queryString) {
        const pairs = queryString.split('&');
        pairs.forEach(pair => {
          const [key, value] = pair.split('=');
          params[key] = value;
        });
      }
    }
    return params;
  } catch (e) {
    console.error('Error in parsing the url', e);
    return {};
  }
};

export const validatePaymentUrl = (url, qsObj) => {
  try {
    return !!(
      url?.includes('home/send/send-funds') &&
      qsObj?.address &&
      qsObj?.currency
    );
  } catch (e) {
    console.error('Error in validatePaymentUrl', e);
    return false;
  }
};

export const validateWCUrl = (url, qsObj) => {
  try {
    return !!(url?.includes('/wc') && qsObj?.uri);
  } catch (e) {
    console.error('Error in validateWCUrl', e);
    return false;
  }
};
