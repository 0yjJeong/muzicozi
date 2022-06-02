import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { drop, take } from 'ramda';
import Card from '../../components/card/Card';
import { CardList, ExpandedCardList } from '../../components/cardList';
import { Song } from '../../../../shared/types';
import { getArtistSongs } from '../../lib/apis';

function CardListRenderer() {
  const { isLoading, data: songs } = useQuery('artist-songs', getArtistSongs, {
    retry: false,
  });

  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      const { innerWidth } = window;
      setWidth(innerWidth);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (isLoading || !songs) return null;

  return (
    <>
      {width > 1200 ? (
        <>
          <CardList>
            {songs.map((song) => (
              <Card key={song.id} song={song} />
            ))}
          </CardList>
        </>
      ) : width > 1020 ? (
        <>
          <ExpandedCardList songs={take(4, songs) as Song[]} />
          <CardList>
            {take(3, drop(4, songs)).map((song) => (
              <Card key={song.id} song={song} />
            ))}
          </CardList>
          <ExpandedCardList songs={take(4, drop(7, songs)) as Song[]} />
          <CardList>
            {drop(11, songs).map((song) => (
              <Card key={song.id} song={song} />
            ))}
          </CardList>
        </>
      ) : (
        <>
          <ExpandedCardList songs={take(2, songs) as Song[]} />
          <CardList>
            {take(2, drop(2, songs)).map((song) => (
              <Card key={song.id} song={song} />
            ))}
          </CardList>
          <ExpandedCardList songs={take(2, drop(4, songs)) as Song[]} />
          <CardList>
            {drop(6, songs).map((song) => (
              <Card key={song.id} song={song} />
            ))}
          </CardList>
        </>
      )}
    </>
  );
}

export default CardListRenderer;
