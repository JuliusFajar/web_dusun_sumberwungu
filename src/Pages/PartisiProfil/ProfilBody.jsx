import React, { useState } from 'react';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import logoKKN from "../../assets/images/logoKKN.png";
import calendar from "../../assets/images/calendar.svg";
import view1 from "../../assets/images/ProfilImage/gunung_1.jpeg";
import view2 from "../../assets/images/ProfilImage/bintang.jpeg";
import view3 from "../../assets/images/ProfilImage/budaya.jpeg";
import maps from "../../assets/images/ProfilImage/maps_profil.png";
import { Link } from "react-router-dom";

function Body() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleImageClick = (imageSrc) => {
    setIsFullscreen(true);
    setFullscreenImage(imageSrc);
    setIsHeaderVisible(false); // Menyembunyikan header
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
        <div className='text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 m-5 p-3 border rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl md:text-2xl font-semibold'>Menelusuri Jejak Sejarah Desa Sumberwungu</h1>
          <div className='mx-3 mt-5'>          
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify'>
              Kelompok 35 KKN 86 UAJY "sejarah desa"
            </p>
          </div>

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
            <p>Senin, 22 Juli 2024</p>
          </div>
          </div>
          
        </div>
      )}

      
      <div className='text-black m-5 p-7 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='flex flex-col items-center'>
            <h1 className='text-xl md:text-2xl font-semibold text-center mb-3 md:mb-6 lg:mb-8'>Geografis Tempuh</h1>
            <ul className="list-disc list-inside font-reg text-sm md:text-md lg:text-lg text-justify px-7">
              <li>Terletak di Kecamatan Tepus, Kabupaten Gunung Kidul.</li>
              <li>Akses Utama Jalan: Jalan idk & Jalur Lintas idk juga</li>
              <li>Estimasi waktu tempuh <strong>(Kota Yogyakarta)</strong> : <strong> -+ 1.5 Jam/Motor dan -+2 Jam/Mobil.</strong></li>
              <li>Estimasi waktu tempuh <strong>(Kota Wonosari)</strong>: <strong>-+ entah Menit/Motor dan -+ entah Jam/Mobil.</strong> </li>
              {/* <li>Estimasi waktu tempuh <strong>(Kota Wonogiri)</strong> : <strong>-+ entah Jam/Motor dan -+ 1.5 Jam/Mobil.</strong> </li>
              <li>Estimasi waktu tempuh <strong>(Kota Pacitan)</strong> : <strong>-+ 1 Jam/Motor dan -+ 1.5 Jam/Mobil.</strong> </li> */}
            </ul>
          </div>
         
          <div className="flex flex-col items-center">
            <img
              src={maps}
              alt="Sejarah Sumberwungu"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-full cursor-pointer "
              onClick={() => handleImageClick(maps)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light text-center">Tekan Gambar untuk Detail</p>
          </div>
      
          
          
        </div>
      </div>
      
      <div className='text-black m-5 p-7 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <h1 className='text-xl md:text-2xl font-semibold mb-3 md:mb-6 lg:mb-8 text-center'>Sejarah yang Mengakar di Tanah Karst</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              src={view1}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[24rem] cursor-pointer"
              onClick={() => handleImageClick(view1)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light justify-center">Gambar 2.Pemandangan alami yang memukau</p>
          </div>
          <div>
            <p className="text-sm md:text-md lg:text-lg font-reg text-justify px-7">
              Cerita sedikit tentang tanah Sumberwungu
            </p>
          </div>
        </div>

        <h1 className='text-xl md:text-2xl text-center font-semibold mt-12 mb-3 md:mb-6 lg:mb-8'>Tradisi yang Terjaga dengan Cinta</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify px-7'>
              Tradisi Di Sumberwungu
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={view3}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[24rem] cursor-pointer"
              onClick={() => handleImageClick(view3)}
            />
            <p className='text-[#7DA148] dark:text-white text-xs mt-2 font-light'>Gambar 3. Pertunjukan Jathilan</p>
          </div>
        </div>

        <h1 className='text-xl md:text-2xl font-semibold mt-12 mb-3 md:mb-6 lg:mb-8 text-center'>Menghadapi Masa Depan dengan Optimisme</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              src={view2}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[24rem] cursor-pointer"
              onClick={() => handleImageClick(view2)}
            />
            <p className='text-[#7DA148] dark:text-white text-xs mt-2 font-light'>Gambar 4. Suasana Malam yang Amat Syahdu</p>
          </div>
          <div>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify px-7'>
              Sedikit kata motivasi :v
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center text-black p-8 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <Link to="https://desasumberwungu.gunungkidulkab.go.id/first/" class="inline-flex items-center px-8 py-4 text-sm font-medium text-center text-white bg-[#7DA148] dark:bg-[#801C1C] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200" target="_blank" rel="noopener noreferrer">
          <p className='text-2xl font-semibold'>WEBSITE DESA SUMBERWUNGU</p>
        </Link>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen}
        >
          <img src={fullscreenImage} alt="Full screen" className="max-w-full max-h-full" />
        </div>
        )}
        </div>
    </>
  );
}

export default Body;
