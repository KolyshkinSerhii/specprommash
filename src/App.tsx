import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './Components/Pages/AboutUs';
import Contacts from './Components/Pages/Contacts';
import { Home } from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Services from './Components/Pages/Services';
import './App.scss';
import './assets/css/fonts.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
