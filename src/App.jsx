import React from 'react';
import Hero from './pages/Main/HeroPage/Hero';
import About from './pages/Main/AboutPage/About';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
