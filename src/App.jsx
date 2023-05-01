import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
//components
import Header from './components/Header'
import NavBar from './components/NavBar';
import Menu from './components/Menu';


// pages
import BackEndBooks from './pages/BackEndBooks';
import FrontEndBooks from './pages/FrontEndBooks';
import Home from './pages/Home';
import DataBooks from './pages/DataBooks';


function App() {
  const [navOpen, setNavOpen] = useState(false);

  function handleMenuClick() {
    setNavOpen(true);
  }

  function handleMenuClose() {
    setNavOpen(false);
  }

  return (
    <>
      <BrowserRouter>
      <Header>
         <NavBar/>
         <FaBars className='menu-mobile' onClick={handleMenuClick}/>
      </Header>
      {navOpen && <Menu onClick={handleMenuClose} />}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/backendbooks" element={<BackEndBooks/>}/>
          <Route path="/frontendbooks" element={<FrontEndBooks/>}/>
          <Route path="/Databooks" element={<DataBooks/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
