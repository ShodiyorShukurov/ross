import React from 'react';
import vacanciesImg from '../../../assets/images/vakansiya_img.png';
import { getVacansies } from '../../../mock/vacansiesData';
import useVacansies from '../../../hooks/UseVacansies';
import FormPage from '../VacanciesForm/FormPage';
import { useTranslation } from 'react-i18next';

const Vacancies = () => {
  const { changeIdVacansies, id } = useVacansies();
  const { t } = useTranslation();

  const vacanciesData = getVacansies(t);
  return (
    <>
      <section className="py-[100px]" id="vacansies">
        <div className="container mb-[100px]">
          <h2
            style={{ fontFamily: 'Playfair Display Bold' }}
            className="text-[50px] font-bold text-[#D18202] mb-6 leading-[75px]"
          >
            {t('vacancies_page.title')}
          </h2>

          <div
            style={{ fontFamily: 'SF Pro Display Medium' }}
            className="grid grid-cols-4 pl-[px] text-[20px] leading-[28px] mb-[10px]"
          >
            <h5>{t('vacancies_page.table_title1')}</h5>
            <h5 className="ml-[11px]">{t('vacancies_page.table_title2')}</h5>
            <h5 className="ml-[1px]">{t('vacancies_page.table_title3')}</h5>
            <span></span>
          </div>

          {vacanciesData.map((job) => (
            <div
              key={job.id}
              className="grid grid-cols-4 p-[30px] rounded-[12px] mb-[10px] items-center bg-white"
            >
              <h5
                style={{ fontFamily: 'SF Pro Display Semibold' }}
                className="text-[20px] leading-[28px]"
              >
                {job.title}
              </h5>
              <p
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="text-[16px] leading-[21px]"
              >
                {job.category}
              </p>
              <p
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="text-[16px] leading-[21px]"
              >
                {job.format}
              </p>
              <a
                href="#vacansiesPage"
                className="bg-[#D18202] text-white py-[10px] px-[30px] rounded-[48px] text-[18px] w-fit mx-auto cursor-pointer"
                onClick={() => changeIdVacansies(job.id)}
              >
                {t('vacancies_page.button_text')}
              </a>
            </div>
          ))}
        </div>

        <img src={vacanciesImg} alt="img" />
      </section>
      <FormPage id={id} />
    </>
  );
};

export default Vacancies;
