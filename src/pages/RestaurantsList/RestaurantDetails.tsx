// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Map from 'components/shared/Map';
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { mediaQueries } from 'constants/breakpoints';
import colors from 'constants/colors';
import { Restaurant } from 'types/api';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';

// Local Typings
interface Props {
  restaurant: Restaurant;
}

// Local Variables
const mobilePadding = 12;
const tabletPadding = 24;
const desktopPadding = 32;
const MapContainer = styled.div({
  height: 180,

  [`${mediaQueries.isTabletMin}`]: {
    height: 250,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    height: 400,
  },
});
const NameBanner = styled.div({
  backgroundColor: colors.primaryDark,
  display: 'flex',
  flexDirection: 'column',
  height: 60,
  justifyContent: 'center',
  padding: `0 ${mobilePadding}px`,

  [`${mediaQueries.isTabletMin}`]: {
    height: 80,
    padding: `0 ${tabletPadding}px`,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    height: 100,
    padding: `0 ${desktopPadding}px`,
  },
});
const DetailsContainer = styled.div({
  padding: `16px ${mobilePadding}px`,

  [`${mediaQueries.isTabletMin}`]: {
    padding: `24px ${tabletPadding}px`,
  },
  [`${mediaQueries.isDesktopMin}`]: {
    padding: `32px ${desktopPadding}px`,
  },
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
          defaultZoom={15}
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
