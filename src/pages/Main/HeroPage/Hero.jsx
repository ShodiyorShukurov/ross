import { useState, useEffect } from 'react';

import bg1 from '../../../assets/images/hero-bg.png';
import bg2 from '../../../assets/images/hero-bg.png';
import bg3 from '../../../assets/images/about-bg.png';
import phone from '../../../assets/logo/phone.svg';
import logobg from '../../../assets/images/logo-bg.png';
import logo from '../../../assets/logo/logo.png';
import carouselItem from '../../../assets/logo/carousel item.svg';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  const backgrounds = [bg1, bg2, bg3];
  const [activeIndex, setActiveIndex] = useState(0);
  const [language, setLanguage] = useState('Uz');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + backgrounds.length) % backgrounds.length
    );
  };

  return (
    <div
      className="relative min-h-screen bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${backgrounds[activeIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="z-10 container">
        <nav className="flex justify-between items-center bg-transparent text-white relative z-50">
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-gray-300 cursor-pointer">
              <NavLink to="/">Kompaniya haqida</NavLink>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <NavLink to="/projects">Loyihalar</NavLink>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Yangiliklar</li>
            <li className="hover:text-gray-300 cursor-pointer">Kontakt</li>
            <li className="hover:text-gray-300 cursor-pointer">Vakansiyalar</li>
          </ul>
          <div className="relative w-[100px] h-[100px]">
            <img
              src={logobg}
              alt="logobg"
              className="absolute inset-0 w-full h-full"
            />
            <img
              src={logo}
              alt="Logo"
              className="absolute inset-0 w-[90px] h-[90px] mx-auto mt-[5px]"
            />
          </div>

          <div className="flex items-center gap-[40px]">
            <div className="flex items-center space-x-4">
              <a href="tel:+998911777222" className="flex items-center">
                <div className="w-[56px] h-[56px] rounded-full border-[2px] flex items-center justify-center">
                  <img src={phone} alt="phone icon" width={24} height={24} />
                </div>
                <span className="ml-[12px]">91 177 72 22</span>
              </a>
              <button className="bg-[#D18202] text-[#fff] px-4 py-2 rounded-[48px] hover:bg-yellow-600">
                Konsultatsiya olish
              </button>
            </div>
            <div className="relative z-50">
              <button
                className="flex leading-[29px] font-medium items-center gap-[9px] cursor-pointer transition-all duration-700  border border-[#FFFFFF33] px-[14px] py-[5px] rounded-[48px]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{language}</span>
                <span
                  className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.0001 13.1714L16.9499 8.22168L18.3641 9.63589L12.0001 15.9999L5.63623 9.63589L7.05044 8.22168L12.0001 13.1714Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>

              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-md w-28">
                  {['Uz', 'Ru', 'En'].map((lang, i) => (
                    <li
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                        i === 0 ? 'rounded-t-lg' : i === 2 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>

        <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center text-white z-10">
          <h1
            className="text-[60px] leading-[70px] font-bold w-[100%]"
            style={{ fontFamily: 'Playfair Display Bold' }}
          >
            Qurilish kompaniyasi nomi
          </h1>
          <p className="text-[20px] mt-[13px]">
            Qurilish Toshkent shahrida joylashgan
          </p>
          <button className="mt-5 bg-[#D18202] text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition-all duration-300">
            Konsultatsiya olish
          </button>
        </div>

        <div className="flex justify-center items-center space-x-3 mt-10 absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={prevSlide}
            className="text-white text-2xl hover:text-gray-400 transition cursor-pointer"
          >
            <img src={carouselItem} alt="item" />
          </button>

          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? 'w-[18px] h-[18px] bg-[#D18202]'
                  : 'w-[12px] h-[12px] bg-[#D1820233] border border-[#D18202]'
              }`}
            ></button>
          ))}

          <button
            onClick={nextSlide}
            className="text-white text-2xl hover:text-gray-400 transition cursor-pointer"
          >
            <img className="rotate-180" src={carouselItem} alt="item" />
          </button>
        </div>
      </div>
    </div>
  );
}
