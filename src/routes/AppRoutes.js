import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import "../App.css";
import Login from '../pages/Login/Login';
import Registro from '../pages/Registro/Registro';
import { AuthProvider } from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import CreatePost from '../pages/CreatePost/CreatePost';
import Dashboard from '../pages/Dashboard/Dashboard';



function AppRoutes() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  if (loadingUser) {
    return <p>Carregando....</p>
  }


  return (
    <div className='App'>

      <AuthProvider value={user}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path='/registro' element={!user ? <Registro /> : <Navigate to="/" />} />
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to="/login" />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>


    </div>

  );
}

export default AppRoutes;
