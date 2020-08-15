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
const PreviewDetails: React.FC<Props> = ({
  selectedRestaurant: {
    location,
  },
}) => (
  <div>
    <BodyText
      color="black"
      size="sm"
    >
      {location.address}
    </BodyText>

    <Space my={6}>
      <BodyText
        color="black"
        size="sm"
      >
        {location.city}, {location.state} {location.postalCode}
      </BodyText>
    </Space>
  </div>
);

export default PreviewDetails;
