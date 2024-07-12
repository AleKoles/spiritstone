import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import shop from '../assets/shop.jpg';
import craft from '../assets/craft.jpg';
import gems1 from '../assets/gems1.jpg';
import gems2 from '../assets/gems2.jpg';
import gems3 from '../assets/gems3.jpg';
import gems4 from '../assets/gems4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Gallery = () => {
  return (
    <section id="gallery" className='w-full pb-24 px-4'>
      <h2 className="w-full text-center text-3xl sm:text-5xl cormorant font-bold">Our Works and Services</h2>
      <div className="hidden lg:grid max-w-7xl mx-auto w-full px-4 py-8 grid-cols-3">
        <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
            <LazyLoadImage
              src={gems2}
              alt="Exclusive cuts"
              effect="opacity"
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-theme-gray1 z-10 rounded-lg w-5/6 -mt-16 p-4">
              <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Exclusive Cuts</h3>
              <p className="lg:text-lg ">Our master artists are driven to create new, exclusive gemstone cuts that reflect their passion.</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
            <LazyLoadImage
              src={gems3}
              alt="Top-Quality Classics"
              effect="opacity"
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-theme-gray1 z-10 rounded-lg w-5/6 -mt-16 p-4">
              <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Top-Quality Classics</h3>
              <p className="lg:text-lg">Find Colombian emeralds, Burmese rubies, and Ceylon sapphires that define jewelry fashion.</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
            <LazyLoadImage
              src={gems4}
              alt="Rare Gems"
              effect="opacity"
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-theme-gray1 z-10 rounded-lg w-5/6 -mt-16 p-4">
              <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Rare Gems</h3>
              <p className="lg:text-lg">Discover unique gems from every corner of the globe, offering unparalleled beauty and uniqueness.</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
            <LazyLoadImage
              src={gems1}
              alt="Dream Jewelry"
              effect="opacity"
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-theme-gray1 z-10 rounded-lg w-5/6 -mt-16 p-4">
              <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Dream Jewelry</h3>
              <p className="lg:text-lg">Whether classic or extravagant, we bring your jewelry vision to life with expertise and passion.</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
            <LazyLoadImage
              src={craft}
              alt="Master Gem Cutters"
              effect="opacity"
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-theme-gray1 z-10 rounded-lg w-5/6 -mt-16 p-4">
              <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Master Gem Cutters</h3>
              <p className="lg:text-lg">With 40+ years of expertise, our cutters transform raw gems into radiant marvels with precision.</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg px-12 py-8">
          <div className="relative w-full flex flex-col gap-8 justify-center items-center">
            <LazyLoadImage
              src={shop}
              alt="25 Years in Business"
              effect="opacity"
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-theme-gray1 z-10 rounded-lg w-5/6 -mt-16 p-4">
              <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">25 Years in Business</h3>
              <p className="lg:text-lg">Proudly trusted in the jewelry industry for over 25 years, with a reputation built on quality and service.</p>
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
    >
      <SwiperSlide className="rounded-lg px-4 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <img src={gems2} alt="Exclusive cuts" className="w-full h-auto lg:w-2/3 mx-auto rounded-lg"/>
          <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Exclusive Cuts</h3>
          <p className="lg:text-lg text-justify">The passionate drive to create constantly motivates our master artists to develop new, exclusive gemstone cuts.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg px-4 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <img src={gems3} alt="Top-Quality Classics" className="w-full h-auto lg:w-2/3 mx-auto rounded-lg"/>
          <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Top-Quality Classics</h3>
          <p className="lg:text-lg text-justify">Colombian emeralds, Burmese rubies, Ceylon sapphires in a range of colors—at SpiritStone, you can purchase all these top-quality gemstones that have become classics in the world of jewelry fashion.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg px-4 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <img src={gems4} alt="Rare Gems" className="w-full h-auto lg:w-2/3 mx-auto rounded-lg"/>
          <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Rare Gems</h3>
          <p className="lg:text-lg text-justify">Discover precious representatives of all mineral groups, available in various sizes, shades, and brilliance. Sourced from different corners of the planet, these gemstones offer you unparalleled beauty and uniqueness.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg px-4 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <img src={gems1} alt="Dream Jewelry" className="w-full h-auto lg:w-2/3 mx-auto rounded-lg"/>
          <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Dream Jewelry</h3>
          <p className="lg:text-lg text-justify">Whether you seek a refined, classic piece or an extraordinary, extravagant creation, we are here to bring your vision to life. Our experienced jewelers are ready for any challenge.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg px-4 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <img src={craft} alt="Master Gem Cutters" className="w-full h-auto lg:w-2/3 mx-auto rounded-lg"/>
          <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">Master Gem Cutters</h3>
          <p className="lg:text-lg text-justify">Master gem cutters with over forty years of experience possess a deep understanding of their craft, capable of transforming raw materials into radiant, brilliant marvels with minimal weight loss.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-lg px-4 py-8">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <img src={shop} alt="25 Years in Business" className="w-full h-auto lg:w-2/3 mx-auto rounded-lg"/>
            <h3 className="text-theme-blue2 text-xl sm:text-2xl text-center">25 Years in Jewelry Business</h3>
            <p className="lg:text-lg text-justify">For over twenty-five years, our company has proudly participated in the nation's top jewelry and gemstone exhibitions, earning a reputation for trust and respect through diligent work, quality, and client-focused service.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    
  );
};

export default Gallery;
