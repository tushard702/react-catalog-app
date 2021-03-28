import React from 'react'

import './SocialIcon.css'

const links = {
    facebook: 'https://twitter.com',
    twitter: 'https://twitter.com',
    instagram: 'https://twitter.com',
    youtube: 'https://twitter.com',
    linkedin: 'https://twitter.com',
};

const getAppLink = (appName) => {
    return links.appName;
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
