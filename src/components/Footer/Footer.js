import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import SocialIcon from './SocialIcon/SocialIcon';

import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to receive our monthly newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            Mehamia Textiles Pvt Ltd
            </Link>
          </div>
          <div className='social-icons'>
            <SocialIcon 
              appName={'facebook'}
            />
            <SocialIcon 
              appName={'instagram'}
            />
            <SocialIcon 
              appName={'youtube'}
            />
            <SocialIcon 
              appName={'twitter'}
            />
            <SocialIcon 
              appName={'linkedin'}
            />
          </div>
        </div>
      </section>
      <small className='website-rights'>© 2021 Mehamia Textiles Pvt Ltd. All rights reserved.</small>
    </div>
  );
}

export default Footer;