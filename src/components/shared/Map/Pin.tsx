// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import BodyText from 'components/shared/Text/BodyText';
import colors from 'constants/colors';
import { Restaurant } from 'types/api';

// Local Dependencies
import PinIcon from './PinIcon';

// Local Typings
interface Props {
  onClickRestaurant?: (restaurant: Restaurant) => void;
  readOnly?: boolean;
  restaurant: Restaurant;
  lat: number;
  lng: number;
}

// Local Variables
const Wrapper = styled.div({
  '& span': {
    display: 'none',
  },

  '&:hover': {
    '& span': {
      backgroundColor: colors.white,
      border: `1px solid ${colors.black}`,
      borderRadius: 4,
      display: 'flex',
      height: 60,
      justifyContent: 'center',
      padding: '6px 2px',
      position: 'fixed',
      textAlign: 'center',
      transform: 'translateX(-25%)',
      width: 90,
      zIndex: 10,
    },

    '& svg': {
      transform: 'scale(1.2)',
    },
  },

  cursor: 'pointer',
});

// Component Definition
const Pin: React.FC<Props> = ({
  onClickRestaurant,
  readOnly,
  restaurant,
}) => {
  const handleClick = () => {
    if (onClickRestaurant) {
      onClickRestaurant(restaurant);
    }
  };

  return readOnly
    ? <PinIcon />
    : (
      <Wrapper
        onClick={handleClick}
        role="button"
      >
        <PinIcon />

        <BodyText
          as="span"
          ignoreTheme
          isResponsive={false}
          size="sm"
        >
          {restaurant.name}
        </BodyText>
      </Wrapper>
    );
};

export default Pin;
