// External Dependencies
import React from 'react';

// Internal Dependencies
import styled from 'utils/styled';

// Local Typings
interface Props {
  ariaLabel?: string,
  label: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

// Local Variables
const StyledInput = styled.input(({ theme }) => ({
  '&:focus': {
    outline: theme.styles.outline,
  },

  backgroundColor: theme.styles.selectBackground,
  border: theme.styles.inputBorder,
  borderRadius: 4,
  color: theme.colors.primaryDark,
  fontSize: 16,
  padding: 4,
}));

// Component Definition
const Input: React.FC<Props> = ({
  ariaLabel,
  label,
  onChange,
  value,
  ...props
}) => (
  <StyledInput
    aria-label={ariaLabel ?? label}
    onChange={onChange}
    placeholder={label}
    value={value}
    {...props}
  />
);

export default Input;
