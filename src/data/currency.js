import Dollar from 'assets/images/crypto/$.svg';
import Euro from 'assets/images/crypto/euro.svg';

export let currency = [
  {
    page: 'bitcoin:bitcoin',
    type: 'coin',
    title: 'Bitcoin',
    symbol: 'BTC',
    top: 'true',
    chain_id: 'bitcoin',
    chain_symbol: 'BTC',
  },
  // {
  //   page: 'Bitcoin Cash',
  //   title: 'BCH',
  //   top: 'true',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '116.41',
  //   transactions: [],
  // },
  {
    page: 'tron:tron',
    title: 'Tron',
    symbol: 'TRX',
    top: 'true',
    type: 'coin',
    chain_id: 'tron',
    chain_symbol: 'TRX',
  },

  // {
  //   chain: 'dash'
  //   page: 'Dash',
  //   title: 'DASH',
  //   top: 'true',
  //   getAddress: () => 'dashaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '44.83',
  //   transactions: [],
  // },
  {
    page: 'ethereum:ethereum',
    title: 'Ethereum',
    symbol: 'ETH',
    top: 'false',
    type: 'coin',
    chain_id: 'ethereum',
    chain_symbol: 'ETH',
  },
  // {
  //   page: 'Litecoin',
  //   title: 'LTC',
  //   top: 'true',
  //   getAddress: () => 'litecoinaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '92.50',
  //   transactions: [],
  // },
  // {
  //   page: 'Stellar',
  //   title: 'XML',
  //   top: 'false',
  //   getAddress: () => 'stelaraddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '0.088',
  //   transactions: [],
  // },
  // {
  //   page: 'Ripple',
  //   title: 'XRP',
  //   top: 'false',
  //   getAddress: () => 'rippleaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '0.44',
  //   transactions: [],
  // },
  // {
  //   page: '2key',
  //   title: '2KEY',
  //   top: 'false',
  //   getAddress: () => '2keyaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '0.60',
  //   transactions: [],
  // },
];

////////////////////////////////////////////

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const dollar = <Dollar width="30" height="30" fill="white" />;
export const euro = <Euro width="30" height="30" fill="white" />;

export const amountList = [
  {
    src: dollar,
    value: '5,000 to 10,000 Dollar',
  },
  {
    src: dollar,
    value: '10,000 to 20,000 Dollar',
  },
  {
    src: dollar,
    value: '20,000 to 50,000 Dollar',
  },
  {
    src: dollar,
    value: '50,000 to 100,000 Dollar',
  },
  {
    src: dollar,
    value: 'More than 100,000 Dollar',
  },
];

export const localCurrencyList = [
  {
    icon: dollar,
    label: 'United States Dollar',
    id: 'USD',
  },
  {
    icon: euro,
    label: 'Euro',
    id: 'EUR',
  },
];

export const currencyIcon = {
  USD: dollar,
  EUR: euro,
};

export const currencySymbol = {
  USD: '$',
  EUR: '€',
};
