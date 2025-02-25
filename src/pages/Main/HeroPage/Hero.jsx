import { useState, useEffect } from 'react';
import bg1 from '../../../assets/images/hero-bg.png';
import bg2 from '../../../assets/images/hero-bg.png';
import bg3 from '../../../assets/images/about-bg.png';
import phone from '../../../assets/logo/phone.svg';
import logobg from '../../../assets/images/logo-bg.png';
import logo from '../../../assets/logo/logo.png';
import carouselItem from '../../../assets/logo/carousel item.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const backgrounds = [bg1, bg2, bg3];
  const [activeIndex, setActiveIndex] = useState(0);
  const savedLang = localStorage.getItem('lng') || 'uz';
  const [language, setLanguage] = useState(savedLang.toUpperCase());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(savedLang);
  }, [savedLang, i18n]);

  const changeValues = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    setLanguage(lng.toUpperCase());
  };

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
          <ul
            style={{ fontFamily: 'SF Pro Display Medium' }}
            className="hidden md:flex space-x-6 font-medium text-[18px]"
          >
            <li className="hover:text-gray-300 cursor-pointer">
              <NavLink to="/">{t('navbar.nav1')}</NavLink>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="#projects">{t('navbar.nav2')}</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              {t('navbar.nav3')}
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              {t('navbar.nav4')}
            </li>
            <NavLink to="/vacancies">{t('navbar.nav5')}</NavLink>
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
              <a
                href="tel:+998911777222"
                className="flex items-center font-medium text-[18px]"
              >
                <div className="w-[50px] h-[50px] rounded-full border-[2px] flex items-center justify-center">
                  <img src={phone} alt="phone icon" width={22} height={22} />
                </div>
                <span
                  style={{ fontFamily: 'SF Pro Display Medium' }}
                  className="ml-[12px]"
                >
                  91 177 72 22
                </span>
              </a>
              <button className="bg-[#D18202] text-[#fff] text-[18px] px-[30px] py-[10px] rounded-[48px] hover:bg-yellow-600 cursor-pointer">
                {t('navbar.nav_button')}
              </button>
            </div>
            <div className="relative z-50">
              <button
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="flex leading-[29px] font-medium items-center gap-[9px] cursor-pointer transition-all duration-700  border border-[#FFFFFF33] px-[14px] py-[5px] rounded-[48px]"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                <span>{language.toUpperCase()}</span>
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
                <ul
                  style={{ fontFamily: 'SF Pro Display Medium' }}
                  className="absolute top-full left-0 mt-[2px]  bg-transparent border border-[#FFFFFF33] text-white rounded-[20px] shadow-md w-22 font-medium"
                >
                  {['Uz', 'Ru', 'En'].map((lang, i) => (
                    <li
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        changeValues(lang.toLowerCase());
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-2 hover:bg-[#FFFFFF55] cursor-pointer ${
                        i === 0
                          ? 'rounded-t-[20px]'
                          : i === 2
                          ? 'rounded-b-[20px]'
                          : ''
                      }`}
                    >
                      {lang.toUpperCase()}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>

        <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center text-white z-10">
          <h1
            className="text-[70px] leading-[70px] font-bold w-[100%]"
            style={{ fontFamily: 'Playfair Display Bold' }}
          >
            Qurilish kompaniyasi nomi
          </h1>
          <p className="text-[24px] mt-[13px]">
            Qurilish Toshkent shahrida joylashgan
          </p>
          <button className="mt-5 bg-[#D18202] text-white text-[18px] py-[10px] px-[30px] rounded-[48px] hover:bg-yellow-600 transition-all duration-300 cursor-pointer">
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
