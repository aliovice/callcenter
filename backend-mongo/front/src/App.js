import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route} from "react-router-dom";
import Offers from './pages/Offers';
import React from 'react'
import Test from './pages/Test';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
          <Route path="/" exact element={<Home />} />
          <Route path="/offers" exact element={<Offers />} />
          <Route path="/test" exact element={<Test />} />
        
      </Routes>
    </>
  );
}

export default App;
