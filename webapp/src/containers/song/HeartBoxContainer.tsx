import React, { useMemo } from 'react';
import { any, map, prop, test } from 'ramda';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Heart } from '../../../../shared/types';
import { HeartBox } from '../../components/song';
import { useLogged } from '../../hooks/useLogged';
import { getHearts, likeSong, unlikeSong } from '../../lib/apis/song';

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

  const liked = useMemo(
    () => any(test(/a/g))(map(prop('userId'))(hearts!)), // Hearts must be defined.
    [logged, hearts]
  );

  const like = () => likeSongMutation.mutate(songId);

  const unlike = () => unlikeSongMutation.mutate(songId);

  const onClick = useMemo(() => (liked ? unlike : like), [liked, unlike, like]);

  return (
    <HeartBox count={hearts?.length ?? 0} liked={liked} onClick={onClick} />
  );
}

export default HeartBoxContainer;
