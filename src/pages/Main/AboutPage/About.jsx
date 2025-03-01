import React from 'react';
import portfolio from '../../../assets/logo/portfolio.svg';
import clock from '../../../assets/logo/clock.svg';
import key from '../../../assets/logo/key.svg';
import area from '../../../assets/logo/area.svg';
import aboutBg from '../../../assets/images/about-bg.png';
import aboutBgCard1 from '../../../assets/images/about-card-bg.png';
import aboutBgCard2 from '../../../assets/images/about-card-bg2.png';
import aboutBgCard3 from '../../../assets/images/about-card-bg3.png';
import aboutBgCard4 from '../../../assets/images/about-card-bg4.png';
import aboutBgCard5 from '../../../assets/images/about-card-bg5.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const cards = [
    { id: 1, text: t('about.fact_card1'), image: aboutBgCard1 },
    { id: 2, text: t('about.fact_card2'), image: aboutBgCard2 },
    { id: 3, text: t('about.fact_card3'), image: aboutBgCard3 },
    { id: 4, text: t('about.fact_card4'), image: aboutBgCard4 },
    { id: 5, text: t('about.fact_card5'), image: aboutBgCard5 },
  ];

  return (
    <section className="py-[60px] sm:py-[100px]">
      <div className="container">
        <div
          className="bg-[#C4A0581F] px-[20px] mt:px-[45px] pt-[20px] md:pt-[45px] pb-[200px] md:pb-[75px] rounded-[16px] bg-no-repeat about-section"
          style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundPosition: 'right bottom',
            backgroundSize: 'contain', 
          }}
        >
          <h2
            style={{ fontFamily: 'Playfair Display Bold' }}
            className="text-[#D18202] font-bold text-[24px] md:text-[36px] leading-[24px] md:leading-[48px]"
          >
            {t('about.title')}
          </h2>
          <p
            style={{ fontFamily: 'SF Pro Display Light' }}
            className="text-[16px] md:text-[20px] leading-[24px] w-full max-w-[860px] mt-[36px]"
          >
            {t('about.desc')}
          </p>

          <ul
            style={{ fontFamily: 'SF Pro Display Regular' }}
            className="mt-[32px] md:mt-[84px] grid grid-cols-2 md:flex items-center gap-2.5 md:gap-[30px] md:flex-wrap"
          >
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={portfolio} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] w-full max-w-[190px] mt-[8px]">
                {t('about.card1_title')}
              </h3>
              <p className="text-[40px] md:text-[70px] text-[#D18202] leading-[47px] md:leading-[84px] mt-[12px]">
                {t('about.card1_desc')}
              </p>
            </li>
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={clock} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] w-full max-w-[190px] mt-[8px]">
                {t('about.card2_title')}
              </h3>
              <p className="text-[40px] md:text-[70px] text-[#D18202] leading-[47px] md:leading-[84px] mt-[12px]">
                {t('about.card2_desc')}
              </p>
            </li>
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={key} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] w-full max-w-[190px] mt-[8px]">
                {t('about.card3_title')}
              </h3>
              <p className="text-[40px] md:text-[70px] text-[#D18202] leading-[47px] md:leading-[84px] mt-[12px]">
                {t('about.card3_desc')}
              </p>
            </li>
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={area} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] w-full max-w-[190px] mt-[8px]">
                {t('about.card4_title')}
                <sup>2</sup>
              </h3>
              <p className="text-[40px] md:text-[70px] text-[#D18202] leading-[47px] md:leading-[84px] mt-[12px]">
                77 000
              </p>
            </li>
          </ul>
        </div>

        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[32px] md:text-[36px] leading-[42px] md:leading-[48px] mt-[59px]"
        >
          {t('about.fact_title')}
        </h2>
        <p
          style={{ fontFamily: 'SF Pro Display Light' }}
          className="text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] w-full max-w-[890px] mt-[20px]"
        >
         {t('about.fact_desc')}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[10px] md:mt-[60px]">
          {cards.slice(0, 2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[180px] sm:h-[280px] md:h-[380px] bg-no-repeat bg-center cursor-pointer bg-cover"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[20px] md:text-[36px] leading-[20px] md:leading-[48px]"
              >
                {card.id}. {card.text}
              </h3>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] pt-[16px]">
          {cards.slice(2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[180px] sm:h-[280px] md:h-[380px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[20px] md:text-[36px] leading-[20px] md:leading-[48px] w-full max-w-[360px]"
              >
                {card.id}. {card.text}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
