import React from 'react';
import portfolio from '../../assets/logo/portfolio.svg';
import clock from '../../assets/logo/clock.svg';
import key from '../../assets/logo/key.svg';
import area from '../../assets/logo/area.svg';
import aboutBg from '../../assets/images/about-bg.png';
import aboutBgCard1 from '../../assets/images/about-card-bg.png';
import aboutBgCard2 from '../../assets/images/about-card-bg2.png';
import aboutBgCard3 from '../../assets/images/about-card-bg3.png';
import aboutBgCard4 from '../../assets/images/about-card-bg4.png';
import aboutBgCard5 from '../../assets/images/about-card-bg5.png';

const cards = [
  { id: 1, text: 'Ko’p yillik tajriba', image: aboutBgCard1 },
  { id: 2, text: 'Har qanday qurilish loyihalari', image: aboutBgCard2 },
  { id: 3, text: 'Sifat va ishonchlilik kafolati', image: aboutBgCard3 },
  { id: 4, text: 'Individual yondashuv', image: aboutBgCard4 },
  { id: 5, text: 'Sifat va ishonchlilik kafolati', image: aboutBgCard5 },
];

const About = () => {
  return (
    <section className="about-section my-[100px]">
      <div className="container">
        <div
          className=" bg-[#C4A0581F] px-[45px] pt-[45px] pb-[75px] bg-no-repeat bg-right bg-contain"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h2
            style={{ fontFamily: 'Playfair Display Black' }}
            className="text-[#D18202] font-bold text-[36px] leading-[48px]"
          >
            KOMPANIYA HAQIDA
          </h2>
          <p className="font-light text-[20px] leading-[24px] w-full max-w-[860px] mt-[36px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose
          </p>

          <ul className="mt-[84px] flex items-center gap-[30px]">
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={portfolio} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[20px] leading-[24px] w-full max-w-[190px] mt-[8px]">
                Kompaniya portfelidagi loyihalar
              </h3>
              <p className="text-[70px] text-[#D18202] leading-[84px] mt-[12px]">
                3 ta
              </p>
            </li>
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={clock} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[20px] leading-[24px] w-full max-w-[190px]  mt-[8px]">
                Ko'chmas mulk bozorida
              </h3>
              <p className="text-[70px] text-[#D18202] leading-[84px] mt-[12px]">
                5 yil
              </p>
            </li>
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={key} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[20px] leading-[24px] w-full max-w-[210px]  mt-[8px]">
                Bizning loyihalarimizda odamlar yashaydi
              </h3>
              <p className="text-[70px] text-[#D18202] leading-[84px] mt-[12px]">
                1000
              </p>
            </li>
            <li>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#D18202] rounded-full">
                <img src={area} alt="portfolio" width={20} height={20} />
              </div>
              <h3 className="text-[20px] leading-[24px] w-full max-w-[190px]  mt-[8px]">
                Turar joy hududlari M<sup>2</sup>
              </h3>
              <p className="text-[70px] text-[#D18202] leading-[84px] mt-[12px]">
                77 000
              </p>
            </li>
          </ul>
        </div>

        <h2
          style={{ fontFamily: 'Playfair Display Black' }}
          className="text-[#D18202] font-bold text-[36px] leading-[48px] mt-[59px]"
        >
          Kompaniya haqida 5 ta fakt
        </h2>
        <p className="font-light text-[20px] leading-[24px] w-full max-w-[890px] mt-[20px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[60px]">
          {cards.slice(0, 2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[380px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[36px] leading-[48px]"
              >
                {card.id}. {card.text}
              </h3>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-[16px] pt-[16px]">
          {cards.slice(2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[380px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[36px] leading-[48px]"
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
