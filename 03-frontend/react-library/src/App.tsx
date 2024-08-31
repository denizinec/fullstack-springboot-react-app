import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbarAndfooter/Navbar';
import { Footer } from './layouts/navbarAndfooter/Footer';
import { Homepage } from './layouts/homepage/Homepage';

export const App = () => {
  return (
    <div>
    <Navbar/>
    <Homepage/>
    <Footer/>
    </div>
  );
}

