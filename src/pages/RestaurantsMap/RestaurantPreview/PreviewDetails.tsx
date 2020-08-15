// External Dependencies
import React from 'react';

// Internal Dependencies
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import { useSelectGeoLocation } from 'state/selectors/general';
import { Restaurant } from 'types/api';
import { getDistanceBetweenTwoLocations } from 'utils/location';

// Local Typings
interface Props {
  selectedRestaurant: Restaurant;
}

// Component Definition
const PreviewDetails: React.FC<Props> = ({
  selectedRestaurant: {
    location,
  },
}) => {
  const geoLocation = useSelectGeoLocation();

  const distance = geoLocation
    ? getDistanceBetweenTwoLocations(
      geoLocation.coords,
      {
        latitude: location.lat,
        longitude: location.lng,
      },
    )
    : null;

  return (
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

      {distance && (
        <Space my={12}>
          <BodyText
            color="black"
            size="sm"
          >
            ({Math.round(distance * 100) / 100} miles away)
          </BodyText>
        </Space>
      )}
    </div>
  );
};

export default PreviewDetails;
