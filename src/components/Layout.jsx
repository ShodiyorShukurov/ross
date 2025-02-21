import React from 'react';
import About from '../pages/Main/AboutPage/About';
import Project from '../pages/Main/ProjectsPage/Project';
import ProjectMap from '../pages/Main/ProjectMapPage/ProjectMap';
import Partners from '../pages/Main/PartnersPage/Partners';
import VideoPage from '../pages/Main/VideoPage/VideoPage';
import Contact from '../pages/Main/ContactPage/Contact';
import Footer from './Footer';
import NewsSlider from '../pages/Main/NewsPage/News';
import Hero from '../pages/Main/HeroPage/Hero';
// import BuildingMap from '../pages/BuildingMap/BuildingMap'

const Layout = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Project />
        <ProjectMap />
        <Partners />
        <NewsSlider />
        <VideoPage />
        <Contact />
        {/* <BuildingMap/> */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
