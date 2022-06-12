import React from 'react';
import HomeLayout from '../../components/home/HomeLayout';
import { CardListRenderer } from '../../containers/home';

function HomePage() {
  return (
    <HomeLayout>
      <CardListRenderer />
    </HomeLayout>
  );
}

export default HomePage;
