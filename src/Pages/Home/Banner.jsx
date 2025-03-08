import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "animate.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { AuthContext } from "../../Context/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 const {user} = useContext(AuthContext)
  return (
    <>
     
      {user && (
        <h1 className="text-3xl mt-32 uppercase font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          {/*  */}
          Hello {user.displayName},Welcome To
          <Typewriter
            words={[" Home", " Dashboard", " Website"]}
            loop={30}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      )}
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2  mt-10"
      >
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/db9wD2s/image-24.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/nB8b9cY/image-23.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/7xDD706/image-22.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/GkNJMvf/image-21.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/x8DZSM0/image-25.png"
          />
        </SwiperSlide>
      
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-w-lg mx-auto md:absolute mt-4 md:-top-36"
      >
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/db9wD2s/image-24.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/nB8b9cY/image-23.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/7xDD706/image-22.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/GkNJMvf/image-21.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/x8DZSM0/image-25.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
