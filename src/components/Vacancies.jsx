import React from 'react';
import Hero from '../pages/Vacancies/HeroPage/Hero';
import VacanciesPage from '../pages/Vacancies/VacanciesPage/Vacancies';
import FormPage from '../pages/Vacancies/VacanciesForm/FormPage';
import Footer from './Footer'

const Vacancies = () => {
  return (
    <>
      <Hero />
      <main>
        <VacanciesPage />
        <FormPage />
      </main>
      <Footer/>
    </>
  );
};

export default Vacancies;
