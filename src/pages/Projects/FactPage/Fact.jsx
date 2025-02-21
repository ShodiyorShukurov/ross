import React from 'react';
import aboutBgCard1 from '../../../assets/images/about-card-bg.png';
import aboutBgCard2 from '../../../assets/images/about-card-bg2.png';
import aboutBgCard3 from '../../../assets/images/about-card-bg3.png';
import aboutBgCard4 from '../../../assets/images/about-card-bg4.png';
import aboutBgCard5 from '../../../assets/images/about-card-bg5.png';

const cards = [
  { id: 1, text: 'Ko’p yillik tajriba', image: aboutBgCard1 },
  { id: 2, text: 'Har qanday qurilish loyihalari', image: aboutBgCard2 },
  { id: 3, text: 'Sifat va ishonchlilik kafolati', image: aboutBgCard3 },
  { id: 4, text: 'Individual yondashuv', image: aboutBgCard4 },
  { id: 5, text: 'Sifat va ishonchlilik kafolati', image: aboutBgCard5 },
];

const Fact = () => {
  return (
    <section className="about-section my-[100px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[36px] leading-[48px] mt-[59px]"
        >
          Loyiha haqida 5 ta fakt
        </h2>
        <p className="font-light text-[20px] leading-[24px] w-full max-w-[890px] mt-[20px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[30px]">
          {cards.slice(0, 2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[380px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display Bold' }}
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
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[36px] leading-[48px]"
              >
                {card.id}. {card.text}
              </h3>
            </li>
          ))}
        </ul>

        <ul className='bg-[#F1EDE4] px-[50px] py-[50px] flex justify-between items-center flex-wrap text-center rounded-[24px] mt-[16px]'>
            <li>
                <p style={{fontFamily: "Playfair Display Bold"}} className='text-[60px] leading-[100px]'>1.7 ga</p>
                <span className='text-[16px] leading-[20px]'>Loyiha maydoni</span>
            </li>
            <li>
                <p style={{fontFamily: "Playfair Display Bold"}} className='text-[60px] leading-[100px]'>247</p>
                <span className='text-[16px] leading-[20px]'>Uylar soni</span>
            </li>
            <li>
                <p style={{fontFamily: "Playfair Display Bold"}} className='text-[60px] leading-[100px]'>12</p>
                <span className='text-[16px] leading-[20px]'>Qavatlar soni</span>
            </li>
            <li>
                <p style={{fontFamily: "Playfair Display Bold"}} className='text-[60px] leading-[100px]'>2026</p>
                <span className='text-[16px] leading-[20px]'>Qurilish bitkaziladigan sana</span>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default Fact;
