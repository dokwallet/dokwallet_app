import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width + 80;
const {height: screenHeight} = Dimensions.get('window');
const modalHeight = screenHeight / 2.5;

const isIpad = WIDTH >= 768;

let ITEM_WIDTH;
let ITEM_PAD;

if (isIpad) {
  ITEM_WIDTH = Math.round(WIDTH * 0.6);
  ITEM_PAD = 20;
} else {
  ITEM_WIDTH = Math.round(WIDTH * 0.7);
  ITEM_PAD = 10;
}

const myStyles = StyleSheet.create({
  modalView: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  anotherContainerView: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  infoList: {
    padding: ITEM_PAD,
    width: ITEM_WIDTH,
    height: modalHeight - 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleInfo: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  info: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  btnList: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  learnBorder: {
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  learnBox: {
    width: ITEM_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  learnText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
  },
});

export default myStyles;
