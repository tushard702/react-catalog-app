import React from 'react';
import '../../App.css';
import CardsContainer from '../CardsContainer/CardsContainer';
import HeroSection from '../HeroSection/HeroSection';

function Home() {
  return (
    <>
      <HeroSection backgroundImageUrl={'/images/img-home.jpeg'}/>
      <CardsContainer />
    </>
  );
}

export default Home;
