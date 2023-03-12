import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import "../App.css";
import Login from '../pages/Login/Login';
import Registro from '../pages/Registro/Registro';
import { AuthProvider } from '../context/AuthContext';

function AppRoutes() {
  return (
    <div className='App'>

      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/registro' element={<Registro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>


    </div>

  );
}

export default AppRoutes;
