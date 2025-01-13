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
import pemasaran from "../../assets/images/KegiatanImage/pemasaran (1).webp"
import speaking from "../../assets/images/KegiatanImage/speaking (1).webp"
import penyuluhan from "../../assets/images/KegiatanImage/penyuluhan (1).webp"
import peta from "../../assets/images/KegiatanImage/peta (1).webp"
import perak from "../../assets/images/KegiatanImage/perak (1).webp"
import kknHead1 from "../../assets/images/AssetKebersamaan/gatherImg (1).webp";
import SenamSehatImages from '../../Components/LazyImage/ProkerImages/SenamSehatImages';
import BimbelAnak from '../../Components/LazyImage/ProkerImages/BimbinganBelajarImages';
import MigrasiUMKM from '../../Components/LazyImage/ProkerImages/MigrasiECommerceImages';
import KarangTaruna from '../../Components/LazyImage/ProkerImages/KarangTaruna';
import Menabung from '../../Components/LazyImage/ProkerImages/Menabung';
import Merajut from '../../Components/LazyImage/ProkerImages/Merajut';
import Pemasaran from '../../Components/LazyImage/ProkerImages/PemasaranLewatIg';
import Speaking from '../../Components/LazyImage/ProkerImages/PublicSpeaking';
import Penyuluhan from '../../Components/LazyImage/ProkerImages/PenyuluhanPancasila';
import Peta from '../../Components/LazyImage/ProkerImages/PembuatanPeta';
import Perak from '../../Components/LazyImage/ProkerImages/Perak';


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
            Dalam rangka mendukung kemajuan UMKM, mahasiswa KKN 35 Universitas Atma Jaya Yogyakarta membuat video profil untuk UMKM di Desa Wunut. Kegiatan ini bertujuan untuk mempromosikan produk unggulan desa agar lebih dikenal luas dan meningkatkan daya saing UMKM di era digital.

            Video ini mengangkat potensi lokal dan keunikan masing-masing UMKM, serta memberikan platform promosi yang menarik dan kreatif. Diharapkan, video ini akan memperluas jangkauan pemasaran dan mendukung keberlanjutan UMKM Desa Wunut.

            Mari bersama-sama dukung UMKM Desa Wunut untuk masa depan yang lebih cerah!
            "Maju Bersama, Berkembang Bersama!" 🌟
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
          <h1 className='text-2xl md:text-3xl font-bold'>Berikut adalah video Profile UMKM </h1>
          <div>
            {/* Add YouTube Video here */}
            <div className="my-5">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iBoI17HYu6Q?si=baXTfuzm0UOjDSsv"
                //https://www.youtube.com/embed/fUGtSMS3Rrg?start=130
                //https://www.youtu.com/embed/ZncbtRo7RXs?si=LYTso9Wos-OTTaYu
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-96 rounded-md"
              ></iframe>
            </div>
            
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
            Program Bimbingan Belajar Bahasa Inggris yang diadakan KKN 86 Universitas Atma Jaya Yogyakarta menjadi kegiatan yang sangat dinanti oleh anak-anak di Desa Sumberwungu. Program ini berlangsung seminggu sekali sejak 26 Desember 2024 di Balai Dusun Wunut, dengan suasana belajar yang menyenangkan dan penuh semangat dari kakak-kakak KKN.

            Anak-anak diajarkan pengucapan, kosakata, dan percakapan sehari-hari melalui metode interaktif seperti permainan edukatif dan simulasi percakapan. Tujuannya adalah untuk meningkatkan kepercayaan diri mereka dalam menggunakan bahasa Inggris dan mempersiapkan mereka menghadapi era global.

            Melalui program ini, KKN 86 berharap dapat memberikan kontribusi dalam pendidikan anak-anak Desa Sumberwungu.

            "Bersama Kita Belajar, Bersama Kita Berkembang!" 🌟
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
            Pada 28 Desember 2024, KKN 86 Kelompok 35 Universitas Atma Jaya Yogyakarta mengadakan Sosialisasi Phishing di Balai Dusun Wunut. Kegiatan ini bertujuan meningkatkan kesadaran masyarakat tentang bahaya phishing dan pentingnya menjaga keamanan informasi pribadi.

            Dalam sosialisasi, kakak-kakak KKN menjelaskan apa itu phishing, cara kerjanya, dan ciri-ciri penipuan digital seperti email palsu dan tautan mencurigakan. Peserta juga diajak berpartisipasi dalam sesi tanya jawab dan simulasi, serta diberikan tips praktis untuk melindungi diri, seperti memeriksa keaslian situs web dan menghindari membagikan data pribadi sembarangan.

            Antusiasme masyarakat terlihat dari semangat mereka memahami materi. Diharapkan, kegiatan ini membantu masyarakat Desa Wunut menjadi lebih waspada dan cerdas dalam menghadapi ancaman digital.

            "Bersama Wujudkan Desa yang Aman dan Melek Teknologi!"
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
            Program kebersihan gigi dan cuci tangan yang diadakan KKN 86 Universitas Atma Jaya Yogyakarta menjadi kegiatan yang penuh manfaat dan keseruan. Anak-anak diajarkan cara menyikat gigi dan mencuci tangan yang benar melalui pembelajaran interaktif yang menyenangkan.

            Selain edukasi, anak-anak diajak mempraktikkan langsung kebiasaan sehat ini dengan bimbingan kakak-kakak KKN. Sebagai motivasi, setiap anak mendapat hadiah berupa paket sikat gigi dan pasta gigi untuk digunakan sehari-hari.

            Program ini disambut baik oleh warga, yang merasa kegiatan ini sangat membantu meningkatkan kesadaran kesehatan anak-anak. Dengan menjaga kebiasaan sederhana ini, anak-anak diharapkan tumbuh lebih sehat dan terhindar dari penyakit.

            "Ayo Jaga Kebersihan, Wujudkan Hidup Sehat!" 🌟
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
            Program menabung yang dipandu oleh Kak Helen dari KKN 86 mengajarkan anak-anak betapa pentingnya menyisihkan uang sejak dini. Melalui cerita menarik, permainan edukatif, dan praktik langsung, anak-anak diajarkan disiplin, menghargai uang, dan merencanakan kebutuhan masa depan.

            Antusiasme anak-anak terlihat dari semangat mereka menabung di celengan masing-masing. Program ini juga mendapat dukungan orang tua yang berharap kebiasaan baik ini terus berlanjut di rumah.

            "Ayo mulai menabung untuk masa depan yang cerah!"
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
            Program merajut yang dipandu Kak Shine untuk remaja perempuan di Desa Wunut mengajarkan keterampilan praktis yang bermanfaat. Para remaja belajar teknik dasar merajut untuk membuat kerajinan tangan, yang dapat meningkatkan kreativitas dan rasa percaya diri.

            Antusiasme tinggi terlihat dari semangat mereka dalam mengikuti sesi ini, yang juga membuka peluang bagi mereka untuk mengembangkan bakat dan keterampilan baru.

            "Merajut Impian, Menciptakan Karya!" 🌟
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

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Proker Individu Workshop Penggunaan Instagram untuk Pemasaran Produk</h1>
            <img
              src={pemasaran}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(pemasaran)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Workshop yang dipandu oleh Kak Anya kepada Karang Taruna Desa Wunut mengajarkan cara memanfaatkan Instagram untuk mempromosikan produk lokal. Para peserta diajarkan membuat konten menarik, menggunakan fitur Instagram, dan meningkatkan engagement dengan audiens.

            Dengan keterampilan ini, diharapkan mereka dapat memaksimalkan potensi media sosial untuk mendukung perkembangan UMKM dan produk lokal di desa.

            "Mengoptimalkan Media Sosial, Meningkatkan Pemasaran Produk!" 🌟
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
             
                <Pemasaran />
            
            </Swiper>
            </div>
            
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Proker Individu Pelatihan Public Speaking dan Personal Branding</h1>
            <img
              src={speaking}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(speaking)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Pelatihan Public Speaking dan Personal Branding yang dipandu Kak Edgard untuk Karang Taruna Desa Wunut bertujuan meningkatkan kemampuan berbicara di depan umum dan membangun citra diri. Peserta diajarkan teknik berbicara percaya diri dan cara membangun personal branding yang efektif.

            Dengan keterampilan ini, diharapkan para peserta dapat lebih percaya diri dan memiliki citra positif di masyarakat.

            "Berbicara dengan Percaya Diri, Membangun Citra Diri yang Kuat!" 🌟
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
             
                <Speaking />
            
            </Swiper>
            </div>
            
        </div>
        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Proker Individu Penyuluhan Pancasila dan Lomba Mewarnai burung Garuda</h1>
            <img
              src={penyuluhan}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(penyuluhan)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Penyuluhan Pancasila dan Lomba Mewarnai Burung Garuda yang dipandu Kak Jefri untuk anak-anak di Desa Wunut bertujuan mengenalkan nilai-nilai Pancasila dan meningkatkan kreativitas. Anak-anak diajarkan tentang Pancasila dan diberi kesempatan untuk berkreasi dalam lomba mewarnai Burung Garuda.

            Kegiatan ini diharapkan dapat menumbuhkan rasa cinta tanah air dan kreativitas pada anak-anak.

            "Bersama Pancasila, Mewarnai Masa Depan!" 🌟
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
             
                <Penyuluhan />
            
            </Swiper>
            </div>
            
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Proker Individu Pembuatan dan Pemasangan Peta</h1>
            <img
              src={peta}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(peta)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Kak Wiryadi bersama Sobat Putra membuat dan memasang peta Padukuhan Wunut untuk mempermudah warga mengenali wilayah dan lokasi penting. Peta ini diharapkan menjadi panduan bermanfaat bagi masyarakat dan mendukung kemajuan desa.

            "Peta untuk Kemudahan dan Kemajuan Wunut!" 🌟
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
             
                <Peta />
            
            </Swiper>
            </div>
            
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Proker Individu Pembuatan E-Commerce Tokopedia</h1>
            <img
              src={perak}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(peta)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Kak Vero membantu Pak Suhar memasarkan produk perak Desa Wunut dengan membuat akun Tokopedia. Langkah ini bertujuan memperluas jangkauan pemasaran dan meningkatkan penjualan melalui platform digital.

            "UMKM Go Digital, Wunut Mendunia!" 🌟
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
             
                <Perak />
            
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
