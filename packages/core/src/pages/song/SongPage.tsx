import React from 'react';
import { PageTemplate } from '../../layout/page';
import { SongView } from '../../containers/song';
import CommentBoxContainer from '../../containers/song/CommentBoxContainer';
import CommentRenderer from '../../containers/song/CommentRenderer';

function SongPage() {
  return (
    <PageTemplate>
      <SongView />
      <CommentBoxContainer />
      <CommentRenderer />
    </PageTemplate>
  );
}

export default SongPage;
