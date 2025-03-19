import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const GallerySection = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setThumbsSwiper(null);
    }
  }, [isOpen]);

  return (
    <section className="pt-12 md:pt-[50px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[32px] md:text-[50px] font-bold text-[#D18202] leading-tight md:leading-[100px]"
        >
          {module?.image_page.title}
        </h2>
        <p
          style={{ fontFamily: 'SF Pro Display Light' }}
          className="text-base md:text-[20px] mb-6 max-w-full md:max-w-[850px]"
        >
          {module?.image_page.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          <div
            className="md:col-span-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={module?.image_page.images[0]}
              alt="Main Image"
              className="w-full h-auto max-h-[30vh] md:max-h-[71vh] rounded-xl object-cover"
            />
          </div>

          {/* Qo‘shimcha rasmlar */}
          {module?.image_page.images.length > 1 ? (
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              <img
                src={module?.image_page.images[1]}
                alt="Thumbnail 1"
                className="w-1/2 md:w-full h-auto max-h-[25vh] md:max-h-[35vh] rounded-xl cursor-pointer object-cover"
                onClick={() => setIsOpen(true)}
              />
              <div
                className="w-1/2 md:w-full relative rounded-xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <img
                  src={module?.image_page.images[2]}
                  alt="More Images"
                  className="w-full h-auto max-h-[25vh] md:max-h-[35vh] rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center rounded-xl">
                  <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
                    +{module?.image_page.images.slice(3).length}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        {/* Modal oynasi */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-transparent rounded-lg w-full max-w-[95vw] md:max-w-[90vw] max-h-[90vh] relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                {/* Yopish tugmasi */}
                <button
                  className="absolute top-2 right-2 text-white text-xl sm:text-2xl md:text-3xl cursor-pointer z-50"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>

                {/* Asosiy Swiper */}
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center"
                >
                  {module?.image_page.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        className="w-full h-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] object-contain"
                        alt={`Slide ${index}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Miniatyura Swiper */}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="w-full mt-2 sm:mt-4"
                  breakpoints={{
                    0: { slidesPerView: 3 },
                    640: { slidesPerView: 6 },
                    768: { slidesPerView: 8 },
                    1024: { slidesPerView: 10 },
                  }}
                >
                  {module?.image_page.images.map((img, index) => (
                    <SwiperSlide
                      key={index}
                      className="aspect-square w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover rounded-md cursor-pointer"
                        alt={`Thumbnail ${index}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
