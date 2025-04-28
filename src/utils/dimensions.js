import {Dimensions, Platform} from 'react-native';
import {useEffect, useState} from 'react';

const {width: screenWidth} = Dimensions.get('window');
const {height: screenHeight} = Dimensions.get('window');

export function useFloatingHeight() {
  const [floatBtn, setFloatBtn] = useState(0);

  useEffect(() => {
    const {height: screenHeight} = Dimensions.get('window');

    if (screenHeight < 699) {
      setFloatBtn(screenHeight / 2.7);
      return;
    }
    if (screenHeight > 699) {
      setFloatBtn(screenHeight / 2.2);
      return;
    }
  }, []);
  return floatBtn;
}

export const isIpad = screenWidth >= 768;

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const SCREEN_WIDTH = screenWidth;
export const SCREEN_HEIGHT = screenHeight;
