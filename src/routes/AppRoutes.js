import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import "../App.css";
import Login from '../pages/Login/Login';
import Registro from '../pages/Registro/Registro';
import CreatePost from '../pages/CreatePost/CreatePost';
import Dashboard from '../pages/Dashboard/Dashboard';
import { useAuthentication } from '../hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from '../context/AuthContext';



function AppRoutes() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

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
              <Route path='/posts/create' element={<CreatePost />} />
              <Route path='/login' element={<Login />} />
              <Route path='/registro' element={<Registro />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>



    </div>

  );
}

export default AppRoutes;
