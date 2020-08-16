// External Dependencies
import { useState } from 'react';

// Local Typings
type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;

export const useSelectField = (initialValue = ''): {
  onChange: (evt: ChangeEvent) => void;
  value: string;
} => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (evt: ChangeEvent) => {
    setValue(evt.target.value);
  };

  return {
    onChange: handleChange,
    value,
  };
};
