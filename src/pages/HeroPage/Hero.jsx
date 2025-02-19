import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import bg1 from "../../assets/images/hero-bg.png";
import bg2 from "../../assets/images/hero-bg.png";
import bg3 from "../../assets/images/about-bg.png";
import phone from "../../assets/logo/phone.svg";
import logobg from "../../assets/images/logo-bg.png";
import logo from "../../assets/logo/logo.png";

export default function LandingPage() {
  const [backgrounds] = useState([bg1, bg2, bg3]);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  return (
    <div
      className="relative min-h-screen bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${backgrounds[activeIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 bg-transparent text-white">
          <ul className="hidden md:flex space-x-6">
            {["Kompaniya haqida", "Loyihalar", "Yangiliklar", "Kontakt", "Vakansiyalar"].map(
              (item, index) => (
                <li key={index} className="hover:text-gray-300 cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
          <div
            className="relative bg-center"
            style={{
              backgroundImage: `url(${logobg})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <span>Uz</span>
            <a href="tel:+998911777222" className="flex items-center">
              <div className="w-[56px] h-[56px] rounded-full border flex items-center justify-center">
                <img src={phone} alt="phone icon" />
              </div>
              <span className="ml-[16px]">91 177 72 22</span>
            </a>
            <button className="bg-[#D18202] text-[#fff] px-4 py-2 rounded-[48px] hover:bg-yellow-600">
              Konsultatsiya olish
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-white text-center mt-20 px-5">
          <h1 style={{ fontFamily: "Playfair Display" }} className="text-5xl font-bold">
            Qurilish kompaniyasi nomi
          </h1>
          <p className="text-lg mt-3">Qurilish Toshkent shahrida joylashgan</p>
          <button className="mt-5 bg-[#D18202] text-[#fff] px-6 py-3 rounded-[48px] hover:bg-yellow-600">
            Konsultatsiya olish
          </button>
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-80"
        >
          {/* <IoIosArrowBack size={30} /> */}
          1
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-80"
        >
          {/* <IoIosArrowForward size={30} /> */}
          2
        </button>

        {/* Custom Pagination */}
        <div className="flex justify-center space-x-2 mt-10">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-5 h-5 border-2 border-[#D18202] rounded-full ${
                activeIndex === index ? "bg-[#D18202]" : "bg-transparent"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
