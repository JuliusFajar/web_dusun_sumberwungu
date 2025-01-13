import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import pemasaran1 from "../../../assets/images/KegiatanImage/pemasaran (1).webp"
import pemasaran2 from "../../../assets/images/KegiatanImage/pemasaran (2).webp"
import pemasaran3 from "../../../assets/images/KegiatanImage/pemasaran (3).webp"
import pemasaran4 from "../../../assets/images/KegiatanImage/pemasaran (4).webp"
import pemasaran5 from "../../../assets/images/KegiatanImage/pemasaran (5).webp"
import pemasaran6 from "../../../assets/images/KegiatanImage/pemasaran (6).webp"

const images = [
  { id: 1, src: pemasaran1, alt: 'pemasaran' },
  { id: 2, src: pemasaran2, alt: 'pemasaran' }, 
  { id: 3, src: pemasaran3, alt: 'pemasaran' },
  { id: 4, src: pemasaran4, alt: 'pemasaran' },
  { id: 5, src: pemasaran5, alt: 'pemasaran' }, 
  { id: 6, src: pemasaran6, alt: 'pemasaran' },  
];

const Pemasaran = () => {
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

export default Pemasaran;