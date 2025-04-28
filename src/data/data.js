const data = [
  {
    title: 'Multi-currency Support',
    body: 'Store, send, receive and exchange primary crypto currencies like BTC, LTC, ETH and more.',
    src: require('assets/images/screens/register1.png'),
  },
  {
    title: 'Buy Crypto',
    body: 'Buy crypto directly from the app with a credit/debit card!',
    src: require('assets/images/screens/register2.png'),
  },
  {
    title: 'Convenient biometric authentication login',
    body: 'Keep all your assets secure with our biometric authentication-based login.',
    src: require('assets/images/screens/register3.png'),
  },
  {
    title: 'The best place to store your crypto assets.',
    body: 'Store all your crypto assets in one place with our user-friendly wallet.',
    src: require('assets/images/screens/register4.png'),
  },
];

export default data;

import CloudCheck from 'assets/images/icons/cloud-check.svg';
import Edit from 'assets/images/icons/edit.svg';

export const google = <CloudCheck height="30" width="30" />;
export const manual = <Edit height="30" width="30" />;

export const wallet = [
  // {
  //   title: 'Google Drive Backup',
  //   body: 'Not active',
  //   icon: google,
  // },
  {
    title: 'Manual Backup',
    body: 'Active',
    icon: manual,
  },
];

export const cards = [
  {
    src: require('assets/images/buy/card.png'),
  },
  {
    src: require('assets/images/buy/card2.png'),
  },
];
