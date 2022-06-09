import React from 'react';
import { useQuery } from 'react-query';
import { Comment } from '../../components/comment';
import { useLogged } from '../../hooks/useLogged';
import { getComments } from '../../lib/queries';
import CommentContainer from './CommentContainer';
import { useId } from './hooks';

function CommentRenderer() {
  const logged = useLogged();
  const { songId } = useId();
  const { data: comments, isLoading } = useQuery(
    ['comments', songId],
    getComments
  );

  if (isLoading || !comments) return null;

  return (
    <>
      {comments?.map((comment) => {
        const isOwn = comment.user.id === logged?.userId;
        return isOwn ? (
          <CommentContainer
            key={comment.id}
            comment={comment}
            songId={songId}
          />
        ) : (
          <Comment key={comment.id} comment={comment} />
        );
      })}
    </>
  );
}

export default CommentRenderer;
