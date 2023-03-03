import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import "../App.css";

function AppRoutes() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>


    </div>

  );
}

export default AppRoutes;
