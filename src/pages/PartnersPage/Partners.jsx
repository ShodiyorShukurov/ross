import React from 'react';
import nrg from '../../assets/images/nrg.png';
import BIgroup from '../../assets/images/BIgroup.png';
import alutex from '../../assets/images/alutex.png';
import enter from '../../assets/images/enter.png';
import korzinka from '../../assets/images/korzinka.png';
import atlant from '../../assets/images/atlant.png';

const Partners = () => {
  const partnersArr = [
    {
      id: 1,
      img: nrg,
    },
    {
      id: 2,
      img: BIgroup,
    },
    {
      id: 3,
      img: alutex,
    },
    {
      id: 4,
      img: enter,
    },
    {
      id: 5,
      img: korzinka,
    },
    {
      id: 6,
      img: atlant,
    },
  ];

  return (
    <section className="py-[160px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Black' }}
          className="text-[#D18202] font-bold text-[56px] leading-[74px] "
        >
          Hamkorlarimiz
        </h2>

        <div className="flex flex-wrap">
          {partnersArr.map((item) => (
            <div
              className="p-[30px] flex items-center justify-center cursor-pointer transition-all duration-300"
              style={{ filter: 'grayscale(100%)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = 'grayscale(0%)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = 'grayscale(100%)')
              }
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.img}
                width={170}
                height={170}
                className="object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
