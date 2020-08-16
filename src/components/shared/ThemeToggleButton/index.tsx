// External Dependencies
import React from 'react';

// Internal Dependencies
import IconButton from 'components/shared/IconButton';
import { useAppDispatch } from 'state/store';
import styled from 'utils/styled';

// Local Dependencies
import SunMoonIcon from './SunMoonIcon';

// Local Variables
const Wrapper = styled.div({
  position: 'absolute',
  right: 4,
  top: 4,
});

// Component Definition
const ThemeToggleButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch({ type: 'UI_TOGGLE_THEME' });
  };

  return (
    <Wrapper>
      <IconButton onClick={handleClick}>
        <SunMoonIcon color="white" />
      </IconButton>
    </Wrapper>
  );
};

export default ThemeToggleButton;
