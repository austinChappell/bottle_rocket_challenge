// External Dependencies
import React from 'react';

// Internal Dependencies
import IconButton from 'components/shared/IconButton';
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
  console.log('ThemeToggle');

  return (
    <Wrapper>
      <IconButton isResponsive={false}>
        <SunMoonIcon color="white" />
      </IconButton>
    </Wrapper>
  );
};

export default ThemeToggleButton;
