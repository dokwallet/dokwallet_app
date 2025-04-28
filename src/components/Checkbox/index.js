import React from 'react';

import {CheckBox} from '@rneui/themed';

const Checkbox = ({checked, onChange, customStyle}) => {
  return (
    <CheckBox
      containerStyle={[
        {
          backgroundColor: 'transparent',
          borderWidth: 0,
          padding: 0,
          marginLeft: 0,
          marginTop: 0,
        },
        customStyle ? customStyle : {},
      ]}
      size={28}
      checked={checked}
      onPress={onChange}
      iconType="material-community"
      checkedIcon="checkbox-marked-circle"
      uncheckedIcon="checkbox-blank-circle-outline"
      checkedColor="#F44D03"
    />
  );
};

export default Checkbox;
