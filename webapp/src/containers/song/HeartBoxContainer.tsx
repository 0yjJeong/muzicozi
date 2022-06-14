import React, { useMemo } from 'react';
import { any, map, prop, test } from 'ramda';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Heart } from '../../types';
import { HeartBox } from '../../components/song';
import { useLogged } from '../../hooks/useLogged';
import { getHearts, likeSong, unlikeSong } from '../../lib/apis/song';
import { useNavigate } from 'react-router-dom';

type HeartBoxContainerProps = {
  songId: number;
  initialHearts: Heart[];
};

function HeartBoxContainer({ songId, initialHearts }: HeartBoxContainerProps) {
  const queryClient = useQueryClient();
  const likeSongMutation = useMutation(likeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries(['hearts', songId]);
    },
  });
  const unlikeSongMutation = useMutation(unlikeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries(['hearts', songId]);
    },
  });
  const { data: hearts } = useQuery(['hearts', songId], getHearts, {
    initialData: initialHearts,
    /** Prevent to fetch on mount. */
    enabled: !!likeSongMutation.data || !!unlikeSongMutation.data,
  });

  const logged = useLogged();
  const navigation = useNavigate();

  const liked = useMemo(
    () =>
      any(test(new RegExp(logged?.userId || '')))(map(prop('userId'))(hearts!)), // Hearts must be defined.
    [logged, hearts]
  );

  return (
    <HeartBox
      count={hearts?.length ?? 0}
      liked={liked}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (logged) {
          liked
            ? unlikeSongMutation.mutate(songId)
            : likeSongMutation.mutate(songId);
        } else {
          navigation('/login');
        }
      }}
    />
  );
}

export default HeartBoxContainer;
