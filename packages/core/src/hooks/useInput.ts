import { ChangeEvent, useState } from 'react';

export default function useInput() {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onReset = () => {
    setValue('');
  };

  return { value, onChange, onReset };
}
