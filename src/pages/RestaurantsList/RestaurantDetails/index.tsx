// External Dependencies
import React from 'react';

// Internal Dependencies
import Map from 'components/shared/Map';
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { Restaurant } from 'types/api';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';

// Local Dependencies
import { DetailsContainer, NameBanner } from './styles';

// Local Typings
interface Props {
  restaurant: Restaurant;
}

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
      <Map
        defaultZoom={15}
        readOnly
        restaurants={[restaurant]}
      />

      <NameBanner>
        <SectionTitleText ignoreTheme>
          {restaurant.name}
        </SectionTitleText>

        <Space
          clone
          mt={6}
        >
          <SubTitleText ignoreTheme>
            {restaurant.category}
          </SubTitleText>
        </Space>
      </NameBanner>

      <DetailsContainer>
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
      </DetailsContainer>
    </div>
  );
};

export default RestaurantDetails;
