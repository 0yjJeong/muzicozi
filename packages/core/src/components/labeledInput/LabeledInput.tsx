import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  .label {
    ${(p) => p.theme.typography.caption}
  }

  .caption {
    ${(p) => p.theme.typography.caption}
    font-size: 1.3rem;
    text-align: right;
  }

  & > * {
    margin-bottom: 0.8rem;
  }
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  line-height: 2rem;
  background: none;
  border: 1px solid ${(p) => p.theme.palette.icon};
  border-radius: 3px;
  padding: 1rem;
  ${(p) => p.theme.typography.body};
`;

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  caption?: string;
}

function LabeledInput({ label, caption, ...rest }: LabeledInputProps) {
  return (
    <Label>
      <div className='label'>{label}</div>
      <Input {...rest} />
      {caption && <div className='caption'>{caption}</div>}
    </Label>
  );
}

export default LabeledInput;
