import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import location from '../../../assets/logo/location.svg';
import buttonIcon from '../../../assets/logo/right.svg';
import { getProjectsData } from '../../../mock/projects';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';

const Project = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projects = getProjectsData(t);
  const [selectedButton, setSelectedButton] = React.useState('all');

  const buttons = [
    { label: t('project.filter_button1'), type: 'all' },
    { label: t('project.filter_button2'), type: 'done' },
    { label: t('project.filter_button3'), type: 'isHold' },
  ];

  const filteredArr =
    selectedButton === 'all'
      ? projects
      : projects.filter((arr) => arr.type === selectedButton);

  return (
    <section
      className="bg-[#C4A0581F] pt-[32px] md:pt-[50px] pb-[32px] sm:pb-[100px] md:pb-[150px]"
      id="projects"
    >
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] text-[32px] md:text-[48px] lg:text-[56px] leading-[42px] md:leading-[56px] lg:leading-[74px]"
        >
          {t('project.project_title')}
        </h2>
        <p
          style={{ fontFamily: 'SF Pro Display Light' }}
          className="text-[16px] md:text-[24px] leading-[19px] md:leading-[28px] w-full max-w-[1300px] mt-[10px] md:mt-[20px]"
        >
          {t('project.project_desc')}
        </p>

        <ul
          className="flex items-center gap-2 sm:gap-4 my-4 md:my-6 bg-white p-1 rounded-full w-full 
             sm:w-fit flex-nowrap sm:flex-wrap  sm:justify-center"
        >
          {buttons.map((btn) => (
            <li key={btn.label} className="cursor-pointer">
              <button
                className={`text-sm sm:text-base md:text-lg px-3 sm:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer 
                    border border-transparent
                    ${
                      selectedButton === btn.type
                        ? 'bg-[#D18202] text-white shadow-md border-[#D18202]'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                onClick={() => setSelectedButton(btn.type)}
              >
                {btn.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredArr.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-cover bg-center rounded-[16px] overflow-hidden sm:h-auto project-card cursor-pointer"
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                  height: '495px',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} 
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate('/projects/' + item.id)}
              >
                {!item.isActive ? (
                  <span className="relative text-[#CACACA] font-light py-[10px] px-[16px] bg-[#EDEDED] rounded-[48px] block w-fit mt-[16px] sm:mt-[32px] ml-auto mr-[16px] sm:mr-[32px] z-50">
                    {t('project.sold')}
                  </span>
                ) : (
                  ''
                )}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-auto px-[16px] sm:px-[32px] lg:pl-[32px] pb-[16px] sm:pb-[32px] text-white">
                  <h3
                    style={{ fontFamily: 'Playfair Display Bold' }}
                    className="text-[20px] sm:text-[28px] lg:text-[36px] font-semibold leading-[36px] lg:leading-[48px]"
                  >
                    {item?.title.toUpperCase()}
                  </h3>
                  <p className="text-[14px] sm:text-[20px] lg:text-[22px] mt-[8px] leading-[16px] sm:leading-[18px] font-normal flex items-center">
                    <span className="mr-[8px]">
                      <img
                        src={location}
                        alt="location icon"
                        width={20}
                        height={20}
                      />
                    </span>
                    {item.location}
                  </p>

                  {item.isActive ? (
                    <NavLink
                      transition={{ duration: 0.3 }}
                      className="bg-[#D18202] text-[16px] sm:text-[18px] leading-[26px] pl-[30px] py-[2px] pr-[2px] rounded-[48px] mt-[16px] sm:mt-[24px] flex items-center cursor-pointer w-full lg:w-fit hover:bg-[#EDEDED] hover:text-[#CACACA]"
                      to={'/projects/' + item.id}
                    >
                      {t('project.card_button')}
                      <motion.span className="w-[46px] h-[46px] bg-white rounded-full flex justify-center items-center ml-auto lg:ml-[20px]">
                        <img
                          src={buttonIcon}
                          alt="buttonIcon"
                          width={20}
                          height={20}
                        />
                      </motion.span>
                    </NavLink>
                  ) : (
                    ''
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Project;
