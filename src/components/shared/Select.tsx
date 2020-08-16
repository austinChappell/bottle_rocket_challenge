// External Dependencies
import React from 'react';

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
const StyledSelect = styled.select({
  appearance: 'none',
  border: 'none',
  borderRadius: 4,
  display: 'block',
  marginLeft: 8,
  padding: 4,
});

// Component Definition
const Select: React.FC<Props> = ({
  ariaLabel,
  label,
  onChange,
  options,
  value,
}) => (
  <StyledSelect
    aria-label={ariaLabel ?? label}
    onChange={onChange}
    value={value}
  >
    <option
      selected
      value=""
    >
      {label}
    </option>
    {options.map((opt) => (
      <option key={opt.label}>
        {opt.label}
      </option>
    ))}
  </StyledSelect>
);

export default Select;
