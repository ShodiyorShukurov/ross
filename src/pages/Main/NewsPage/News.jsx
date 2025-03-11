import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import calendar from '../../../assets/logo/calendar.svg';
import { useTranslation } from 'react-i18next';
import { getNewsData } from '../../../mock/news';

const NewsSlider = () => {
  const [isActive, setIsActive] = React.useState('');
  const { t } = useTranslation();
  const newsData = getNewsData(t);

  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2
            style={{ fontFamily: 'Playfair Display Bold' }}
            className="text-[#D18202] text-[32px] sm:text-[56px] font-bold"
          >
            {t('news.home_title')}
          </h2>

          <div className="flex space-x-2">
            <button
              className={`swiper-button-prev-custom w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer  ${
                isActive == 1
                  ? 'bg-[#D18202] text-[#fff]'
                  : 'text-[#D18202] bg-transparent'
              }`}
              onClick={() => setIsActive(1)}
            >
              <svg
                className="rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1.66638 10.8333L1.66626 9.16675H15.1428L11.8514 5.87529L13.0299 4.69678L18.3333 10.0001L13.0299 15.3034L11.8514 14.1248L15.1429 10.8334L1.66638 10.8333Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              className={`swiper-button-next-custom w-10 h-10 rounded-full border flex items-center justify-center  cursor-pointer ${
                isActive == 2
                  ? 'bg-[#D18202] text-[#fff]'
                  : 'text-[#D18202] bg-transparent'
              }`}
              onClick={() => setIsActive(2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1.66638 10.8333L1.66626 9.16675H15.1428L11.8514 5.87529L13.0299 4.69678L18.3333 10.0001L13.0299 15.3034L11.8514 14.1248L15.1429 10.8334L1.66638 10.8333Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[Navigation]}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mt-6"
        >
          {newsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[300px] md:max-h-[450px]"
                />
                <div className='p-[5px]'>
                  <h3 className="text-[16px] sm:text-[24px] leading-[28px] mt-[10px] sm:mt-[16px]">
                    {item.title}
                  </h3>
                  <p className="flex items-center gap-2 text-gray-500 text-[16px] mt-4">
                    <img src={calendar} alt="calendar" width={18} height={18} />
                    {item.date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSlider;
