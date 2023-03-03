import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
