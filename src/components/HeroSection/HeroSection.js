import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection({backgroundImageUrl}) {
  return (
    <div className='hero-container' style={{background: `url(${backgroundImageUrl}) center center/cover no-repeat`}}>
      <h1>Welcome to TGMart</h1>
      <p>Lets get started</p>
      <div className='hero-btns'>
        <Link to='/products'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          View our products
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;