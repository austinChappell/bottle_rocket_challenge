// External Dependencies
import React from 'react';

// Internal Dependencies
import Space from 'components/shared/Space';
import SectionTitleText from 'components/shared/Text/SectionTitleText';
import SubTitleText from 'components/shared/Text/SubTitleText';
import { KeyCodes } from 'types';
import { Restaurant } from 'types/api';

// Local Dependencies
import { TextContainer, Wrapper } from './styles';

// Local Typings
interface Props {
  onViewDetails: (restaurant: Restaurant) => void;
  restaurant: Restaurant;
}

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
