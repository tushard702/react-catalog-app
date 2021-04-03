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
              text='We deal in all colors and all sizes of cotton towels as per requirement'
              label='cotton-towels'
              path='/products'
            />
            <CardItem
              imageSrc='images/tshirts.jpeg'
              text='We deal in all kinds of para-millitary and solid tshirts'
              label='tshirts'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              imageSrc='images/cotton-tape.jpeg'
              text='We deal in grey undyed and sulphur khaki cotton tape newar, size can be as per requirement'
              label='cotton-tape-newar'
              path='/products'
            />
            <CardItem
              imageSrc='images/jute.jpeg'
              text='We deal in sutli, sisal, manilla ropes wih different sizes and strength'
              label='jute thread'
              path='/products'
            />
            <CardItem
              imageSrc='images/cotton-yarn.jpeg'
              text='We deal in cotton thread twine and cotton yarn, size and color as per requirement'
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