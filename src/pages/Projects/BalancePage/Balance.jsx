import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const images = [
  "https://placehold.co/800x500",
  "https://placehold.co/400x250",
  "https://placehold.co/400x250",
  "https://placehold.co/400x250",
  "https://placehold.co/800x500",
  "https://placehold.co/800x500",
  "https://placehold.co/800x500",
];

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Modal yopilganda thumbsSwiper-ni reset qilish
  useEffect(() => {
    if (!isOpen) {
      setThumbsSwiper(null);
    }
  }, [isOpen]);

  return (
    <section>
      <div className="container">
        <h2
          style={{ fontFamily: "Playfair Display Bold" }}
          className="text-[50px] font-bold text-[#D18202] leading-[100px]"
        >
          Balance
        </h2>
        <p className="text-[20px] font-light mb-6 w-full max-w-[1000px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>

        {/* Gallery Images */}
        <div className="grid grid-cols-3 gap-4">
          <motion.div className="col-span-2 h-[500px]">
            <img
              src={images[0]}
              alt="Main Image"
              className="w-full h-full rounded-xl object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.img
              src={images[1]}
              alt="Thumbnail 1"
              className="w-full h-[250px] rounded-xl object-cover"
            />

            <motion.div
              className="relative w-full rounded-xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={images[3]}
                alt="More Images"
                className="w-full h-full rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center rounded-xl">
                <span className="text-white text-xl font-semibold">+12</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-transparent rounded-lg max-w-[90%] max-h-[90vh] relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white text-3xl cursor-pointer z-50"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>

                {/* Main Swiper */}
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} 
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="w-full h-[70vh] flex items-center justify-center"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        className="w-full h-full max-h-[65vh] object-contain"
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
                  slidesPerView={10}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="w-full mt-4"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index} className="w-20 h-20">
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
