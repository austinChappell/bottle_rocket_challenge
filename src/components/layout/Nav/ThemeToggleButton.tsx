// External Dependencies
import React from 'react';

// Internal Dependencies
import Icon from 'components/shared/Icon';
import IconButton from 'components/shared/IconButton';
import { useAppDispatch } from 'state/store';
import styled from 'utils/styled';

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
        <Icon
          color="white"
          name="sunMoon"
          size="sm"
        />
      </IconButton>
    </Wrapper>
  );
};

export default ThemeToggleButton;
