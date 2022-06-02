import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'default' | 'primary' | 'text';

export interface ExtendedButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}

function ButtonBase({
  buttonType = 'default',
  ...rest
}: ExtendedButtonBaseProps) {
  return <ButtonBaseBlock buttonType={buttonType} {...rest} />;
}

export default ButtonBase;

const buttonType = css<ExtendedButtonBaseProps>`
  ${(p) =>
    p.buttonType === 'default'
      ? `
      color: ${p.theme.color}
      `
      : p.buttonType === 'primary'
      ? `
    background: ${p.theme.button.background};
    color: ${p.theme.button.color}
    `
      : `
      color: ${p.theme.button.color}
      `}
`;

const ButtonBaseBlock = styled.button<ExtendedButtonBaseProps>`
  background: none;
  border: none;
  outline: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  ${buttonType};
`;
