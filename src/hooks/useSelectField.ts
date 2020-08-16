import { useState } from 'react';

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
