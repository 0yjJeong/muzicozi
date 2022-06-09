import React, {
  FormEventHandler,
  forwardRef,
  ReactElement,
  TextareaHTMLAttributes,
} from 'react';
import styled from 'styled-components';

const CommentBoxBlock = styled.form`
  text-align: right;

  textarea {
    margin-bottom: 1rem;
    background: none;
    outline: none;
    resize: none;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    height: 13rem;
    padding: 2rem;
    border: 2px solid ${(p) => p.theme.palette.border};
    ${(p) => p.theme.typography.body}
  }
`;

interface CommentBoxProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSubmit: FormEventHandler;
  children?: ReactElement | ReactElement[];
}

const CommentBox = forwardRef<HTMLTextAreaElement, CommentBoxProps>(
  ({ onSubmit, children, ...rest }, ref) => {
    return (
      <CommentBoxBlock onSubmit={onSubmit}>
        <textarea name='comment' ref={ref} {...rest} />
        <div className='btns'>{children}</div>
      </CommentBoxBlock>
    );
  }
);

export default CommentBox;
