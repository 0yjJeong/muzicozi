import React, { FormHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const FormBlock = styled.form`
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  .header {
    .title {
      text-align: center;
      margin-bottom: 1rem;
      ${(p) => p.theme.typography.head1}
    }

    margin-top: 3.6rem;
  }

  .content {
    display: flex;
    flex-direction: column;

    & > * {
      margin-top: 3.6rem;
    }
  }

  .footer {
    margin-top: 3.6rem;
    display: inline-grid;
    gap: 4rem;
    width: 100%;

    .wizard {
      text-align: center;
      ${(p) => p.theme.typography.caption}

      a {
        text-decoration: none;
        margin-left: 0.8rem;
        ${(p) => p.theme.typography.body}
      }
    }
  }

  ${(p) => css`
    ${p.theme.media.medium} {
      max-width: 460px;
    }
  `};
`;

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

function Form({ children, ...rest }: FormProps) {
  return <FormBlock {...rest}>{children}</FormBlock>;
}

export default Form;
