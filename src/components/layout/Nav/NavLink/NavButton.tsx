// External Dependencies
import React from 'react';

// Internal Dependencies
import IconButton from 'components/shared/IconButton';

// Local Dependencies
import NavLinkImage from './NavLinkImage';

// Local Typings
interface Props {
  alt: string;
  src: string;
}
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

// Component Definition
const NavLinkButton: React.FC<Props & ButtonProps> = ({
  alt,
  src,
  ...props
}) => (
  <IconButton {...props}>
    <NavLinkImage
      alt={alt}
      src={src}
    />
  </IconButton>
);

export default NavLinkButton;
