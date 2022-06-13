import React, { FormEvent, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { CommentBox } from '../../components/comment';
import ButtonBase from '../../components/common/button/BaseButton';
import { useLogged } from '../../hooks/useLogged';
import { addComment } from '../../lib/apis';
import { useId } from './hooks';

function CommentBoxContainer() {
  const { songId } = useId();
  const logged = useLogged();
  const navigation = useNavigate();
  const queryClient = useQueryClient();
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const addCommentMutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', songId]);
      (textareaRef.current as any).value = '';
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (logged) {
      addCommentMutation.mutate({
        songId,
        text: (e.target as any).comment.value,
      });
    } else {
      navigation('/login');
    }
  };

  return (
    <CommentBox ref={textareaRef} onSubmit={onSubmit}>
      <ButtonBase type='submit' buttonType='primary'>
        Post
      </ButtonBase>
    </CommentBox>
  );
}

export default CommentBoxContainer;
