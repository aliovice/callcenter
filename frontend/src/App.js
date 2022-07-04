import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Offers from './pages/Offers';
import React, { useState } from 'react'
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
import Request from './pages/Request';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import AddPersone from './pages/AddPersone';
import ErrorPage from './pages/ErrorPage';

// function setToken(userToken) {
// }

// function getToken() {
// }

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Home setToken={setToken} />
  // }
  return (
    <>
      
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/offers"  element={<Offers />} />
          <Route path="/test"  element={<Test />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/request"  element={<Request />} />
          <Route path="/about"  element={<AboutUs />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/AddPersone"  element={<AddPersone />} />







          <Route path="/*" element={<ErrorPage />}/>

        </Routes>
       
    </>
  );
}

export default App;
