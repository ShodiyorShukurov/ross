import React from 'react';
import vacanciesImg from '../../../assets/images/vakansiya_img.png';
import { getVacansies } from '../../../mock/vacansiesData';
import useVacansies from '../../../hooks/UseVacansies';
import FormPage from '../VacanciesForm/FormPage';
import { useTranslation } from 'react-i18next';

const Vacancies = () => {
  const { changeIdVacansies, id } = useVacansies();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalId, setModalId] = React.useState('');

  const vacanciesData = getVacansies(t);
  return (
    <>
      <section className="py-[60px] md:py-[100px]" id="vacansies">
        <div className="container mb-[100px]">
          <h2
            style={{ fontFamily: 'Playfair Display Bold' }}
            className="text-[32px] md:text-[40px] lg:text-[50px] font-bold text-[#D18202] mb-6 leading-[42px] md:leading-[53px] lg:leading-[75px]"
          >
            {t('vacancies_page.title')}
          </h2>

          <div
            style={{ fontFamily: 'SF Pro Display Medium' }}
            className="hidden lg:grid grid-cols-3 lg:grid-cols-4 text-[20px] leading-[28px] mb-[10px]"
          >
            <h5>{t('vacancies_page.table_title1')}</h5>
            <h5 className="ml-[11px]">{t('vacancies_page.table_title2')}</h5>
            <h5 className="ml-[1px]">{t('vacancies_page.table_title3')}</h5>
            <span></span>
          </div>

          {vacanciesData.map((job) => (
            <div
              key={job.id}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-0 p-[30px] rounded-[12px] mb-[10px] items-center bg-white"
            >
              <h5
                style={{ fontFamily: 'SF Pro Display Semibold' }}
                className="text-[20px] leading-[28px]"
              >
                {job.title}
              </h5>

              <div className="flex flex-col">
                <p className="hidden md:block lg:hidden text-[#000000b3] text-[14px] mb-[4px]">
                  Yo’nalish
                </p>
                <p className="text-[16px] leading-[21px] font-[SF_Pro_Display_Regular] md:font-[SF_Pro_Display_Medium]">
                  {job.category}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="hidden md:block lg:hidden text-[#000000b3] text-[14px] mb-[4px]">
                  Ish formati
                </p>
                <p className="text-[16px] leading-[21px] font-[SF_Pro_Display_Regular] md:font-[SF_Pro_Display_Medium]">
                  {job.format}
                </p>
              </div>

              <div className=" flex gap-3 md:col-span-3 lg:col-span-1  md:mt-[24px] lg:mt-0 text-center">
                <a
                  href="#vacansiesPage"
                  className="bg-[#D18202] text-white py-[10px] px-[30px] rounded-[48px] text-[18px] w-full lg:w-fit mx-auto cursor-pointer"
                  onClick={() => changeIdVacansies(job.id)}
                >
                  {t('vacancies_page.button_text')}
                </a>

                <a
                  onClick={() => {
                    setIsOpen(true);
                    setModalId(job.id);
                  }}
                  className="bg-[#fff] text-black py-[10px] px-[30px] rounded-[48px] text-[18px] w-full lg:w-fit mx-auto cursor-pointer"
                >
                  Batafsil
                </a>
              </div>
            </div>
          ))}
        </div>

        <img
          src={vacanciesImg}
          alt="img"
          className="h-full w-full min-h-[550px] object-cover"
        />
      </section>
      <FormPage id={id} />

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#00000070] bg-opacity-50 p-5 sm:p-0"
          onClick={() => setIsOpen(false)}
          style={{zIndex: "100000"}}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-96 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: vacanciesData[modalId - 1].moreInfo,
              }}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 mt-[20px]"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Vacancies;
