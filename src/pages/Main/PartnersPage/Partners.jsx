import React from 'react';
import nrg from '../../../assets/images/nrg.png';
import BIgroup from '../../../assets/images/BIgroup.png';
import alutex from '../../../assets/images/alutex.png';
import enter from '../../../assets/images/enter.png';
import korzinka from '../../../assets/images/korzinka.png';
import atlant from '../../../assets/images/atlant.png';

const Partners = () => {
  const partnersArr = [
    { id: 1, img: nrg },
    { id: 2, img: BIgroup },
    { id: 3, img: alutex },
    { id: 4, img: enter },
    { id: 5, img: korzinka },
    { id: 6, img: atlant },
  ];

  return (
    <section className="py-[160px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[56px] leading-[74px]"
        >
          Hamkorlarimiz
        </h2>

        <div className="flex flex-wrap justify-between">
          {partnersArr.map((item) => (
            <div
              key={item.id}
              className="p-[30px] flex items-center cursor-pointer transition-all duration-300 w-[15%] grayscale hover:grayscale-0 hover:scale-110 hover:opacity-100 opacity-70"
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
