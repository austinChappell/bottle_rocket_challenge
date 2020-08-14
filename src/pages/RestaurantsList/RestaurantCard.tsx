import React from 'react';
import styled from '@emotion/styled';

import { Restaurant } from 'types/api';

// Local Typings
interface Props {
  restaurant: Restaurant;
}
interface WrapperProps {
  backgroundImageSrc: string;
}

// Local Variables
const Wrapper = styled.div<WrapperProps>((props) => ({
  background: `url(${props.backgroundImageSrc})`,
}));

// Component Definition
const RestaurantCard: React.FC<Props> = ({
  restaurant,
}) => {
  console.log({ restaurant });

  return (
    <Wrapper backgroundImageSrc={restaurant.backgroundImageURL}>
      {restaurant.name}
    </Wrapper>
  );
};

export default RestaurantCard;
