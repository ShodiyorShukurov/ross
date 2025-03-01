import React from 'react';
import videobg from '../../../assets/images/doneProject.png';
import { useTranslation } from 'react-i18next';

const VideoPage = () => {
const {t} = useTranslation()

  return (
    <section className="pt-[40px] sm:pt-[80px] md:pt-[120px] relative">
      <img
        src={videobg}
        alt="background img"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="container relative z-10">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[32px] sm:text-[56px] leading-[42px] sm:leading-[67px] w-full max-w-[700px] text-center mx-auto"
        >
          {t('video_page.title')}
        </h2>
        <p style={{ fontFamily: 'SF Pro Display Light' }}  className="text-center text-[16px] sm:text-[24px] leading-[19px] sm:leading-[29px] w-full sm:max-w-[810px] mx-auto mt-[10px] sm:mt-[16px]">
        {t('video_page.subtitle')}
        </p>

        <iframe
          className="mt-[25px] sm:mt-[65px] mx-auto w-full rounded-[16px]"
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
