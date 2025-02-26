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
    <section className="py-12 md:py-[50px]">
      <div className="container mx-auto px-4">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-3xl md:text-[50px] font-bold text-[#D18202] leading-tight md:leading-[100px]"
        >
          {module?.image_page.title}
        </h2>
        <p
          style={{ fontFamily: 'SF Pro Display Light' }}
          className="text-base md:text-[20px] mb-6 max-w-full md:max-w-[850px]"
        >
         {module?.image_page.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="md:col-span-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={module?.image_page.images[0]}
              alt="Main Image"
              className="w-full h-auto max-h-[650px] rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <img
              src={module?.image_page.images[1]}
              alt="Thumbnail 1"
              className="w-full h-auto max-h-[320px] rounded-xl cursor-pointer object-cover"
              onClick={() => setIsOpen(true)}
            />

            <div
              className="relative w-full rounded-xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={module?.image_page.images[2]}
                alt="More Images"
                className="w-full h-auto max-h-[320px] rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center rounded-xl">
                <span className="text-white text-lg md:text-xl font-semibold">
                  +{module?.image_page.images.slice(3).length}
                </span>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-transparent rounded-lg w-full max-w-[90vw] max-h-[90vh] relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  className="absolute top-4 right-4 text-white text-2xl md:text-3xl cursor-pointer z-50"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>

                {/* Main Swiper */}
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
                  className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center"
                >
                  {module?.image_page.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        className="w-full h-full max-h-[60vh] md:max-h-[65vh] object-contain"
                        alt={`Slide ${index}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnail Swiper */}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="w-full mt-4"
                  breakpoints={{
                    640: { slidesPerView: 6 },
                    768: { slidesPerView: 8 },
                    1024: { slidesPerView: 10 },
                  }}
                >
                  {module?.image_page.images.map((img, index) => (
                    <SwiperSlide
                      key={index}
                      className="aspect-square w-16 h-16 md:w-20 md:h-20"
                    >
                      <img
                        src={img}
                        className="w-full max-h-full object-cover rounded-md cursor-pointer"
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
