import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Header from './components/Header'
import NavBar from './components/NavBar';


// pages
import BackEndBooks from './pages/BackEndBooks';
import FrontEndBooks from './pages/FrontEndBooks';
import Home from './pages/Home';
import DataBooks from './pages/DataBooks';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header>
         <NavBar/>
      </Header>
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
