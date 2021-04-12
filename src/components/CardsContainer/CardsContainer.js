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
              text='We deal in all colors and all sizes of cotton towels as per requirement.'
              label='cotton-towels'
              path='/products'
            />
            <CardItem
              imageSrc='images/tshirts.jpeg'
              text='We deal in all kinds of para-millitary and solid tshirts.'
              label='tshirts'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              imageSrc='images/cotton-tape.jpeg'
              text='We deal in grey undyed and sulphur khaki cotton tape newar. Size can be as per requirement.'
              label='cotton-tape-newar'
              path='/products'
            />
            <CardItem
              imageSrc='images/jute.jpeg'
              text='We deal in sutli, sisal, manilla ropes with different sizes and strength.'
              label='jute thread'
              path='/products'
            />
            <CardItem
              imageSrc='images/cotton-yarn.jpeg'
              text='We deal in cotton thread twine and cotton yarn. Size and color as per requirement.'
              label='cotton yarns'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              imageSrc='images/postal-bags.png'
              text='We deal in all types of Nylon, Cotton/Dosuti bags used in postal stores. Sizes can be as per requirement.'
              label='Bags for postal stores'
              path='/products'
            />
            <CardItem
              imageSrc='images/PP-Bags.jpeg'
              text='We deal in PP bags that can be used in postal stores as well as for packing food grains. Size and capacity can be as per requirement.'
              label='PP-Bags'
              path='/products'
            />
            <CardItem
              imageSrc='images/sleeping-bag.jpg'
              text='We deal in light weight sleeping bags. Size can be as per requirement.'
              label='Sleepings-Bags'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;