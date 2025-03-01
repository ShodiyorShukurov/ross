import React from 'react';
import nrg from '../../../assets/images/nrg.png';
import BIgroup from '../../../assets/images/BIgroup.png';
import alutex from '../../../assets/images/alutex.png';
import enter from '../../../assets/images/enter.png';
import korzinka from '../../../assets/images/korzinka.png';
import atlant from '../../../assets/images/atlant.png';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();

  const partnersArr = [
    { id: 1, img: nrg },
    { id: 2, img: BIgroup },
    { id: 3, img: alutex },
    { id: 4, img: enter },
    { id: 5, img: korzinka },
    { id: 6, img: atlant },
  ];

  return (
    <section className="py-[60px] sm:py-[80px] md:py-[160px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[32px] sm:text-[40px] md:text-[56px] text-center md:text-left leading-[53px] md:leading-[74px]"
        >
          {t('partners.title')}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[10px]">
          {partnersArr.map((item) => (
            <div
              key={item.id}
              className="flex items-center cursor-pointer transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 hover:opacity-100 opacity-70"
            >
              <img
                src={item.img}
                alt={`Partner ${item.id}`}
                width={170}
                height={170}
                className="object-fill transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
