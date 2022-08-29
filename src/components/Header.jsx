import React from 'react'

import trollFace from '../assets/troll-face.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={trollFace} className='trollFace logo' alt='Troll Face logo' />
        <h1> Meme Generator</h1>
      </div>
      <div className='header-description'>
        <h3> React Project </h3>
      </div>
    </div>
  )
}
