import React from 'react';

import CardItem from './CardItem/CardItem';
import './CardsContainer.css'

function CardsContainer() {
  return (
    <div className='cards'>
      <h1>Some of our best selling products <i className="fas fa-fire"></i></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              imageSrc='images/cotton-towel.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='cotton-towels'
              path='/products'
            />
            <CardItem
              imageSrc='images/tshirts.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='tshirts'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              imageSrc='images/cotton-tape.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='cotton-tape-newar'
              path='/products'
            />
            <CardItem
              imageSrc='images/jute.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='jute thread'
              path='/products'
            />
            <CardItem
              imageSrc='images/cotton-yarn.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='cotton yarns'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;