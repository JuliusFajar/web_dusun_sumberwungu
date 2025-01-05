import React from 'react';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import calendar from "../../assets/images/calendar.svg";
import logoKKN from "../../assets/images/logoKKN.png";
import { InstagramEmbed } from 'react-social-media-embed';

function Body() {
  return (
    <>
      <div className="container mx-auto w-full max-w-full p-6 md:p-12 mb-8 dark:bg-gray-900 px-0 flex justify-center items-center min-h-screen">
        <div className="text-black dark:text-white m-5 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80 dark:bg-gray-800 w-full max-w-[90rem]">
          <h1 className="text-2xl font-semibold mt-4 text-center">KKN 86 Universitas Atma Jaya Yogyakarta,</h1>
          <h1 className="text-2xl font-semibold mb-4 text-center">Mengenal lebih dekat Kelompok 35</h1>

          {/* Grid with logos */}
          <div className="py-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-xs font-light border-b-2 border-gray-300 dark:border-gray-700 mx-4 my-5 place-items-center">
            <div className="flex flex-col items-center col-span-1">
              <img src={logoDesa} alt="Logo Desa" className="object-contain w-8 md:w-5 mb-1" />
              <p>Wunut</p>
            </div>
            <div className="flex flex-col items-center col-span-1">
              <img src={logoKKN} alt="Logo KKN" className="object-contain w-8 md:w-8 mb-1" />
              <p>KKN 86 UAJY</p>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <img src={calendar} alt="Calendar" className="w-5 mb-1" />
              <p>Senin, 13 Januari 2025</p>
            </div>
          </div>

          {/* Instagram Embeds */}
          <div className="my-10 w-full">
            <InstagramEmbed
              width="100%"
              height="auto"
              url="https://www.instagram.com/aboutwunut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              title="IG Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto md:h-auto rounded-md"
            ></InstagramEmbed>
          </div>

          {/* Instagram Embeds */}
          <div className="my-10 w-full">
            <InstagramEmbed
              width="100%"
              height="auto"
              url="https://www.instagram.com/p/DAa4g8qP5nt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              title="IG Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto md:h-auto rounded-md"
            ></InstagramEmbed>
          </div>

          {/* Other Instagram Embeds */}
          <div className="my-10 w-full">
            <InstagramEmbed
              width="100%"
              height="auto"
              url="https://www.instagram.com/p/DAa2wMxvSFv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              title="IG Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto md:h-auto rounded-md"
            ></InstagramEmbed>
          </div>

          <div className="my-10 w-full">
            <InstagramEmbed
              width="100%"
              height="auto"
             
              url="https://www.instagram.com/p/DAa2uROP2H8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              title="IG Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto md:h-auto rounded-md"
            ></InstagramEmbed>
          </div>

          <div className="my-10 w-full">
            <InstagramEmbed
              width="100%"
              height="auto"
          
              url="https://www.instagram.com/p/DAa2roXPcX6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              title="IG Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto md:h-auto rounded-md"
            ></InstagramEmbed>
          </div>

          {/* <div className="my-10 w-full">
            <InstagramEmbed
              width="100%"
              height="auto"
             
              url="https://www.instagram.com/p/C9Ph5EQSafZW-1Um6uh-rTzrykA8_IMiD_03kc0/?igsh=MXQ5Nnd0dWx0ejFj"
              title="IG Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto md:h-auto rounded-md"
            ></InstagramEmbed>
          </div>

          <div className="my-10 w-full">
            <InstagramEmbed
              width="100%"
              height="auto"
             
              url="https://www.instagram.com/p/C9OtBBqS2Fh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              title="IG Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto md:h-auto rounded-md"
            ></InstagramEmbed>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Body;
