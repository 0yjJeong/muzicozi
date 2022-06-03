import React from 'react';
import styled from 'styled-components';
import { MdError } from 'react-icons/md';

const ErrorMessageBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e84f85;
  border-radius: 5px;
  height: 3rem;
  ${(p) => p.theme.typography.body};
  color: #e84f85;

  .message {
    flex: 1;
    padding-left: 1rem;
  }
`;

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <ErrorMessageBlock>
      <MdError />
      <div className='message'>{message}</div>
    </ErrorMessageBlock>
  );
}

export default ErrorMessage;
