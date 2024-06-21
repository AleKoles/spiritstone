import React from 'react';
import Diamond from '../assets/diamond.jpg'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Gallery = () => {
  return (
    <section id="gallery" className='w-full pb-24 px-4'>
      <h2 class="w-full text-center text-3xl sm:text-5xl cormorant font-bold">Our Works</h2>
      <Swiper
        className="max-w-7xl mx-auto w-full px-12 py-8"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="rounded-lg px-12 py-8">
          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={Diamond} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Diamond</h3>
            <p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg px-12 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={Diamond} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Diamond</h3>
            <p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg px-12 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={Diamond} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Diamond</h3>
            <p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    
  );
};

export default Gallery;
