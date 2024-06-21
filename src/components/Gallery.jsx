import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const Gallery = () => {
  return (
    <Swiper
      className="max-w-7xl mx-auto w-full px-12"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-theme-gray1">
        <div className="w-full">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide className="max-w-7xl mx-auto">
        <div className="w-full">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide className="max-w-7xl mx-auto">
        <div className="w-full">
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide className="max-w-7xl mx-auto">
        <div className="w-full">
          Slide 4
        </div>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Gallery;

