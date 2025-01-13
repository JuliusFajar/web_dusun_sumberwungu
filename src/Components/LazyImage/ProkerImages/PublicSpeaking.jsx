import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import speaking1 from "../../../assets/images/KegiatanImage/speaking (1).webp"
import speaking2 from "../../../assets/images/KegiatanImage/speaking (2).webp"
import speaking3 from "../../../assets/images/KegiatanImage/speaking (3).webp"
import speaking4 from "../../../assets/images/KegiatanImage/speaking (4).webp"
import speaking5 from "../../../assets/images/KegiatanImage/speaking (5).webp"
import speaking6 from "../../../assets/images/KegiatanImage/speaking (6).webp"
import speaking7 from "../../../assets/images/KegiatanImage/speaking (7).webp"
import speaking8 from "../../../assets/images/KegiatanImage/speaking (8).webp"
import speaking9 from "../../../assets/images/KegiatanImage/speaking (9).webp"
import speaking10 from "../../../assets/images/KegiatanImage/speaking (10).webp"
import speaking11 from "../../../assets/images/KegiatanImage/speaking (11).webp"
import speaking12 from "../../../assets/images/KegiatanImage/speaking (12).webp"
import speaking13 from "../../../assets/images/KegiatanImage/speaking (13).webp"
import speaking14 from "../../../assets/images/KegiatanImage/speaking (14).webp"


const images = [
  { id: 1, src: speaking1, alt: 'speaking' },
  { id: 2, src: speaking2, alt: 'speaking' }, 
  { id: 3, src: speaking3, alt: 'speaking' },
  { id: 4, src: speaking4, alt: 'speaking' },
  { id: 5, src: speaking5, alt: 'speaking' }, 
  { id: 6, src: speaking6, alt: 'speaking' },
  { id: 7, src: speaking7, alt: 'speaking' },  
  { id: 8, src: speaking8, alt: 'speaking' },  
  { id: 9, src: speaking9, alt: 'speaking' },  
  { id: 10, src: speaking10, alt: 'speaking' },  
  { id: 11, src: speaking11, alt: 'speaking' },  
  { id: 12, src: speaking12, alt: 'speaking' },  
  { id: 13, src: speaking13, alt: 'speaking' },  
  { id: 14, src: speaking14, alt: 'speaking' },    
];

const Speaking = () => {
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

export default Speaking;