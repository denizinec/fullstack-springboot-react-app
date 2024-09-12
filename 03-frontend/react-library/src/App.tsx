import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar-Footer/Navbar';
import { Footer } from './layouts/Navbar-Footer/Footer';
import { Homepage } from './layouts/homepage/Homepage';
import { SearchBooks } from './layouts/SearchBooks/SearchBooks';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BookCheckOut } from './layouts/BookCheckOut/BookCheckOut';
import { StarsReview } from './layouts/utils/StarsReview';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
        <Homepage/>
        </Route>
        <Route path='/search'>
          <SearchBooks />
        </Route>
        <Route path='/checkout/:bookId'>
          <BookCheckOut/>
        </Route>
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

