import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  const { pathname: slug } = useLocation();
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path={slug} element={<Details slug={slug} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
