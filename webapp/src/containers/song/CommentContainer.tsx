import React, { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinFill } from 'react-icons/ri';
import { removeComment, updateComment } from '../../lib/apis';
import { Comment, CommentBox } from '../../components/comment';
import { DefaultComment } from '../../types/transform';
import ButtonBase from '../../components/common/button/BaseButton';

type CommentContainerProps = {
  songId: number;
  comment: DefaultComment;
};

function CommentContainer({ songId, comment }: CommentContainerProps) {
  const [editing, setEditing] = useState(false);
  const queryClient = useQueryClient();
  const updateCommentMutation = useMutation(updateComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', songId]);
      setTimeout(() => {
        setEditing(false);
      }, 0);
    },
  });
  const removeCommentMutation = useMutation(removeComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', songId]);
    },
  });

  const onDeleteComment = (e: any) => {
    e.preventDefault();
    removeCommentMutation.mutate(comment.id);
  };

  const onUpdateComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateCommentMutation.mutate({
      songId,
      text: (e.target as any).comment.value,
    });
  };

  return editing ? (
    <CommentBox defaultValue={comment.text} onSubmit={onUpdateComment}>
      {updateCommentMutation.isLoading ? (
        <>Updating...</>
      ) : (
        <>
          <ButtonBase buttonType='text' onClick={() => setEditing(false)}>
            Cancel
          </ButtonBase>
          <ButtonBase type='submit' buttonType='primary'>
            Edit
          </ButtonBase>
        </>
      )}
    </CommentBox>
  ) : (
    <Comment key={comment.id} comment={comment}>
      <button onClick={() => setEditing(true)}>
        <MdEdit />
      </button>
      <button onClick={onDeleteComment}>
        <RiDeleteBinFill />
      </button>
    </Comment>
  );
}

export default CommentContainer;
