import React from 'react';
import { Route, Routes, Link, } from 'react-router-dom';
import './style.css';
import About from './About';
import Home2 from './Home2';
import Contact from './Contact';
import View from './View';

const index = () => {

  return (
    <>
      <header>
        <h2>logo</h2>
        <Link to="/Home2">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">contact</Link>
        <Link to="/View">view</Link>

      </header>
      <Routes>
        <Route>
          <Route path="/" element={<Home2 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/View" element={<View />} />
        </Route>

      </Routes>


    </>
  );
};

export default index;
