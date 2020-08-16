// External Dependencies
import React from 'react';

// Internal Dependencies
import Icon from 'components/shared/Icon';
import IconButton from 'components/shared/IconButton';

// Local Typings
interface Props {
  onClick: () => void;
}

// Component Definition
const GeoLocationButton: React.FC<Props> = ({
  onClick,
}) => (
  <IconButton onClick={onClick}>
    <Icon
      color="primaryDark"
      name="gps"
    />
  </IconButton>
);

export default GeoLocationButton;
