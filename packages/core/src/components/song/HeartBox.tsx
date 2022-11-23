import React, { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Liked = css`
  svg {
    color: #d90bac;
  }
`;

const Box = styled.span<{ liked: boolean }>`
  ${(p) => p.theme.typography.caption}
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  gap: 0.3rem;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  ${(p) => p.liked && Liked}
`;

type HeartBoxProps = {
  count: number;
  liked: boolean;
  onClick: MouseEventHandler;
};

function HeartBox({ count, liked, onClick }: HeartBoxProps) {
  return (
    <Box liked={liked} onClick={onClick}>
      {liked ? <AiFillHeart /> : <AiOutlineHeart />}
      {count}
    </Box>
  );
}

export default HeartBox;
