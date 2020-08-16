// External Dependencies
import React from 'react';

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
import styled from 'utils/styled';

// Local Typings
interface Props {
  restaurant: Restaurant;
}

// Local Variables
const mobilePadding = 12;
const tabletPadding = 24;
const desktopPadding = 32;
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
