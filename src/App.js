import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navebar from './components/Navebar';
import Home from './pages/Home';
import Cart from './pages/Cart'
function App() {
  return (
    <Router>
      <>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
