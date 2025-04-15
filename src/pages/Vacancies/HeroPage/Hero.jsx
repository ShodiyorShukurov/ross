import React, { useRef, useState } from 'react';
import bg1 from '../../../assets/nurafshon/Q6D.jpg';
import phone from '../../../assets/logo/phone.svg';
import logobg from '../../../assets/images/logo-bg.png';
import logo from '../../../assets/logo/ross.png';
import burgerMenu from '../../../assets/logo/burgerMenu.svg';
import close from '../../../assets/logo/close.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const savedLang = localStorage.getItem('lng') || 'uz';
  const [language, setLanguage] = useState(savedLang.toUpperCase());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  React.useEffect(() => {
    i18n.changeLanguage(savedLang);
  }, [savedLang, i18n]);

  const changeValues = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    setLanguage(lng.toUpperCase());
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        showMobileMenu
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileMenu, isDropdownOpen]);

  const scrollToProjects = (arg) => {
    if (arg == t('navbar.nav4')) {
      navigate('/');
      setTimeout(() => {
        const projectsSection = document.getElementById('contact');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate('/');
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setShowMobileMenu(false);
  };

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
          <button
            className="flex 2xl:hidden gap-2.5 text-[16px] font-medium cursor-pointer"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <img src={burgerMenu} alt="burgerMenu" />
            MENU
          </button>

          <ul
            style={{ fontFamily: 'SF Pro Display Medium' }}
            className="hidden 2xl:flex space-x-6 font-medium text-[18px]"
          >
            <li className="hover:text-gray-300 cursor-pointer">
              <NavLink to="/">{t('navbar.nav1')}</NavLink>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <span onClick={() => scrollToProjects(t('navbar.nav2'))}>
                {t('navbar.nav2')}
              </span>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <NavLink to="/news">{t('navbar.nav3')}</NavLink>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <span onClick={() => scrollToProjects(t('navbar.nav4'))}>
                {t('navbar.nav4')}
              </span>
            </li>
            <NavLink to="/vacancies">{t('navbar.nav5')}</NavLink>
          </ul>

          <a
            href="/"
            className="relative w-[70px] sm:w-[100px] h-[80px] sm:h-[100px]"
          >
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
          </a>

          <div className="flex items-center 2xl:gap-[40px]">
            <div className="flex items-center 2xl:space-x-4">
              <a
                href="tel:+998 99 986 70 07"
                className="hidden 2xl:flex items-center font-medium text-[16px] sm:text-[18px]"
              >
                <div className="w-[50px] h-[50px] rounded-full border-[2px] flex items-center justify-center">
                  <img
                    className="w-[22px] h-[22px]"
                    src={phone}
                    alt="phone icon"
                  />
                </div>
                <span
                  style={{ fontFamily: 'SF Pro Display Medium' }}
                  className="ml-[12px]"
                >
                  99 986 70 07
                </span>
              </a>
              <button className="hidden 2xl:block bg-[#D18202] text-[#fff] text-[18px] px-[30px] py-[10px] rounded-[48px] hover:bg-yellow-600 cursor-pointer">
                {t('navbar.nav_button')}
              </button>
            </div>

            <div className="relative z-50">
              <button
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="flex text-[16px] md:text-[18px] leading-[29px] font-medium items-center gap-[9px] cursor-pointer transition-all duration-700 border border-[#FFFFFF33] px-[10px] md:px-[14px] py-[5px] rounded-[48px] text-white"
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

        {/* MOBILE MUNE */}
        {showMobileMenu && (
          <nav
            ref={mobileMenuRef}
            className="fixed top-0 left-0 block 2xl:hidden bg-[#141414] w-full h-full z-50 px-4 sm:px-6 overflow-auto pb-[20px]"
          >
            <button
              className="absolute top-4 left-4 cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            >
              <img src={close} alt="close" />
            </button>

            <div className="relative w-[70px] sm:w-[100px] h-[80px] sm:h-[100px] mx-auto">
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

            <ul className="flex flex-col items-center justify-center space-y-6 mt-[50px] md:mt-[100px] text-[20px] font-semibold text-white ">
              <li className="w-full text-center">
                <NavLink to="/" onClick={() => setShowMobileMenu(false)}>
                  {t('navbar.nav1')}
                </NavLink>
              </li>
              <li className="w-full text-center">
                <span
                  onClick={() => {
                    scrollToProjects(t('navbar.nav2'));
                    setShowMobileMenu(false);
                  }}
                >
                  {t('navbar.nav2')}
                </span>
              </li>
              <li className="w-full text-center">
                <NavLink to="/news" onClick={() => setShowMobileMenu(false)}>
                  {t('navbar.nav3')}
                </NavLink>
              </li>
              <li className="w-full text-center">
                <span
                  onClick={() => {
                    scrollToProjects(t('navbar.nav4'));
                    setShowMobileMenu(false);
                  }}
                >
                  {t('navbar.nav4')}
                </span>
              </li>
              <li className="w-full text-center">
                <NavLink
                  to="/vacancies"
                  onClick={() => setShowMobileMenu(false)}
                >
                  {t('navbar.nav5')}
                </NavLink>
              </li>
            </ul>

            <button className="bg-[#D18202] text-[#fff] text-[18px] px-[30px] py-[10px] rounded-[48px] hover:bg-yellow-600 cursor-pointer mx-auto block mt-[32px]">
              {t('navbar.nav_button')}
            </button>

            <p className="text-[#FFFFFFB2] text-[18px] mt-[38px] text-center">
              {t('footer.location')}
            </p>

            <h5 className="text-[#AAAAAA] text-[18px] mt-[16px] text-center uppercase">
              {t('footer.call_center')}
            </h5>

            <a
              href="tel:+998 99 986 70 07"
              className="text-[#D18202] text-[24px] font-bold text-center block cursor-pointer mt-[6px]"
            >
              +998 99 986 70 07
            </a>

            <a
              href="mailto:raigroup@gmail.com"
              className="text-[#FFFFFFB2] text-[20px] font-medium text-center block cursor-pointer mt-[16px]"
            >
              raigroup@gmail.com
            </a>

            <div
              style={{ fontFamily: 'SF Pro Medium' }}
              className="flex  gap-4 mt-[16px] text-[#FFFFFFB2] items-center justify-center"
            >
              <a
                className="flex gap-[10px] items-center hover:text-[#D18202] transition-all duration-300"
                href="https://www.instagram.com/rossfoundationuz?igsh=MWZrZXpodHZuaXM3cg%3D%3D&utm_source=qr"
                target="blanck"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M7.6854 0.833984C8.43567 0.835224 8.81586 0.839198 9.1444 0.848978L9.2738 0.853204C9.42326 0.858518 9.57073 0.865184 9.74853 0.873518C10.4579 0.906298 10.9419 1.01852 11.3669 1.18352C11.8063 1.35296 12.1774 1.58185 12.5479 1.95241C12.9179 2.32296 13.1469 2.69518 13.3169 3.13352C13.4813 3.55796 13.5935 4.04241 13.6269 4.75185C13.6348 4.92963 13.6412 5.0771 13.6465 5.22659L13.6507 5.35598C13.6604 5.68448 13.6649 6.06474 13.6663 6.81503L13.6668 7.3121C13.6669 7.37283 13.6669 7.4355 13.6669 7.50016L13.6668 7.68823L13.6664 8.18536C13.6651 8.93563 13.6612 9.3159 13.6514 9.64436L13.6471 9.77376C13.6419 9.9233 13.6352 10.0708 13.6269 10.2485C13.5941 10.958 13.4813 11.4418 13.3169 11.8668C13.1474 12.3063 12.9179 12.6774 12.5479 13.048C12.1774 13.418 11.8046 13.6468 11.3669 13.8168C10.9419 13.9813 10.4579 14.0935 9.74853 14.1268C9.57073 14.1348 9.42326 14.1412 9.2738 14.1464L9.1444 14.1506C8.81586 14.1604 8.43567 14.1648 7.6854 14.1663L7.18826 14.1668C7.12753 14.1668 7.06487 14.1668 7.0002 14.1668H6.81213L6.315 14.1664C5.56473 14.1652 5.18448 14.1612 4.85598 14.1514L4.72659 14.1472C4.57709 14.1418 4.42962 14.1352 4.25185 14.1268C3.5424 14.0941 3.05907 13.9813 2.63352 13.8168C2.19462 13.6474 1.82296 13.418 1.4524 13.048C1.08185 12.6774 0.853518 12.3046 0.683518 11.8668C0.518518 11.4418 0.406851 10.958 0.373518 10.2485C0.365598 10.0708 0.359138 9.9233 0.353904 9.77376L0.349711 9.64436C0.339958 9.3159 0.335511 8.93563 0.334071 8.18536L0.333984 6.81503C0.335224 6.06474 0.339191 5.68448 0.348971 5.35598L0.353204 5.22659C0.358518 5.0771 0.365184 4.92963 0.373518 4.75185C0.406291 4.04185 0.518518 3.55852 0.683518 3.13352C0.852958 2.69463 1.08185 2.32296 1.4524 1.95241C1.82296 1.58185 2.19518 1.35352 2.63352 1.18352C3.05852 1.01852 3.54185 0.906851 4.25185 0.873518C4.42962 0.865604 4.57709 0.859144 4.72659 0.853911L4.85598 0.849718C5.18448 0.839958 5.56473 0.835511 6.315 0.834071L7.6854 0.833984ZM7.0002 4.16685C5.15825 4.16685 3.66685 5.65987 3.66685 7.50016C3.66685 9.3421 5.15987 10.8335 7.0002 10.8335C8.84213 10.8335 10.3335 9.3405 10.3335 7.50016C10.3335 5.65825 8.84047 4.16685 7.0002 4.16685ZM7.0002 5.50018C8.1048 5.50018 9.0002 6.3953 9.0002 7.50016C9.0002 8.60476 8.10507 9.50016 7.0002 9.50016C5.8956 9.50016 5.00019 8.6051 5.00019 7.50016C5.00019 6.39556 5.89527 5.50018 7.0002 5.50018ZM10.5002 3.16685C10.0407 3.16685 9.66686 3.54012 9.66686 3.99962C9.66686 4.45912 10.0401 4.83296 10.5002 4.83296C10.9597 4.83296 11.3335 4.4597 11.3335 3.99962C11.3335 3.54012 10.9591 3.16628 10.5002 3.16685Z"
                    fill="currentColor"
                  />
                </svg>
                Instagram
              </a>
              <a
                className="flex gap-[10px] items-center hover:text-[#D18202] transition-all duration-300"
                href="https://t.me/rossfoundation"
                target="blanck"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M11.3962 5.26396C11.7916 5.12049 11.9879 5.06886 12.0966 5.05039C12.0974 5.08516 12.0966 5.11335 12.0948 5.13184C11.9397 6.76112 11.2604 10.7695 10.9115 12.6347C10.8298 13.0715 10.7671 13.2795 10.3453 13.0317C10.0676 12.8685 9.81633 12.6631 9.54713 12.4867C8.66406 11.9077 7.4 11.0456 7.5038 11.0975C6.63441 10.5245 6.99833 10.1737 7.48366 9.70587C7.56226 9.63014 7.644 9.55134 7.7242 9.46801C7.76 9.43081 7.93513 9.26794 8.18207 9.03841C8.97413 8.30201 10.5047 6.87903 10.5434 6.71435C10.5497 6.68734 10.5556 6.58664 10.4957 6.53346C10.4359 6.48029 10.3477 6.49847 10.2839 6.51293C10.1936 6.53343 8.75506 7.48427 5.96828 9.36541C5.55996 9.64581 5.19011 9.78247 4.85874 9.77527L4.8617 9.77674C4.4252 9.62281 3.98993 9.49027 3.55236 9.35701C3.2649 9.26941 2.97646 9.18154 2.68602 9.08714C2.61499 9.06407 2.54568 9.04214 2.48055 9.02167C5.49854 7.70694 7.50867 6.84129 8.51593 6.42234C9.97893 5.81383 10.8467 5.46335 11.3962 5.26396ZM13.0113 3.97838C12.8423 3.8413 12.6567 3.77839 12.5277 3.74757C12.3945 3.71575 12.2679 3.70551 12.1719 3.70721C11.8543 3.7128 11.5131 3.80313 10.9414 4.01059C10.3582 4.22222 9.462 4.58476 8.00387 5.19125C6.97586 5.61883 4.92925 6.50044 1.8691 7.83367C1.6003 7.94114 1.3539 8.06307 1.15922 8.20761C0.979458 8.34114 0.727818 8.58001 0.681785 8.94727C0.647011 9.22461 0.727878 9.48061 0.891878 9.68221C1.03465 9.85767 1.21756 9.96427 1.35686 10.0317C1.56363 10.1319 1.84184 10.2191 2.08634 10.2957C2.46842 10.4155 2.84962 10.5378 3.23252 10.655C4.41794 11.0179 5.39377 11.3165 6.46746 12.0241C7.255 12.5431 8.02733 13.0847 8.8162 13.6017C9.10393 13.7903 9.37286 14.0068 9.66993 14.1813C9.9944 14.3719 10.4069 14.5458 10.9091 14.4995C11.6679 14.4297 12.0627 13.7316 12.2221 12.8799C12.5701 11.0194 13.2606 6.95535 13.4221 5.25817C13.4432 5.03663 13.4185 4.78834 13.398 4.66846C13.3769 4.54501 13.3123 4.22266 13.0113 3.97838Z"
                    fill="currentColor"
                  />
                </svg>
                Telegram
              </a>
              <a
                className="flex gap-[10px] items-center hover:text-[#D18202] transition-all duration-300"
                href="https://www.facebook.com/share/1BTz2u8aVD/?mibextid=wwXIfr"
                target="blanck"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M8.66733 13.7917C11.2982 13.4637 13.334 11.2194 13.334 8.49967C13.334 5.55415 10.9462 3.16634 8.00067 3.16634C5.05513 3.16634 2.66732 5.55415 2.66732 8.49967C2.66732 11.2194 4.70311 13.4637 7.334 13.7917V9.83301H6.00065V8.49967H7.334V7.39687C7.334 6.50537 7.4268 6.18209 7.60113 5.85616C7.7754 5.53023 8.0312 5.27445 8.35713 5.10014C8.61226 4.9637 8.92873 4.88135 9.4818 4.84603C9.70126 4.83201 9.9854 4.84989 10.334 4.89967V6.16634H10.0007C9.38913 6.16634 9.1368 6.19522 8.98593 6.27589C8.8924 6.32593 8.82693 6.39139 8.77686 6.48496C8.6962 6.63579 8.66733 6.78536 8.66733 7.39687V8.49967H10.334L10.0007 9.83301H8.66733V13.7917ZM8.00067 15.1663C4.31875 15.1663 1.33398 12.1815 1.33398 8.49967C1.33398 4.81777 4.31875 1.83301 8.00067 1.83301C11.6825 1.83301 14.6673 4.81777 14.6673 8.49967C14.6673 12.1815 11.6825 15.1663 8.00067 15.1663Z"
                    fill="currentColor"
                  />
                </svg>
                Facebook
              </a>
            </div>
          </nav>
        )}
        <div className="absolute flex flex-col text-center items-center text-[#fff] left-1/2 transform -translate-x-1/2 bottom-20 w-[100%]">
          <h1
            className="text-[40px] md:text-[60px] leading-[53px ] md:leading-[70px] font-bold w-[100%] lg:max-w-[700px]"
            style={{ fontFamily: 'Playfair Display Bold' }}
          >
            {t('vacancies_hero.title')}
          </h1>
          <p className="text-[20px] mt-[13px] w-full max-w-[300px]">
            {t('vacancies_hero.subtitle')}
          </p>
          <a
            className="mt-5 bg-[#D18202] text-white py-[10px] px-[50px] rounded-[48px] w-fit cursor-pointer text-[18px]"
            href="#vacansies"
          >
            {t('vacancies_hero.button_text')}
          </a>
        </div>
      </div>
    </div>
  );
}
