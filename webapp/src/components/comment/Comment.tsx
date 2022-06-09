import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { getDateDiffIntoText } from '../../lib/utils';
import { DefaultComment } from '../../types/transform';

const CommentBlock = styled.div`
  & + & {
    margin-top: 2.2rem;
  }

  .top {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    ${(p) => p.theme.typography.body}

    .nickname {
      ${(p) => p.theme.typography.title}
    }
  }

  .bottom {
    ${(p) => p.theme.typography.caption}

    .date {
      margin-bottom: 1rem;
    }

    button {
      cursor: pointer;
      background: ${(p) => p.theme.palette.border};
      padding: 0.5rem 0.8rem;
      border: none;
      color: inherit;
      margin-right: 1rem;
      border-radius: 0.2rem;

      &:hover {
        background: ${(p) => p.theme.palette.icon};
      }
    }
  }
`;

type CommentProps = {
  comment: DefaultComment;
  children?: ReactElement[];
};

function Comment({ comment, children }: CommentProps) {
  return (
    <CommentBlock>
      <div className='top'>
        <div className='nickname'>{comment.user.nickname}</div>
        <div>{comment.text}</div>
      </div>
      <div className='bottom'>
        <div className='date'>{getDateDiffIntoText(comment.createdAt)}</div>
        {children}
      </div>
    </CommentBlock>
  );
}

export default Comment;
