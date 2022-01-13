import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

import { Register } from './components/Register';

export function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
