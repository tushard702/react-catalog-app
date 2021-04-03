import React from 'react'

import './SocialIcon.css'

const getAppLink = (appName) => {
  switch(appName){
    case 'facebook': return 'https://twitter.com';
    case 'twitter': return 'https://twitter.com';
    case 'instagram': return 'https://twitter.com';
    case 'youtube': return 'https://twitter.com';
    case 'linkedin': return 'https://twitter.com';
    default : return 'https://fb.com';
  }
}

export default function SocialIcon({appName}) {
    return (
        <div
        className='social-icon-link'
      >
        <a 
        target="_blank" 
        href={getAppLink(appName)}
        rel="noreferrer">
          <i className={`fab fa-${appName}`} />
        </a>
      </div>
    )
}
