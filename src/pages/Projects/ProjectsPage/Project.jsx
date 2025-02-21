import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectImg1 from '../../../assets/images/projects-img1.png';
import projectImg2 from '../../../assets/images/projects-img2.png';
import location from '../../../assets/logo/location.svg';
import buttonIcon from '../../../assets/logo/right.svg';

const Project = () => {
  const [selectedButton, setSelectedButton] = React.useState('all');

  const buttons = [
    { label: 'Barchasi', type: 'all' },
    { label: 'Qurilishi yakunlangan', type: 'done' },
    { label: 'Qurilish jarayonida', type: 'isHold' },
  ];

  const projects = [
    {
      id: 1,
      title: "YUNUSOBOD YANGI MO'JIZA",
      location: 'Yunusobod t. Yettichinor koʻchasi',
      bgImg: projectImg1,
      type: 'done',
      isActive: true,
    },
    {
      id: 2,
      title: 'Qoyliq yangi mavze',
      location: 'Qo’yliq t. Farobiy koʻchasi',
      bgImg: projectImg2,
      type: 'isHold',
      isActive: false,
    },
    {
      id: 3,
      title: "YUNUSOBOD YANGI MO'JIZA",
      location: 'Yunusobod t. Yettichinor koʻchasi',
      bgImg: projectImg1,
      type: 'done',
      isActive: true,
    },
    {
      id: 4,
      title: 'Qoyliq yangi mavze',
      location: 'Qo’yliq t. Farobiy koʻchasi',
      bgImg: projectImg2,
      type: 'isHold',
      isActive: true,
    },
  ];

  const filteredArr =
    selectedButton === 'all'
      ? projects
      : projects.filter((arr) => arr.type === selectedButton && arr.isActive);

  return (
    <section className="bg-[#C4A0581F] pt-[50px] pb-[150px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[46px] leading-[48px]"
        >
          Sizga qiziq bo‘lishi mumkin
        </h2>
        <p className="font-light text-[24px] leading-[28px] tracking-[0px] w-full max-w-[970px] mt-[20px]">
          Quyida sizga qiziq bo’lishi mumkin bo’lgan boshqa loyihalarimiz ilan
          tanishishingiz mumkin. fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        {/* Filter Buttons */}
        <ul className="flex space-x-4 mb-6 mt-[40px] bg-[#fff] p-[3px] rounded-[48px] w-fit">
          {buttons.map((btn) => (
            <li key={btn.label} className="cursor-pointer">
              <button
                style={{
                  border: '1px solid',
                  borderImageSource:
                    'linear-gradient(180deg, #EBB956 0%, #D7AC56 100%)',
                }}
                className={`text-[16px] px-4 py-2 rounded-[48px] transition-colors duration-200 cursor-pointer ${
                  selectedButton === btn.type
                    ? 'bg-[#D18202] text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => setSelectedButton(btn.type)}
              >
                {btn.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredArr.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-cover bg-center rounded-lg overflow-hidden h-auto"
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                  height: '495px',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                {!item.isActive ? (
                  <span className="relative text-[#CACACA] font-light py-[10px] px-[16px] bg-[#EDEDED] rounded-[48px] block w-fit mt-[32px] ml-auto mr-[32px] z-50">
                    Sotib bo’lingan
                  </span>
                ) : (
                  ''
                )}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-auto pl-[32px] pb-[32px] text-white">
                  <h3
                    style={{ fontFamily: 'Playfair Display Bold' }}
                    className="text-[30px] font-semibold leading-[48px]"
                  >
                    {item?.title.toUpperCase()}
                  </h3>
                  <p className="text-[18px] mt-[8px] leading-[18px] font-normal flex items-center">
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
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#B66D02' }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#D18202] text-[18px] leading-[26px] pl-[30px] py-[2px] pr-[2px] rounded-[48px] mt-[24px] flex items-center cursor-pointer"
                    >
                      Narxini bilish
                      <motion.span
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                        className="w-[46px] h-[46px] bg-white rounded-full flex justify-center items-center ml-[20px]"
                      >
                        <img
                          src={buttonIcon}
                          alt="buttonIcon"
                          width={20}
                          height={20}
                        />
                      </motion.span>
                    </motion.button>
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
