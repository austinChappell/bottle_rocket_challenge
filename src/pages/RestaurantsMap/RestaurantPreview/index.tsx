// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Space from 'components/shared/Space';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { mediaQueries } from 'constants/breakpoints';
import { Restaurant } from 'types/api';

// Local Dependencies
import PreviewDetails from './PreviewDetails';
import PreviewImage from './PreviewImage';

// Local Typings
interface Props {
  selectedRestaurant: Restaurant;
}

// Local Variables
const padding = 16;
const TitleContainer = styled.div({
  flexBasis: '100%',
  paddingLeft: padding,
});
const Section = styled.section({
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
  console.log('RestaurantPreview');

  return (
    <Section>
      <TitleContainer>
        <SectionTitleText color="black">
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
    </Section>
  );
};

export default RestaurantPreview;
