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
  onClick?: (restaurant: Restaurant) => void;
  readOnly?: boolean;
  lat: number;
  lng: number;
  text: string;
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
      padding: 2,
      position: 'fixed',
      textAlign: 'center',
      transform: 'translateX(-25%)',
      width: 60,
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
  readOnly,
  text,
}) => {
  const handleClick = () => {
    console.log('I was clicked');
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
          size="sm"
        >
          {text}
        </BodyText>
      </Wrapper>
    );
};

export default Pin;
