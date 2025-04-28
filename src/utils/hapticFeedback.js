import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

// Trigger haptic feedback
export const triggerHapticFeedbackLight = () => {
  ReactNativeHapticFeedback.trigger('impactLight', options);
};

export const triggerHapticFeedbackMedium = () => {
  ReactNativeHapticFeedback.trigger('impactMedium', options);
};
export const triggerHapticFeedbackHeavy = () => {
  ReactNativeHapticFeedback.trigger('impactHeavy', options);
};
