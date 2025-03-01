import React from 'react';
import Layout from './components/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Vacancies from './components/Vacancies';
import News from './components/News';
import NewsDetails from './components/NewsDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Layout />} />
      <Route path="/" element={<Navigate to='/home' />} />
      <Route path="/projects/:id" element={<Projects />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetails />} />
    </Routes>
  );
};

export default App;
