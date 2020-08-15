// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import PinIcon from 'components/shared/Map/PinIcon';
// Internal Dependencies
import Space from 'components/shared/Space';
import BodyText from 'components/shared/Text/BodyText';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { mediaQueries } from 'constants/breakpoints';
import { Restaurant } from 'types/api';
import { useAppTheme } from 'utils/styled';

// Local Dependencies
import PreviewDetails from './PreviewDetails';
import PreviewImage from './PreviewImage';

// Local Typings
interface Props {
  selectedRestaurant: Restaurant | null;
}

// Local Variables
const padding = 16;
const TitleContainer = styled.div({
  flexBasis: '100%',
  paddingLeft: padding,
});
const Section = styled.section({
  flexGrow: 1,
  padding: '48px 24px',
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
  selectedRestaurant,
}) => {
  const theme = useAppTheme();

  return (
    <Section>
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
