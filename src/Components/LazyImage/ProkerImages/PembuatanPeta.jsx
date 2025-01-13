import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import peta1 from "../../../assets/images/KegiatanImage/peta (1).webp"
import peta2 from "../../../assets/images/KegiatanImage/peta (2).webp"
import peta3 from "../../../assets/images/KegiatanImage/peta (3).webp"
import peta4 from "../../../assets/images/KegiatanImage/peta (4).webp"
import peta5 from "../../../assets/images/KegiatanImage/peta (5).webp"
import peta6 from "../../../assets/images/KegiatanImage/peta (6).webp"
import peta7 from "../../../assets/images/KegiatanImage/peta (7).webp"
import peta8 from "../../../assets/images/KegiatanImage/peta (8).webp"
import peta9 from "../../../assets/images/KegiatanImage/peta (9).webp"
import peta10 from "../../../assets/images/KegiatanImage/peta (10).webp"
import peta11 from "../../../assets/images/KegiatanImage/peta (11).webp"
import peta12 from "../../../assets/images/KegiatanImage/peta (12).webp"
import peta13 from "../../../assets/images/KegiatanImage/peta (13).webp"
import peta14 from "../../../assets/images/KegiatanImage/peta (14).webp"
import peta15 from "../../../assets/images/KegiatanImage/peta (15).webp"

const images = [
  { id: 1, src: peta1, alt: 'peta' },
  { id: 2, src: peta2, alt: 'peta' }, 
  { id: 3, src: peta3, alt: 'peta' },
  { id: 4, src: peta4, alt: 'peta' },
  { id: 5, src: peta5, alt: 'peta' }, 
  { id: 6, src: peta6, alt: 'peta' },
  { id: 7, src: peta7, alt: 'peta' },  
  { id: 8, src: peta8, alt: 'peta' },  
  { id: 9, src: peta9, alt: 'peta' },  
  { id: 10, src: peta10, alt: 'peta' },    
  { id: 11, src: peta11, alt: 'peta' },  
  { id: 12, src: peta12, alt: 'peta' },  
  { id: 13, src: peta13, alt: 'peta' },  
  { id: 14, src: peta14, alt: 'peta' },  
  { id: 15, src: peta15, alt: 'peta' },  
];

const Peta = () => {
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

export default Peta;