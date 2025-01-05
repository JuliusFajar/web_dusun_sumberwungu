import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import menabung1 from "../../../assets/images/KegiatanImage/menabung (1).webp"
import menabung2 from "../../../assets/images/KegiatanImage/menabung (2).webp"
import menabung3 from "../../../assets/images/KegiatanImage/menabung (3).webp"
import menabung4 from "../../../assets/images/KegiatanImage/menabung (4).webp"
import menabung5 from "../../../assets/images/KegiatanImage/menabung (5).webp"
import menabung6 from "../../../assets/images/KegiatanImage/menabung (6).webp"
import menabung7 from "../../../assets/images/KegiatanImage/menabung (7).webp"
import menabung8 from "../../../assets/images/KegiatanImage/menabung (8).webp"
import menabung9 from "../../../assets/images/KegiatanImage/menabung (9).webp"

const images = [
  { id: 1, src: menabung1, alt: 'menabung' },
  { id: 2, src: menabung2, alt: 'menabung' }, 
  { id: 3, src: menabung3, alt: 'menabung' },
  { id: 4, src: menabung4, alt: 'menabung' },
  { id: 5, src: menabung5, alt: 'menabung' },
  { id: 6, src: menabung6, alt: 'menabung' },
  { id: 7, src: menabung7, alt: 'menabung' },
  { id: 8, src: menabung8, alt: 'menabung' },
  { id: 9, src: menabung9, alt: 'menabung' },
];

const Menabung = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullscreenImage(src); // Open the clicked image in fullscreen
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null); // Close fullscreen
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              className="border border-gray-300 dark:border-gray-700 rounded-lg w-full h-auto object-cover aspect-[16/9] cursor-pointer"
              onClick={() => handleImageClick(image.src)} // Handle fullscreen
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" // Very high z-index
          onClick={handleCloseFullscreen} // Close fullscreen on click
        >
          <img
            src={fullscreenImage}
            alt="Full screen"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Menabung;