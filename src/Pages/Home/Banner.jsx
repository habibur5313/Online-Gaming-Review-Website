import React, { useContext, useRef, useState } from "react";
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
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
        <h1 className="text-3xl mt-10 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          {/*  */}
          Hello {user.displayName},Welcome To 
          <Typewriter
            words={[' Home', ' Dashboard', ' Website']}
            loop={30}
            cursor
            cursorStyle='_'
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
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/1KN7BXj/images-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/cc2YsWK/download-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/PcGGVwc/download.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/rZdMKdh/images-3.jpg"
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
            src="https://i.ibb.co.com/1KN7BXj/images-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/cc2YsWK/download-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/PcGGVwc/download.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[120px]"
            src="https://i.ibb.co.com/rZdMKdh/images-3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
