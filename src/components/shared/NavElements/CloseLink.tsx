// External Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

// Internal Dependencies
import closeImage from 'assets/images/ic_close@2x.png';
import { navButtonHeightStylesWithMediaQueries } from 'constants/sizes';

// Local Variables
const StyledImg = styled.img({
  ...navButtonHeightStylesWithMediaQueries,
});

// Component Definition
const CloseLink: React.FC = () => (
  <Link to="/">
    <StyledImg
      alt="go to list"
      src={closeImage}
    />
  </Link>
);

export default CloseLink;
