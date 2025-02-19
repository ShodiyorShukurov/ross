import React from 'react';
import About from '../pages/AboutPage/About';
import Project from '../pages/ProjectsPage/Project';
import ProjectMap from '../pages/ProjectMapPage/ProjectMap';
import Partners from '../pages/PartnersPage/Partners';
import VideoPage from '../pages/VideoPage/VideoPage';
import Contact from '../pages/ContactPage/Contact';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <main>
        <About />
        <Project />
        {/* <ProjectMap/> */}
        <Partners />
        <VideoPage />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
