import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import calendar from "../../assets/images/calendar.svg";
import logoKKN from "../../assets/images/logoKKN.png";
import LazyLoadImage from '../../Components/LazyLoadImage'; // Import LazyImage component
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { images, ImageGallery } from '../../Components/LazyImage/KegiatanImages'; // Import the image data and components
import kknHead from "../../assets/images/KegiatanImage/kkn (7).webp";
import senamHead from "../../assets/images/KegiatanImage/senam (8).webp"
import bimbelHead from "../../assets/images/KegiatanImage/bimbel (2).webp"
import mgrsiHead from "../../assets/images/KegiatanImage/mgrsi (6).webp"
import kgTnaHead from "../../assets/images/KegiatanImage/krgtrna (6).webp"
import menabung from "../../assets/images/KegiatanImage/menabung (6).webp"
import merajut from "../../assets/images/KegiatanImage/merajut (1).webp"
import kknHead1 from "../../assets/images/AssetKebersamaan/gatherImg (1).webp";
import SenamSehatImages from '../../Components/LazyImage/ProkerImages/SenamSehatImages';
import BimbelAnak from '../../Components/LazyImage/ProkerImages/BimbinganBelajarImages';
import MigrasiUMKM from '../../Components/LazyImage/ProkerImages/MigrasiECommerceImages';
import KarangTaruna from '../../Components/LazyImage/ProkerImages/KarangTaruna';
import Menabung from '../../Components/LazyImage/ProkerImages/Menabung';
import Merajut from '../../Components/LazyImage/ProkerImages/Merajut';


