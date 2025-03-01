import React from 'react';
import Hero from '../pages/News/HeroPage/Hero';
import Footer from './Footer';
import NewsPages from '../pages/News/NewsPages/NewsPages';

const News = () => {
  return (
    <>
      <Hero />
      <main>
        <NewsPages />
      </main>
      <Footer />
    </>
  );
};

export default News;
