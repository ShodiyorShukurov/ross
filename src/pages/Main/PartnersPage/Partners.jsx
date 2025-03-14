import React, { useState } from 'react';
import payme from '../../../assets/partners/Payme.png';
import PhilipMorris from '../../../assets/partners/Philip Morris.png';
import PwClogo from '../../../assets/partners/PwC-logo.svg';
import RCMTBIG from '../../../assets/partners/RCMT_BIG.svg';
import tbc from '../../../assets/partners/TBC.svg';
import ucell from '../../../assets/partners/ucell.svg';
import VFS_Global_Logo from '../../../assets/partners/VFS_Global_Logo.png';
import Pro from '../../../assets/partners/pro.png';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null); // Mobil uchun state

  const partnersArr = [
    { id: 1, img: payme },
    { id: 2, img: PhilipMorris },
    { id: 3, img: PwClogo },
    { id: 4, img: RCMTBIG },
    { id: 5, img: tbc },
    { id: 6, img: ucell },
    { id: 7, img: VFS_Global_Logo },
    { id: 8, img: Pro },
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
              className={`flex items-center cursor-pointer transition-all duration-300 
                ${activeId === item.id ? 'grayscale-0 scale-110 opacity-100' : 'grayscale opacity-70'} 
                hover:grayscale-0 hover:scale-110 hover:opacity-100`}
              onClick={() => setActiveId(item.id)} 
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
