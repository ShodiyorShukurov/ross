import React, { useState, useEffect } from 'react';
import Hero from '../pages/Projects/HeroPage/Hero';
import Contact from '../pages/Projects/ContactPage/Contact';
import Project from '../pages/Projects/ProjectsPage/Project';
import Footer from './Footer';
import Balance from '../pages/Projects/BalancePage/Balance';
import Fact from '../pages/Projects/FactPage/Fact';
import Calculation from '../pages/Projects/CalculationPage/Calculation';
import BuildingMap from '../pages/Projects/BuildingMap/BuildingMap';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [module, setModule] = useState(null);

  const changeIdVacansies = async (id) => {
    try {
      const importedModule = await import(`../mock/project${id}.js`);
      setModule(() => importedModule.default);
    } catch (error) {
      console.error('JavaScript faylni yuklashda xatolik:', error);
      setModule(null);
    }
  };

  useEffect(() => {
    changeIdVacansies(id);
    window.scrollTo(0, 0);
  }, [id]);

  const projectData = module ? module(t).projectData : null;

  return (
    <>
      {/* <Hero module={projectData} /> */}
      <main>
        {/* <Balance module={projectData} /> */}
        <Fact module={projectData} />
        {/* <Calculation module={projectData} /> */}
        <BuildingMap module={projectData}/>
        <Contact />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default Projects;
