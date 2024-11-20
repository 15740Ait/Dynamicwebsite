import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Header} from './components/Header'
import {Home} from './pages/Home'
import {About} from './pages/About.jsx'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Header text="Wine" />
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path="/about" element={ <About/>} />
      <Route path="/register" element={ <Signup/>} />
      <Route path="/login" element={ <Signin/>} />
    </Routes>
    
    </>
  )
}


export default App
