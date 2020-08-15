// External Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

// Internal Dependencies
import { navButtonHeightStylesWithMediaQueries } from 'constants/sizes';

// Local Variables
const StyledSVG = styled.svg({
  ...navButtonHeightStylesWithMediaQueries,
});

// Component Definition
const ListLink: React.FC = () => (
  <Link to="/">
    <StyledSVG viewBox="0 0 24 24">
      <path
        fill="white"
        d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2M4,4V11H11V4H4M4,20H11V13H4V20M20,20V13H13V20H20M20,4H13V11H20V4Z"
      />
    </StyledSVG>
  </Link>
);

export default ListLink;