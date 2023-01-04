import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import ErrorPage from './pages/ErrorPage';
import Contactez from './test/contactez';

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
      
          <Route path="/"  element={<Contactez />} />







          <Route path="/*" element={<ErrorPage />}/>

        </Routes>
       
    </>
  );
}

export default App;
