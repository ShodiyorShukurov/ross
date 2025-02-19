import React from 'react';
import About from '../pages/AboutPage/About';
import Project from '../pages/ProjectsPage/Project';
import ProjectMap from '../pages/ProjectMapPage/ProjectMap';
import Partners from '../pages/PartnersPage/Partners';
import VideoPage from '../pages/VideoPage/VideoPage';
import Contact from '../pages/ContactPage/Contact';
import Footer from './Footer';
import NewsSlider from '../pages/NewsPage/News';
import Hero from '../pages/HeroPage/Hero';

const Layout = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Project />
        {/* <ProjectMap/> */}
        <Partners />
        <NewsSlider />
        <VideoPage />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
