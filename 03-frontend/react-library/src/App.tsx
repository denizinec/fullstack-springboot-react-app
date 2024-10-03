import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar-Footer/Navbar';
import { Footer } from './layouts/Navbar-Footer/Footer';
import { Homepage } from './layouts/homepage/Homepage';
import { SearchBooks } from './layouts/SearchBooks/SearchBooks';
import { Routes, Route } from 'react-router-dom';
import { BookCheckOut } from './layouts/BookCheckOut/BookCheckOut';


export const App: React.FC = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/search' element={<SearchBooks />}/>
        <Route path='/checkout/:bookId' element={<BookCheckOut/>} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

