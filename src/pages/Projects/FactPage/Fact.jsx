import React from 'react';
import factBg from '../../../assets/images/project_bg.png';

const Fact = ({ module }) => {
  return (
    <section className="py-[60px] md:py-[100px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[32px] md:text-[36px] leading-[42px] md:leading-[48px]"
        >
          {module?.fact_page.title}
        </h2>

        <p
          style={{ fontFamily: 'SF Pro Display Light' }}
          className="text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] w-full max-w-[890px] mt-[20px]"
        >
          {module?.fact_page.desc}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[10px] md:mt-[60px]">
          {module?.fact_page?.fact_cards?.slice(0, 2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[180px] sm:h-[280px] md:h-[380px] bg-no-repeat bg-center cursor-pointer bg-cover"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[20px] lg:text-[36px] leading-[20px] md:leading-[48px] pr-[10px]"
              >
                {card.title}
              </h3>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] pt-[16px]">
          {module?.fact_page?.fact_cards?.slice(2).map((card) => (
            <li
              key={card.id}
              className="relative rounded-lg overflow-hidden w-full h-[180px] sm:h-[280px] md:h-[380px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h3
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="absolute bottom-5 left-5 text-white font-bold text-[20px] lg:text-[36px] leading-[20px] md:leading-[48px] w-full max-w-[360px] pr-[32px]"
              >
                {card.title}
              </h3>
            </li>
          ))}
        </ul>

        <ul
          className="bg-[#F1EDE4] px-[20px] md:px-[40px] lg:px-[60px] py-[20px] md:py-[30px] lg:py-[40px] grid grid-cols-2 md:grid-cols-4  text-center rounded-[24px] mt-[16px]"
          style={{
            backgroundImage: `url(${factBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            backgroundSize: 'contain',
          }}
        >
          {module?.fact_page.area_cards.map((item) => (
            <li key={item.id}>
              <p
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="text-[40px] md:text-[36px leading-[100%] xl:leading-[53px] lg:leading-[100%] text-nowrap"
              > 
                {item.count}
              </p>
              <span
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="text-[16px] lg:text-[20px] leading-[19px] lg:leading-[24px] mt-[6px] sm:mt-[15px] block"
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
