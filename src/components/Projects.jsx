import React from 'react';
import Hero from '../pages/Projects/HeroPage/Hero';
import Contact from '../pages/Projects/ContactPage/Contact';
import Project from '../pages/Projects/ProjectsPage/Project';
import Footer from './Footer';
import Balance from '../pages/Projects/BalancePage/Balance';
import Fact from '../pages/Projects/FactPage/Fact';

const Projects = () => {
  return (
    <>
      <Hero />
      <main>
        <Balance />
        <Fact/>
        <Contact />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default Projects;
