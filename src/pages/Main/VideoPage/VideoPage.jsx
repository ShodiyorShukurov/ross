import React from 'react';
import videobg from '../../../assets/images/doneProject.png';

const VideoPage = () => {
  return (
    <section className="pt-[120px] relative">
      {/* Background Image */}
      <img
        src={videobg}
        alt="background img"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="container relative z-10">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[56px] leading-[67px] w-full max-w-[700px] text-center mx-auto"
        >
          Bizning qurib bitkazilgan majmualarimiz haqida
        </h2>
        <p className="text-center text-[24px] leading-[29px] w-full max-w-[810px] mx-auto mt-[16px]">
          Toshkentdagi birinchi 35000 metr kvadratli turar joy majmuamizning
          ochilish marosimi biz va mijozlarimiz uchun yorqin voqea bo’lib qoldi 
        </p>

        <iframe
          className="mt-[65px] mx-auto w-full"
          width="914"
          height="660"
          src="https://www.youtube.com/embed/2h03zPELyL0"
          title="Hamma muammolaringizni umumiy bir jihati bor | Iqtibos podcast #37"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoPage;
