import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import calendar from '../../../assets/logo/calendar.svg';
import card1 from '../../../assets/images/newsCard1.png';
import card2 from '../../../assets/images/newsCard2.png';
import card3 from '../../../assets/images/newsCard3.png';
import card4 from '../../../assets/images/newsCard4.png';
import right from '../../../assets/logo/right.svg';

const newsData = [
  {
    id: 1,
    image: card1,
    title: 'Do‘stlaringiz bilan qo‘shni bo‘ling va bonusga ega bo‘ling!',
    date: '12/03/2025',
  },
  {
    id: 2,
    image: card2,
    title: 'Do‘stlaringiz bilan qo‘shni bo‘ling va bonusga ega bo‘ling!',
    date: '12/03/2025',
  },
  {
    id: 3,
    image: card3,
    title: 'Do‘stlaringiz bilan qo‘shni bo‘ling va bonusga ega bo‘ling!',
    date: '12/03/2025',
  },
  {
    id: 4,
    image: card4,
    title: 'Do‘stlaringiz bilan qo‘shni bo‘ling va bonusga ega bo‘ling!',
    date: '12/03/2025',
  },
  {
    id: 5,
    image: card1,
    title: 'Do‘stlaringiz bilan qo‘shni bo‘ling va bonusga ega bo‘ling!',
    date: '12/03/2025',
  },
  {
    id: 6,
    image: card2,
    title: 'Do‘stlaringiz bilan qo‘shni bo‘ling va bonusga ega bo‘ling!',
    date: '12/03/2025',
  },
];

const NewsSlider = () => {
  const [isActive, setIsActive] = React.useState('');

  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="flex justify-between items-center px-4">
          <h2
            style={{ fontFamily: 'Playfair Display Bold' }}
            className="text-[#D18202] text-[56px] font-bold"
          >
            Yangiliklar
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
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="flex items-center text-gray-500 text-sm mt-2">
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
