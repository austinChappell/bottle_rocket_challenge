import React from 'react';
import styled from '@emotion/styled';

import Space from 'components/shared/Space';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { KeyCodes } from 'types';
import { Restaurant } from 'types/api';

// Local Typings
interface Props {
  onViewDetails: (restaurant: Restaurant) => void;
  restaurant: Restaurant;
}
interface WrapperProps {
  backgroundImageSrc: string;
}

// Local Variables
const Wrapper = styled.div<WrapperProps>((props) => ({
  background: `url(${props.backgroundImageSrc})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  cursor: 'pointer',
  minHeight: 300,
  position: 'relative',
}));
const TextContainer = styled.div({
  background: 'url(/cellGradientBackground@2x.png)',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  left: 0,
  padding: '0 12px',
  position: 'absolute',
  right: 0,
  top: 0,
});

// Component Definition
const RestaurantCard: React.FC<Props> = ({
  onViewDetails,
  restaurant,
}) => {
  const handleClickRestaurant = () => {
    onViewDetails(restaurant);
  };

  const handleKeyDown = (evt: React.KeyboardEvent) => {
    if (evt.keyCode === KeyCodes.Enter || evt.keyCode === KeyCodes.Space) {
      // be sure the page doesn't scroll on spacebar press
      evt.preventDefault();
      onViewDetails(restaurant);
    }
  };

  return (
    <Wrapper
      backgroundImageSrc={restaurant.backgroundImageURL}
      onClick={handleClickRestaurant}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <TextContainer>
        <SectionTitleText ignoreTheme>
          {restaurant.name}
        </SectionTitleText>

        <Space
          clone
          py={6}
        >
          <SubTitleText ignoreTheme>
            {restaurant.category}
          </SubTitleText>
        </Space>
      </TextContainer>
    </Wrapper>
  );
};

export default RestaurantCard;