function Body() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleImageClick = (imageSrc) => {
    console.log("Image clicked: ", imageSrc);
    setIsFullscreen(true);
    setFullscreenImage(imageSrc);
    setIsHeaderVisible(false);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
    setIsHeaderVisible(true); // Menampilkan header kembali
  };

  return (
    <>
         <div className='container mx-auto p-6 md:p-12 px-4 md:px-10 mb-8'>
      {isHeaderVisible && (
        <div className='text-black m-5 p-2 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl font-semibold'>Merangkai Kebersamaan di Desa Sumberwungu: KKN 86 UAJY</h1>
          <div className="py-2 md:w-15 grid grid-cols-3 gap-2 text-xs font-light border-b-2 mx-4 my-5 place-items-center">
          <div className="flex flex-col items-center col-span-1">
            <img
              src={logoDesa}
              alt="Logo Desa"
              className="object-contain w-5 mb-1"
            />
            <p>Sumberwungu</p>
          </div>

          <div className="flex flex-col items-center col-span-1">
            <img
              src={logoKKN}
              alt="Logo KKN"
              className="object-contain w-8 mb-1"
            />
            <p>KKN 86 UAJY</p>
          </div>
          
          <div className="flex flex-col items-center col-span-1">
            <img
              src={calendar}
              alt="Calendar"
              className="w-5 mb-1"
            />
            <p>Senin, 13 Januari 2025</p>
          </div>
          </div>
          
          <p className=' mx-3 mt-5 text-sm md:text-md lg:text-lg font-reg text-justify'>
            Halo sobat virtual sekalian! Pada kesempatan kali ini, Kelompok 35 KKN 86 UAJY ingin mengajak Kita semua untuk menjelajahi kisah di dalam Desa Sumberwungu tercinta kita. Bersama-sama, kita akan membahas mengenai Perjalanan KKN Universitas Atma Jaya Yogyakarta dalam memupuk kebersamaan, gotong royong, dan cinta di tengah masyarakat Desa Sumberwungu.
          </p>
          <p className='text-sm md:text-md lg:text-lg font-light mx-3 mt-5 text-justify'>
            Selama pelaksanaan KKN 86 Universitas Atma Jaya Yogyakarta di Desa Sumberwungu dari 20 Desember hingga 20 Januari 2025, banyak kegiatan bermakna yang dilakukan bersama warga untuk memperkuat rasa kebersamaan dan menyongsong keberlanjutan dusun.
          </p>
        </div>
      )}

      <div className='text-black m-5 p-3 md:p-7 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="flex flex-col items-center">
            <img
              src={kknHead} // Use the first image in the array as an example
              alt="Kegiatan KKN"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[20rem] cursor-pointer"
              onClick={() => handleImageClick(kknHead)}
              />
                <p className="text-[#7DA148] text-xs mt-2 font-light text-center">Tekan Gambar untuk Detail</p>
          </div>
          <div className='text-center'>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify'>
              Berbagai kegiatan selama KKN di Desa Sumberwungu melibatkan warga dalam gotong royong. Mulai dari bimbel Bahasa Inggris, Pembuatan video profile pengenalan UMKM, hingga sosialisasi pentingnya bahaya phising. Semua kegiatan ini memperlihatkan semangat kebersamaan yang terjalin antara mahasiswa dan warga dusun.
            </p>
          </div>
        </div>

        

        <div className='text-center '>
         
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80 pb-10 mt-5'>
          <h1 className="text-2xl font-semibold mt-5 mb-3 text-center">Pembuatan video profile UMKM</h1>
            <img
              src={senamHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Added 'block mx-auto'
              onClick={() => handleImageClick(senamHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>

            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
              KKN 86 Universitas Atma Jaya Yogyakarta, pada kesempatan kali ini anak-anak dari kelompok KKN 35 melakukan kegiatan dalam pembuatan video profile UMKM yang akan digunakan untuk promosi UMKM yang ada di desa Wunut
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              <SenamSehatImages />
            </Swiper>
          </div>

          </div>


        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Bimbingan Belajar Anak</h1>
            <img
              src={bimbelHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(bimbelHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Program Bimbingan Belajar anak yang diadakan oleh KKN 86 Universitas Atma Jaya Yogyakarta di Desa Sumberwungu menjadi salah satu kegiatan yang dinanti-nanti oleh anak-anak. Bimbingan Bahasa inggris ini dilakukan seminggu sekali dimulai pada tanggal 26 Desember 2024, di balai dusun Wunut. Antusias anak-anak sangat tinggi untuk belajar bahasa inggris yang di ajarkan oleh kakak-kakak KKN 86 
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
             
                <BimbelAnak />
            
            </Swiper>
            </div>
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8  dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Sosialisasi Phising</h1>
            <img
              src={mgrsiHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(mgrsiHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            KKN 86 Universitas Atma Jaya Yogyakarta, Kegiatan sosialisai phising yang dilakukan oleh KKN 86 Kelompok 35 yang dilakukan pada tanggal 28 Desember 2024 di balai dusun Wunut
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
                <MigrasiUMKM />
            
            </Swiper>
            </div>
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Gosok Gigi dan Cuci tangan</h1>
            <img
              src={kgTnaHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(kgTnaHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Program bimbingan anak-anak untuk selalu menjaga kebersihan gigi dan cuci tangan dengan memberikan pembelajaran dalam mengosok gigi dan cuci tangan  yang baik, sangat di sambut baik oleh warga dan anak-anak, tidak hanya memberikan pembelajaran saja tetapi ada juga hadiah yang di berikan ke anak-anak seperti paket sikat gigi dan odol untuk selalu digunakan
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
             
                <KarangTaruna />
            
            </Swiper>
            </div>
            
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Proker Individu Menabung</h1>
            <img
              src={menabung}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(menabung)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Program kerja menabung yang di ajarkan oleh kakak Helen ini mengajarkan anak-anak betapa pentingnya menabung 
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
             
                <Menabung />
            
            </Swiper>
            </div>
            
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Proker Individu Merajut</h1>
            <img
              src={merajut}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(merajut)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Program kerja merajut, yang di ajarkan oleh kakak Shine kepada remaja perempuan di Wunut 
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
             
                <Merajut />
            
            </Swiper>
            </div>
            
        </div>

      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen}
        >
          <img src={fullscreenImage} alt="Full screen" className="max-w-full max-h-full" />
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
        )}
        </div>
    </>
  );
}

export default Body;
