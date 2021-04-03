import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection({backgroundImageUrl}) {
  return (
    <div className='hero-container' style={{background: `url(${backgroundImageUrl}) center center/cover no-repeat`}}>
      <h1>Welcome to </h1><h1>Mehamia Textiles Pvt Ltd</h1>
      <div className='hero-btns'>
        <Link to='/products'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          View our wide range of products
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;