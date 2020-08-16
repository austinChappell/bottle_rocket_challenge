// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import { MapProps } from 'components/shared/Map';
import PinIcon from 'components/shared/Map/PinIcon';
// Internal Dependencies
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { mediaQueries } from 'constants/breakpoints';
import { useSelectGeoLocation } from 'state/selectors/general';
import { Restaurant } from 'types/api';
import { useAppTheme } from 'utils/styled';

// Local Dependencies
import GeoLocationButton from './GeoLocationButton';
import PreviewDetails from './PreviewDetails';
import PreviewImage from './PreviewImage';

// Local Typings
interface Props {
  onCenterMapOnUser: (center: MapProps['center']) => void;
  selectedRestaurant: Restaurant | null;
}

// Local Variables
const padding = 16;
const SectionNavContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 24,
});
const TitleContainer = styled.div({
  flexBasis: '100%',
  paddingLeft: padding,
});
const Section = styled.section({
  flexGrow: 1,
  padding: '24px 24px',
});
const Wrapper = styled.div({
  '& > div': {
    flexBasis: '50%',
    padding,

    [`${mediaQueries.isMobileMax}`]: {
      flexBasis: '100%',
    },
  },

  display: 'flex',
  flexWrap: 'wrap',
  padding: '24px 0',
});

// Component Definition
const RestaurantPreview: React.FC<Props> = ({
  onCenterMapOnUser,
  selectedRestaurant,
}) => {
  const theme = useAppTheme();

  const geoLocation = useSelectGeoLocation();

  const handleClick = () => {
    if (geoLocation) {
      onCenterMapOnUser({
        lat: geoLocation.coords.latitude,
        lng: geoLocation.coords.longitude,
      });
    }
  };

  return (
    <Section>
      <SectionNavContainer>
        {geoLocation && (
          <GeoLocationButton onClick={handleClick} />
        )}
      </SectionNavContainer>

      {selectedRestaurant ? (
        <>
          <TitleContainer>
            <SectionTitleText color={theme.palette.previewTitle}>
              {selectedRestaurant.name}
            </SectionTitleText>

            <Space mt={6}>
              <SubTitleText color="black">
                {selectedRestaurant.category}
              </SubTitleText>
            </Space>
          </TitleContainer>

          <Wrapper>
            <PreviewImage selectedRestaurant={selectedRestaurant} />

            <PreviewDetails selectedRestaurant={selectedRestaurant} />
          </Wrapper>
        </>
      ) : (
        <BodyText
          align="center"
          size="sm"
        >
          Hungry? Click <PinIcon /> to find some tasty grub.
        </BodyText>
      )}
    </Section>
  );
};

export default RestaurantPreview;
