import { useState } from 'react';
// import { FaPhone } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import bg from '../../assets/images/hero-bg.png';
import phone from '../../assets/logo/phone.svg';
import logobg from '../../assets/images/logo-bg.png';
import logo from '../../assets/logo/logo.png'

export default function LandingPage() {
  const [language, setLanguage] = useState('Uz');

  return (
    <div
      className="relative min-h-screen bg-center"
      style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: "100%" }}
    >
      <div className="container">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10  bg-transparent text-white">
          <ul className="hidden md:flex space-x-6">
            {[
              'Kompaniya haqida',
              'Loyihalar',
              'Yangiliklar',
              'Kontakt',
              'Vakansiyalar',
            ].map((item, index) => (
              <li key={index} className="hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <div  className="relative bg-center"  style={{ backgroundImage: `url(${logobg})`, backgroundRepeat: 'no-repeat',}}>
            <img src={logo} alt=""  />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center cursor-pointer">
              <span>{language}</span>
            </div>

            <a href="tel:+998911777222" className="flex items-center">
              <div className="w-[56px] h-[56px] rounded-full border flex items-center justify-center">
                <img src={phone} alt="phone icon" />
              </div>
              <span className="ml-[16px]">91 177 72 22</span>
            </a>

            <button
              style={{
                border: '1px solid',
                borderImageSource:
                  'linear-gradient(180deg, #EBB956 0%, #D7AC56 100%)',
              }}
              className="bg-[#D18202] text-[#fff] px-4 py-2 rounded-[48px] hover:bg-yellow-600"
            >
              Konsultatsiya olish
            </button>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center text-white text-center mt-20 px-5">
          <h1 style={{fontFamily: "Playfair Display"}} className="text-5xl font-bold">Qurilish kompaniyasi nomi</h1>
          <p className="text-lg mt-3">Qurilish Toshkent shahrida joylashgan</p>
          <button className="mt-5 bg-[#D18202] text-[#fff] px-6 py-3 rounded-[48px] hover:bg-yellow-600">
            Konsultatsiya olish
          </button>
        </div>
      </div>
    </div>
  );
}
