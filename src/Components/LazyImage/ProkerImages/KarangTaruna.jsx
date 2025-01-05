import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import krgtrna1 from "../../../assets/images/KegiatanImage/krgtrna (1).webp"
import krgtrna2 from "../../../assets/images/KegiatanImage/krgtrna (2).webp"
import krgtrna3 from "../../../assets/images/KegiatanImage/krgtrna (3).webp"
import krgtrna4 from "../../../assets/images/KegiatanImage/krgtrna (4).webp"
import krgtrna5 from "../../../assets/images/KegiatanImage/krgtrna (5).webp"
import krgtrna6 from "../../../assets/images/KegiatanImage/krgtrna (6).webp"
import krgtrna7 from "../../../assets/images/KegiatanImage/krgtrna (7).webp"
import krgtrna8 from "../../../assets/images/KegiatanImage/krgtrna (8).webp"
import krgtrna9 from "../../../assets/images/KegiatanImage/krgtrna (9).webp"
import krgtrna10 from "../../../assets/images/KegiatanImage/krgtrna (10).webp"
import krgtrna11 from "../../../assets/images/KegiatanImage/krgtrna (11).webp"
import krgtrna12 from "../../../assets/images/KegiatanImage/krgtrna (12).webp"
import krgtrna13 from "../../../assets/images/KegiatanImage/krgtrna (13).webp"
import krgtrna14 from "../../../assets/images/KegiatanImage/krgtrna (14).webp"
import krgtrna15 from "../../../assets/images/KegiatanImage/krgtrna (15).webp"
import krgtrna16 from "../../../assets/images/KegiatanImage/krgtrna (16).webp"
import krgtrna17 from "../../../assets/images/KegiatanImage/krgtrna (17).webp"
import krgtrna18 from "../../../assets/images/KegiatanImage/krgtrna (18).webp"
import krgtrna19 from "../../../assets/images/KegiatanImage/krgtrna (19).webp"
import krgtrna20 from "../../../assets/images/KegiatanImage/krgtrna (20).webp"
import krgtrna21 from "../../../assets/images/KegiatanImage/krgtrna (21).webp"


const images = [
  { id: 1, src: krgtrna1, alt: 'krgtrna' },
  { id: 2, src: krgtrna2, alt: 'krgtrna' },
  { id: 3, src: krgtrna3, alt: 'krgtrna' },
  { id: 4, src: krgtrna4, alt: 'krgtrna' },
  { id: 5, src: krgtrna5, alt: 'krgtrna' },
  { id: 6, src: krgtrna6, alt: 'krgtrna' },
  { id: 7, src: krgtrna7, alt: 'krgtrna' },
  { id: 8, src: krgtrna8, alt: 'krgtrna' },
  { id: 9, src: krgtrna9, alt: 'krgtrna' },
  { id: 10, src: krgtrna10, alt: 'krgtrna' },
  { id: 11, src: krgtrna11, alt: 'krgtrna' },
  { id: 12, src: krgtrna12, alt: 'krgtrna' },
  { id: 13, src: krgtrna13, alt: 'krgtrna' },
  { id: 14, src: krgtrna14, alt: 'krgtrna' },
  { id: 15, src: krgtrna15, alt: 'krgtrna' },
  { id: 16, src: krgtrna16, alt: 'krgtrna' },
  { id: 17, src: krgtrna17, alt: 'krgtrna' },
  { id: 18, src: krgtrna18, alt: 'krgtrna' },
  { id: 19, src: krgtrna19, alt: 'krgtrna' },
  { id: 20, src: krgtrna20, alt: 'krgtrna' },
  { id: 21, src: krgtrna21, alt: 'krgtrna' },
];

const KarangTaruna = () => {
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

export default KarangTaruna;