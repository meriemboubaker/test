import React from 'react';
import './App.css';
import logo from './cover/logo-cinema.jfif';
function Banner()  {
    const title = 'Cinema Home'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Cinema' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
  }
  export default Banner;