import React from 'react';
import Hero from './pages/Main/HeroPage/Hero';
import About from './pages/Main/AboutPage/About';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Vacancies from './components/Vacancies';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/projects/:id" element={<Projects />} />
      <Route path="/vacancies" element={<Vacancies />} />
    </Routes>
  );
};

export default App;
