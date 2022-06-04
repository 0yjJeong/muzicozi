import React from 'react';
import styled from 'styled-components';
import { MdError } from 'react-icons/md';
import { HiCheckCircle } from 'react-icons/hi';

type MessageStatus = 'failure' | 'success';

const MessageBlock = styled.div<{ type: MessageStatus }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  height: 3rem;
  ${(p) => p.theme.typography.body};
  ${({ theme, type }) => `
    border: 2px solid ${theme.palette.status[type]};
    color: ${theme.palette.status[type]};
  `}

  .message {
    flex: 1;
    padding-left: 1rem;
  }
`;

type ErrorMessageProps = {
  message: string;
  type?: MessageStatus;
};

function ErrorMessage({ message, type = 'failure' }: ErrorMessageProps) {
  const iconFragment = type === 'failure' ? <MdError /> : <HiCheckCircle />;

  return (
    <MessageBlock type={type}>
      {iconFragment}
      <div className='message'>{message}</div>
    </MessageBlock>
  );
}

export default ErrorMessage;
