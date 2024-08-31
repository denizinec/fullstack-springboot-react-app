import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbarAndfooter/Navbar';
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks';
import { Carousel } from './layouts/homepage/Carousel';
import { Heros } from './layouts/homepage/Heros';

export const App = () => {
  return (
    <div>
    <Navbar/>
    <ExploreTopBooks/>
    <Carousel/>
    <Heros/>
    </div>
  );
}

