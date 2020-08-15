// External Dependencies
import React from 'react';

import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import { Restaurant } from 'types/api';

// Local Typings
interface Props {
  selectedRestaurant: Restaurant;
}

// Component Definition
const PreviewList: React.FC<Props> = ({
  selectedRestaurant: {
    location,
  },
}) => (
  <div>
    <Space my={6}>
      <BodyText
        color="white"
        size="sm"
      >
        {location.address}
      </BodyText>
    </Space>

    <Space my={6}>
      <BodyText
        color="white"
        size="sm"
      >
        {location.city}, {location.state} {location.postalCode}
      </BodyText>
    </Space>
  </div>
);

export default PreviewList;
