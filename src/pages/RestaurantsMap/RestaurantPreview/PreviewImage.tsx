// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import { Restaurant } from 'types/api';

// Local Typings
interface Props {
  selectedRestaurant: Restaurant;
}

// Local Variables
const StyledImg = styled.img({
  maxWidth: 500,
  width: '100%',
});

// Component Definition
const PreviewImage: React.FC<Props> = ({
  selectedRestaurant,
}) => (
  <StyledImg
    alt={selectedRestaurant.name}
    src={selectedRestaurant.backgroundImageURL}
  />
);

export default PreviewImage;
