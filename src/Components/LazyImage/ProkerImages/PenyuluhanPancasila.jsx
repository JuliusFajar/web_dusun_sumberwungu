import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import penyuluhan1 from "../../../assets/images/KegiatanImage/penyuluhan (1).webp"
import penyuluhan2 from "../../../assets/images/KegiatanImage/penyuluhan (2).webp"
import penyuluhan3 from "../../../assets/images/KegiatanImage/penyuluhan (3).webp"
import penyuluhan4 from "../../../assets/images/KegiatanImage/penyuluhan (4).webp"
import penyuluhan5 from "../../../assets/images/KegiatanImage/penyuluhan (5).webp"
import penyuluhan6 from "../../../assets/images/KegiatanImage/penyuluhan (6).webp"
import penyuluhan7 from "../../../assets/images/KegiatanImage/penyuluhan (7).webp"
import penyuluhan8 from "../../../assets/images/KegiatanImage/penyuluhan (8).webp"
import penyuluhan9 from "../../../assets/images/KegiatanImage/penyuluhan (9).webp"
import penyuluhan10 from "../../../assets/images/KegiatanImage/penyuluhan (10).webp"
import penyuluhan11 from "../../../assets/images/KegiatanImage/penyuluhan (11).webp"
import penyuluhan12 from "../../../assets/images/KegiatanImage/penyuluhan (12).webp"
import penyuluhan13 from "../../../assets/images/KegiatanImage/penyuluhan (13).webp"
import penyuluhan14 from "../../../assets/images/KegiatanImage/penyuluhan (14).webp"
import penyuluhan15 from "../../../assets/images/KegiatanImage/penyuluhan (15).webp"
import penyuluhan16 from "../../../assets/images/KegiatanImage/penyuluhan (16).webp"
import penyuluhan17 from "../../../assets/images/KegiatanImage/penyuluhan (17).webp"
import penyuluhan18 from "../../../assets/images/KegiatanImage/penyuluhan (18).webp"
import penyuluhan19 from "../../../assets/images/KegiatanImage/penyuluhan (19).webp"
import penyuluhan20 from "../../../assets/images/KegiatanImage/penyuluhan (20).webp"
import penyuluhan21 from "../../../assets/images/KegiatanImage/penyuluhan (21).webp"
import penyuluhan22 from "../../../assets/images/KegiatanImage/penyuluhan (22).webp"
import penyuluhan23 from "../../../assets/images/KegiatanImage/penyuluhan (23).webp"
import penyuluhan24 from "../../../assets/images/KegiatanImage/penyuluhan (24).webp"
import penyuluhan25 from "../../../assets/images/KegiatanImage/penyuluhan (25).webp"
import penyuluhan26 from "../../../assets/images/KegiatanImage/penyuluhan (26).webp"
import penyuluhan27 from "../../../assets/images/KegiatanImage/penyuluhan (27).webp"
import penyuluhan28 from "../../../assets/images/KegiatanImage/penyuluhan (28).webp"
import penyuluhan29 from "../../../assets/images/KegiatanImage/penyuluhan (29).webp"



const images = [
  { id: 1, src: penyuluhan1, alt: 'penyuluhan' },
  { id: 2, src: penyuluhan2, alt: 'penyuluhan' }, 
  { id: 3, src: penyuluhan3, alt: 'penyuluhan' },
  { id: 4, src: penyuluhan4, alt: 'penyuluhan' },
  { id: 5, src: penyuluhan5, alt: 'penyuluhan' }, 
  { id: 6, src: penyuluhan6, alt: 'penyuluhan' },
  { id: 7, src: penyuluhan7, alt: 'penyuluhan' },
  { id: 8, src: penyuluhan8, alt: 'penyuluhan' }, 
  { id: 9, src: penyuluhan9, alt: 'penyuluhan' },
  { id: 10, src: penyuluhan10, alt: 'penyuluhan' },
  { id: 11, src: penyuluhan11, alt: 'penyuluhan' }, 
  { id: 12, src: penyuluhan12, alt: 'penyuluhan' },  
  { id: 13, src: penyuluhan13, alt: 'penyuluhan' }, 
  { id: 14, src: penyuluhan14, alt: 'penyuluhan' }, 
  { id: 15, src: penyuluhan15, alt: 'penyuluhan' },  
  { id: 16, src: penyuluhan16, alt: 'penyuluhan' }, 
  { id: 17, src: penyuluhan17, alt: 'penyuluhan' }, 
  { id: 18, src: penyuluhan18, alt: 'penyuluhan' }, 
  { id: 19, src: penyuluhan19, alt: 'penyuluhan' },
  { id: 20, src: penyuluhan20, alt: 'penyuluhan' }, 
  { id: 21, src: penyuluhan21, alt: 'penyuluhan' }, 
  { id: 22, src: penyuluhan22, alt: 'penyuluhan' }, 
  { id: 23, src: penyuluhan23, alt: 'penyuluhan' }, 
  { id: 24, src: penyuluhan24, alt: 'penyuluhan' }, 
  { id: 25, src: penyuluhan25, alt: 'penyuluhan' }, 
  { id: 26, src: penyuluhan26, alt: 'penyuluhan' }, 
  { id: 27, src: penyuluhan27, alt: 'penyuluhan' }, 
  { id: 28, src: penyuluhan28, alt: 'penyuluhan' }, 
  { id: 29, src: penyuluhan29, alt: 'penyuluhan' },  
];

const Penyuluhan = () => {
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

export default Penyuluhan;