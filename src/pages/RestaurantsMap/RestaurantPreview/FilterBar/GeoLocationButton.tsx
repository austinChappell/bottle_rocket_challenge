// External Dependencies
import React from 'react';

// Internal Dependencies
import Icon from 'components/shared/Icon';
import IconButton from 'components/shared/IconButton';
import Space from 'components/shared/Space';

// Local Typings
interface Props {
  onClick: () => void;
}

// Component Definition
const GeoLocationButton: React.FC<Props> = ({
  onClick,
}) => (
  <Space
    clone
    ml={16}
  >
    <IconButton onClick={onClick}>
      <Icon
        color="primaryDark"
        name="gps"
      />
    </IconButton>
  </Space>
);

export default GeoLocationButton;
