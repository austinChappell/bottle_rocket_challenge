// External Dependencies
import React from 'react';

// Internal Dependencies
import { inputStyle } from 'constants/inputStyle';
import styled from 'utils/styled';

// Local Typings
interface Props {
  ariaLabel?: string,
  label: string;
  onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  value: string;
}
export interface SelectOption {
  id: string;
  label: string;
}

// Local Variables
const StyledSelect = styled.select(({ theme }) => ({
  '&:focus': {
    outline: theme.styles.outline,
  },

  appearance: 'none',
  backgroundColor: theme.styles.selectBackground,
  border: theme.styles.inputBorder,
  borderRadius: inputStyle.borderRadius,
  color: theme.colors.primaryDark,
  cursor: 'pointer',
  display: 'block',
  fontSize: inputStyle.fontSize,
  padding: inputStyle.padding,
}));

// Component Definition
const Select: React.FC<Props> = ({
  ariaLabel,
  label,
  onChange,
  options,
  value,
  ...props
}) => (
  <StyledSelect
    aria-label={ariaLabel ?? label}
    onChange={onChange}
    value={value}
    {...props}
  >
    <option value="">
      {label}
    </option>
    {options.map((opt) => (
      <option
        key={opt.label}
        value={opt.id}
      >
        {opt.label}
      </option>
    ))}
  </StyledSelect>
);

export default Select;
