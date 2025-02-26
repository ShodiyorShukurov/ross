import React from 'react';
import factBg from '../../../assets/images/project_bg.png';

const Fact = ({ module }) => {
  return (
    <section className="about-section my-[100px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[36px] leading-[48px] mt-[59px]"
        >
          {module?.fact_page.title}
        </h2>
        <p
          style={{ fontFamily: 'SF Pro Display Light' }}
          className="font-light text-[20px] leading-[24px] w-full max-w-[890px] mt-[20px]"
        >
          {module?.fact_page.desc}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[30px]">
          {module?.fact_page.fact_cards.slice(0, 2).map((card) => (
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
                {card.title}
              </h3>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-[16px] pt-[16px]">
          {module?.fact_page.fact_cards.slice(2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[380px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[36px] leading-[48px] w-full max-w-[360px]"
              >
                {card.title}
              </h3>
            </li>
          ))}
        </ul>

        <ul
          className="bg-[#F1EDE4] px-[80px] py-[50px] flex justify-between items-center flex-wrap text-center rounded-[24px] mt-[16px]"
          style={{
            backgroundImage: `url(${factBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}
        >
          {module?.fact_page.area_cards.map((item) => (
            <li key={item.id}>
              <p
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="text-[80px] leading-[100px]"
              >
                {item.count}
              </p>
              <span
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="text-[20px] leading-[24px] mt-[15px] block"
              >
                 {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Fact;
