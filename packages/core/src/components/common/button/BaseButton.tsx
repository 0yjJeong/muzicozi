import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonTheme = 'dark' | 'light';

type ButtonType = 'default' | 'primary' | 'text';

export interface ExtendedButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTheme?: ButtonTheme;
  buttonType?: ButtonType;
}

function ButtonBase({
  buttonTheme = 'light',
  buttonType = 'default',
  ...rest
}: ExtendedButtonBaseProps) {
  return (
    <ButtonBaseBlock
      buttonType={buttonType}
      buttonTheme={buttonTheme}
      {...rest}
    />
  );
}

export default ButtonBase;

const buttonType = css<{ buttonTheme: ButtonTheme; buttonType: ButtonType }>`
  ${(p) =>
    p.buttonType === 'default'
      ? `
      color: ${p.theme[p.buttonTheme].color}
      `
      : p.buttonType === 'primary'
      ? `
    background: ${p.theme.button[p.buttonTheme].background};
    color: ${p.theme.button[p.buttonTheme].color}
    `
      : `
      color: ${p.theme.button[p.buttonTheme].color}
      `}
`;

const ButtonBaseBlock = styled.button<{
  buttonTheme: ButtonTheme;
  buttonType: ButtonType;
}>`
  background: none;
  border: none;
  outline: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  ${buttonType};
`;
