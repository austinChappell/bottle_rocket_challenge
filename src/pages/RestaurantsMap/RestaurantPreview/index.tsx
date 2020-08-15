// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import { mediaQueries } from 'constants/breakpoints';
import { Restaurant } from 'types/api';

import PreviewList from './PreviewList';
import PreviewSelection from './PreviewSelection';

// Local Typings
interface Props {
  selectedRestaurant: Restaurant;
}

// Local Variables
const Wrapper = styled.div({
  '& > div': {
    flexBasis: '50%',
    padding: 16,

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
    <Wrapper>
      <PreviewSelection selectedRestaurant={selectedRestaurant} />

      <PreviewList selectedRestaurant={selectedRestaurant} />
    </Wrapper>
  );
};

export default RestaurantPreview;
