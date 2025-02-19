import React from 'react';
import projectImg1 from '../../assets/images/projects-img1.png';
import projectImg2 from '../../assets/images/projects-img2.png';
import location from '../../assets/logo/location.svg';
import buttonIcon from '../../assets/logo/right.svg';

const Project = () => {
  const [selectedButton, setSelectedButton] = React.useState('all');

  const buttons = [
    { label: 'Barchasi', type: 'all' },
    { label: 'Qurilishi yakunlangan', type: 'done' },
    { label: 'Qurilish jarayonida', type: 'isHold' },
  ];

  const projects = [
    {
      id: 1,
      title: "YUNUSOBOD YANGI MO'JIZA",
      location: 'Yunusobod t. Yettichinor koʻchasi',
      bgImg: projectImg1,
      type: 'done',
    },
    {
      id: 2,
      title: 'Qoyliq yangi mavze',
      location: 'Qo’yliq t. Farobiy koʻchasi',
      bgImg: projectImg2,
      type: 'isHold',
    },
  ];

  const filtredArr =
    selectedButton == 'all'
      ? projects
      : projects.filter((arr) => arr.type == selectedButton);

  return (
    <section className="bg-[#C4A0581F] pt-[50px] pb-[150px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Black' }}
          className="text-[#D18202] font-bold text-[36px] leading-[48px]"
        >
          Toshkentdagi Bizning qurib bitkazilgam majmualarimiz
        </h2>
        <p className="font-light text-[24px] leading-[28px] tracking-[0px] w-full max-w-[1300px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English
        </p>

        <ul className="flex space-x-4 mb-6 mt-[40px] bg-[#fff] p-[3px] rounded-[48px] w-fit">
          {buttons.map((btn) => (
            <li key={btn.label} className="cursor-pointer">
              <button
                style={{
                  border: '1px solid',
                  borderImageSource:
                    'linear-gradient(180deg, #EBB956 0%, #D7AC56 100%)',
                }}
                key={btn.label}
                className={`text-[16px] px-4 py-2 rounded-[48px] transition-colors duration-200 cursor-pointer ${
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
        <div className="grid md:grid-cols-2 gap-6">
          {filtredArr?.map((item) => (
            <div
              key={item.id}
              className="relative bg-cover bg-center rounded-lg overflow-hidden  h-auto"
              style={{
                backgroundImage: `url(${item.bgImg})`,
                height: '575px',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-auto pl-[32px] pb-[32px] text-white">
                <h3 className="text-[36px] font-semibold leading-[48px]">
                  {item?.title.toUpperCase()}
                </h3>
                <p className="text-[18px] mt-[16px] leading-[22px] font-normal flex items-center">
                  <span className="mr-[8px]">
                    <img
                      src={location}
                      alt="location icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  {item.location}
                </p>
                <button className="bg-[#D18202] text-[18px] leading-[26px] pl-[30px] py-[2px] pr-[2px] rounded-[48px] mt-[24px] flex items-center">
                  Narxini bilish
                  <span className="w-[46px] h-[46px] bg-white rounded-full flex justify-center items-center ml-[20px]">
                    <img
                      src={buttonIcon}
                      alt="buttonIcon"
                      width={20}
                      height={20}
                    />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
