// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import Map from 'components/shared/Map';
// Internal Dependencies
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import colors from 'constants/colors';
import { Restaurant } from 'types/api';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';

// Local Typings
interface Props {
  restaurant: Restaurant;
}

// Local Variables
const MapContainer = styled.div({
  height: 180,
});
const NameBanner = styled.div({
  backgroundColor: colors.primaryDark,
  display: 'flex',
  flexDirection: 'column',
  height: 60,
  justifyContent: 'center',
  padding: '0 12px',
});

// Component Definition
const RestaurantDetails: React.FC<Props> = ({
  restaurant,
}) => {
  const {
    contact,
    location,
  } = restaurant;

  return (
    <div>
      <MapContainer>
        <Map
          mapHeight="100%"
          readOnly
          restaurants={[restaurant]}
        />
      </MapContainer>

      <NameBanner>
        <SectionTitleText>
          {restaurant.name}
        </SectionTitleText>

        <Space
          clone
          mt={6}
        >
          <SubTitleText>
            {restaurant.category}
          </SubTitleText>
        </Space>
      </NameBanner>

      <Space
        clone
        px={12}
        py={16}
      >
        <div>
          <BodyText>
            {location.address}
          </BodyText>

          <BodyText>
            {location.city}, {location.state} {location.postalCode}
          </BodyText>

          {contact?.phone && (
            <Space
              clone
              mt={26}
            >
              <BodyText>
                {formatPhoneNumber(contact.phone)}
              </BodyText>
            </Space>
          )}

          {contact?.twitter && (
            <Space
              clone
              mt={26}
            >
              <BodyText>
                @{contact.twitter}
              </BodyText>
            </Space>
          )}
        </div>
      </Space>
    </div>
  );
};

export default RestaurantDetails;
