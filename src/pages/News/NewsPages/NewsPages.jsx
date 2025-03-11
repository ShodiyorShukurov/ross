import React from 'react';
import calendar from '../../../assets/logo/calendar.svg';
import { getNewsData } from '../../../mock/news';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NewsPages = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = React.useState('all');
  const { t } = useTranslation();
  const newsData = getNewsData(t);

  const buttons = [
    { label: 'Barchasi', type: 'all' },
    { label: 'Aksiyalar', type: 'aksiya' },
    { label: 'Yangiliklar', type: 'news' },
  ];

  const filteredArr =
    selectedButton === 'all'
      ? newsData
      : newsData.filter((arr) => arr.type === selectedButton && arr.type);

  return (
    <section className="py-[60px] md:py-[100px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2
            className="text-[32px] md:text-[40px] leading-[42px] lg:text-[56px] md:leading-[74px] text-[#D18202]"
            style={{ fontFamily: 'Playfair Display Bold' }}
          >
            Yangiliklar
          </h2>

          <select className="block md:hidden bg-white p-[15px] rounded-[10px] outline-0 text-[16px]">
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div className="md:flex md:gap-3 md:items-center mt-[24px] lg:mt-[35px]">
          <ul className="flex space-x-0 md:space-x-4 bg-[#fff] p-[3px] rounded-[48px] w-fit">
            {buttons.map((btn) => (
              <li key={btn.label} className="cursor-pointer">
                <button
                  style={{
                    border: '1px solid',
                    borderImageSource:
                      'linear-gradient(180deg, #EBB956 0%, #D7AC56 100%)',
                  }}
                  className={`text-[16px] md:text-[20px] px-[25px] md:px-[36px] py-[12px] md:py-[15px] rounded-[48px] transition-colors duration-200 cursor-pointer ${
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
          <select className="hidden md:block bg-white p-[17px] rounded-[10px] outline-0 text-[20px]">
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[60px]">
          <AnimatePresence>
            {filteredArr?.map((item) => (
              <motion.li
                key={item.id}
                style={{ fontFamily: 'SF Pro Display Medium' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate('/news/' + item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[200px] md:max-h-[450px] rounded-[16px]"
                />
                <div className="p-[5px]">
                  <h3 className="text-[24px] leading-[28px] mt-[16px]">
                    {item.title}
                  </h3>
                  <p className="flex items-center gap-2 text-gray-500 text-[16px] mt-4">
                    <img src={calendar} alt="calendar" width={18} height={18} />
                    {item.date}
                  </p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
};

export default NewsPages;
