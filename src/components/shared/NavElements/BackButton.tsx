// External Dependencies
import React from 'react';

// Internal Dependencies
import backImage from 'assets/images/ic_webBack@2x.png';
import forwardImage from 'assets/images/ic_webForward@2x.png';
import IconButton from 'components/shared/IconButton';
import { navButtonHeight } from 'constants/sizes';

// Local Typings
interface Props {
  arrowDirection?: 'back' | 'forward';
  onClick: () => void;
}

// Component Definition
const BackButton: React.FC<Props> = ({
  arrowDirection = 'back',
  onClick,
}) => (
  <IconButton
    height={navButtonHeight}
    onClick={onClick}
  >
    <img
      alt="go back"
      height="100%"
      src={arrowDirection === 'back' ? backImage : forwardImage}
    />
  </IconButton>
);

export default BackButton;
