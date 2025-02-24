import React from 'react';
import vacanciesImg from '../../../assets/images/vakansiya_img.png';

const jobListings = [
  {
    title: 'Bosh xisobchi',
    category: 'Buhgalteriya, Hisob-kitob',
    format: 'Ofisda ishlash',
  },
  {
    title: 'Injiner arxitektor',
    category: 'Dizayn, mahsulot va arxitektura boshqaruvi',
    format: 'Ofisda ishlash',
  },
  {
    title: 'Interier Dizayner',
    category: 'Dizayn, mahsulot va arxitektura boshqaruvi',
    format: 'Ofisda ishlash',
  },
  {
    title: 'Exterier Dizayner',
    category: 'Dizayn, mahsulot va arxitektura boshqaruvi',
    format: 'Remote',
  },
];

const Vacancies = () => {
  return (
    <section className="py-[100px]">
      <div className="container mb-[100px]">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[50px] font-bold text-[#D18202] mb-6 leading-[]"
        >
          Karyerangizni biz bilan boshlang
        </h2>

        <div style={{ fontFamily: 'SF Pro Display Medium' }} className="grid grid-cols-4 pl-[px] text-[20px] leading-[28px] mb-[10px]">
          <h5>Vakansiyalar</h5>
          <h5 className="ml-[11px]">Yo’nalish</h5>
          <h5 className="ml-[1px]">Ish formati</h5>
          <span></span>
        </div>

        {jobListings.map((job, index) => (
          <div
            key={index}
            className="grid grid-cols-4 p-[30px] rounded-[12px] mb-[10px] items-center bg-white"
          >
            <h5 style={{ fontFamily: 'SF Pro Display Semibold' }}  className="text-[20px] leading-[28px]">
              {job.title}
            </h5>
            <p style={{ fontFamily: 'SF Pro Display Medium' }} className="text-[16px] leading-[21px]">
              {job.category}
            </p>
            <p style={{ fontFamily: 'SF Pro Display Medium' }} className="text-[16px] leading-[21px]">
              {job.format}
            </p>
            <button className="bg-[#D18202] text-white py-[10px] px-[30px] rounded-[48px] text-[18px] w-fit mx-auto cursor-pointer">
              Ariza topshirish
            </button>
          </div>
        ))}
      </div>

      <img src={vacanciesImg} alt="img" />
    </section>
  );
};

export default Vacancies;
