import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Menu from './pages/Menu';
import HR from './pages/HR';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className='app'>
      <Nav />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/hr' element={<HR />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
