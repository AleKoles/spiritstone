import React from 'react';
import shop from '../assets/shop.png';
import craft from '../assets/craft.png';
import gems1 from '../assets/gems1.png';
import gems2 from '../assets/gems2.png';
import gems3 from '../assets/gems3.png';
import gems4 from '../assets/gems4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Gallery = () => {
  return (
    <section id="gallery" className='w-full pb-24 px-4'>
      <h2 className="w-full text-center text-3xl sm:text-5xl cormorant font-bold">Our Works and Services</h2>
      <div className="hidden lg:grid max-w-7xl mx-auto w-full px-4 py-8  grid-cols-3">
      <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
              <img src={gems2} alt="diamond" className="w-full rounded-lg"/>
              <div className="bg-theme-gray1 z-10  rounded-lg w-5/6 -mt-16 p-4">
                <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
                <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
              <img src={gems3} alt="diamond" className="w-full rounded-lg"/>
              <div className="bg-theme-gray1 z-10  rounded-lg w-5/6 -mt-16 p-4">
                <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
                <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
              <img src={gems4} alt="diamond" className="w-full rounded-lg"/>
              <div className="bg-theme-gray1 z-10  rounded-lg w-5/6 -mt-16 p-4">
                <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
                <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
              <img src={gems1} alt="diamond" className="w-full rounded-lg"/>
              <div className="bg-theme-gray1 z-10  rounded-lg w-5/6 -mt-16 p-4">
                <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
                <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
              <img src={craft} alt="diamond" className="w-full rounded-lg"/>
              <div className="bg-theme-gray1 z-10  rounded-lg w-5/6 -mt-16 p-4">
                <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
                <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
              <img src={shop} alt="diamond" className="w-full rounded-lg"/>
              <div className="bg-theme-gray1 z-10  rounded-lg w-5/6 -mt-16 p-4">
                <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
                <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
      </div>
      <Swiper
        className="max-w-7xl mx-auto w-full lg:hidden py-8"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="rounded-lg px-4 lg:px-12 py-8">
          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={gems2} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
            <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg px-12 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={gems3} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
            <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg px-12 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={gems4} alt="gems" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
            <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg px-12 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={gems1} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
            <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg px-12 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={craft} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
            <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg px-12 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <img src={shop} alt="diamond" className="w-full lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Lorem ipsum</h3>
            <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    
  );
};

export default Gallery;
