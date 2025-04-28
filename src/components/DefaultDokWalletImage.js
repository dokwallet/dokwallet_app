import React, {useContext} from 'react';

import {ThemeContext} from 'theme/ThemeContext';
import LogoIconDark from 'assets/images/sidebarIcons/LogoSingleDark.svg';
import LogoIcon from 'assets/images/sidebarIcons/LogoSingle.svg';

const DefaultDokWalletImage = ({height, width}) => {
  const {theme} = useContext(ThemeContext);
  return theme.backgroundColor === '#121212' ? (
    <LogoIconDark width={height} height={width} />
  ) : (
    <LogoIcon width={height} height={width} />
  );
};

export default DefaultDokWalletImage;
