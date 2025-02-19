import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import calendar from '../../assets/logo/calendar.svg';
import card1 from '../../assets/images/newsCard1.png';
import card2 from '../../assets/images/newsCard2.png';
import card3 from '../../assets/images/newsCard3.png';
import card4 from '../../assets/images/newsCard4.png';

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
  return (
    <section className="py-10 bg-white">
      <div className="container">
        {/* Sarlavha */}
        <div className="flex justify-between items-center px-4">
          <h2
            style={{ fontFamily: 'Playfair Display' }}
            className="text-[#D18202] text-3xl font-bold"
          >
            Yangiliklar
          </h2>
          {/* Slider navigation */}
          <div className="flex space-x-2">
            <button className="swiper-button-prev-custom w-10 h-10 rounded-full border flex items-center justify-center text-[#D18202] cursor-pointer active:bg-[#D18202]">
              ←
            </button>
            <button className="swiper-button-next-custom w-10 h-10 rounded-full border flex items-center justify-center text-[#D18202] cursor-pointer">
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[Navigation]}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
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
