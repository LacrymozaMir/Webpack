import React, { useEffect, useState } from 'react';
import img from '../assets/img/arda.png';
import '../styles/App.css';
import '../styles/fonts.css';

export const App = () => {






  return (
    <div className='app'>
      <div className='container'>
        <div>ну шо? работает!</div>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

