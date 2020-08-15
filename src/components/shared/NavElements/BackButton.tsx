// External Dependencies
import React from 'react';

// Internal Dependencies
import backImage from 'assets/images/ic_webBack@2x.png';
import IconButton from 'components/shared/IconButton';
import { navButtonHeight } from 'constants/sizes';

// Local Typings
interface Props {
  onClick: () => void;
}

// Component Definition
const BackButton: React.FC<Props> = ({
  onClick,
}) => (
  <IconButton
    height={navButtonHeight}
    onClick={onClick}
  >
    <img
      alt="go back"
      height="100%"
      src={backImage}
    />
  </IconButton>
);

export default BackButton;
