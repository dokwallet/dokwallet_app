import {Dimensions} from 'react-native';
import {useEffect, useState} from 'react';

export function useFloatingWidth() {
  const [float, setFloat] = useState(false);

  useEffect(() => {
    const {width: screenWidth} = Dimensions.get('window');

    const isIpad = screenWidth >= 768;

    if (isIpad) {
      setFloat(true);
    }
  }, []);

  return float;
}
