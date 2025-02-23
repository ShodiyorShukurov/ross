import { useState } from 'react';
import bg1 from '../../../assets/images/hero-bg.png';
import phone from '../../../assets/logo/phone.svg';
import logobg from '../../../assets/images/logo-bg.png';
import logo from '../../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  const [language, setLanguage] = useState('Uz');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${bg1})`,
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
                <ul className="absolute top-full left-0 mt-[2px]  bg-transparent border border-[#FFFFFF33] text-white rounded-[20px] shadow-md w-22 font-medium">
                  {['Uz', 'Ru', 'En'].map((lang, i) => (
                    <li
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-2 hover:bg-[#FFFFFF55] cursor-pointer ${
                        i === 0 ? 'rounded-t-[20px]' : i === 2 ? 'rounded-b-[20px]' : ''
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

        <ul className="absolute flex flex-col gap-[40px] text-[#fff] bottom-15">
          <li className="flex gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                fill="#D18202"
              />
            </svg>
            <div className="w-full max-w-[160px]">
              <h4 className="text-[18px] font-semibold">Chilonzor tumani</h4>
              <p className="text-[14px] text-[#FFFFFFCC] font-medium leading-[19px] mt-[8px] ">
                Chilonzor tumani Archa ko’chasi, 12/5
              </p>
            </div>
          </li>

          <li className="flex gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 18.9999H22V8.99991H18V6.58569L12 0.585693L6 6.58569V8.99991H2V18.9999H1V20.9999H23V18.9999ZM6 19H4V11H6V19ZM18 11H20V19H18V11ZM11 12H13V19H11V12Z"
                fill="#D18202"
              />
            </svg>
            <div className="w-full max-w-[160px]">
              <h4 className="text-[18px] font-semibold">Maktab</h4>
              <p className="text-[14px] text-[#FFFFFFCC] font-medium leading-[19px] mt-[8px] ">
                105 maktab gacha 10 daqiqalik yo’l
              </p>
            </div>
          </li>

          <li className="flex gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z"
                fill="#D18202"
              />
            </svg>
            <div className="w-full max-w-[160px]">
              <h4 className="text-[18px] font-semibold">Biznes markazi</h4>
              <p className="text-[14px] text-[#FFFFFFCC] font-medium leading-[19px] mt-[8px] ">
                Apex biznes markazi uchun 5 daqiqalik yo’l
              </p>
            </div>
          </li>

          <li className="flex gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.809L18.7055 10.8719ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70857 4.33299C8.00078 4.84265 6.53236 5.90735 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70857 4.33299Z"
                fill="#D18202"
              />
            </svg>
            <div className="w-full max-w-[160px]">
              <h4 className="text-[18px] font-semibold">Sport kompleksi</h4>
              <p className="text-[14px] text-[#FFFFFFCC] font-medium leading-[19px] mt-[8px] ">
                Altius sport kompleksi uchun 15 daqiqalik yo’l
              </p>
            </div>
          </li>
        </ul>

        <div className="absolute flex flex-col text-center items-center text-[#fff] left-1/2 transform -translate-x-1/2 bottom-20">
          <h1
            className="text-[60px] leading-[70px] font-bold w-[100%] "
            style={{ fontFamily: 'Playfair Display Bold' }}
          >
            Balance
          </h1>
          <p className="text-[20px] mt-[13px] w-full max-w-[300px]">
            Hayotingiz balansini saqlash uchun eng to‘g‘ri tanlov!
          </p>
          <button className="mt-5 bg-[#D18202] text-white py-2 px-[50px] rounded-full w-fit cursor-pointer">
            Ariza qoldirish
          </button>
          <button className="mt-5 bg-[#fff] text-[#000] py-2 px-[50px] rounded-full w-fit cursor-pointer">
            Qo'ngiroq qilish
          </button>
        </div>
      </div>
    </div>
  );
}
