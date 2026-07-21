
import React from 'react'
import { Routes, Route } from "react-router-dom";

import Hero from './components/Hero';
import Main from './components/Main';
import Child from './components/Child';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Child" element={<Child />} />
    </Routes>
  );
}

export default App;