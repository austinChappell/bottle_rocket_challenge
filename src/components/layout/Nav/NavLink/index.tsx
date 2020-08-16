// External Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Local Dependencies
import NavLinkImage from './NavLinkImage';

// Local Typings
interface Props {
  alt: string;
  src: string;
  to: string;
}

// Component Definition
const NavLink: React.FC<Props> = ({
  alt,
  src,
  to,
}) => (
  <Link to={to}>
    <NavLinkImage
      alt={alt}
      src={src}
    />
  </Link>
);

export default NavLink;
