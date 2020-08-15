// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

import colors from 'constants/colors';

import BodyText from '../Text/BodyText';

import PinIcon from './PinIcon';

// Local Typings
interface Props {
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
