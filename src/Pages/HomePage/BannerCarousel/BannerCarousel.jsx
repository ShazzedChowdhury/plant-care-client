import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GetStartedBtn from '../../../Components/GetStartedBtn/GetStartedBtn';


const BannerCarousel = () => {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="max-w-7xl mx-auto h-full md:min-h-[calc(100vh-67px)] items-center"
      >
        {/* carousel 1 */}
        <SwiperSlide className="w-full h-full">
          <div className="hero h-full px-5 md:px-10 py-5 md:py-12 mb-5">
            <div className="hero-content px-0 flex-col lg:flex-row-reverse ">
              <img
                src="https://i.postimg.cc/Gm012Sks/banner-1.png"
                alt=""
                className="w-full md:max-w-[285px] h-full max-h-[400px] rounded-lg"
              />
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-10 md:leading-18">
                  Proper
                  <br />
                  Care of <span className="text-[#70b023]">Plants</span>
                </h1>
                <p className="w-full md:w-8/12 py-6">
                  "Welcome to your personal plant care companion! Whether you're
                  nurturing a single succulent or managing a jungle of
                  houseplants, our tracker helps you stay on top of watering
                  schedules, plant health, and care tips — all in one beautiful,
                  easy-to-use dashboard. Keep your plants thriving
                  effortlessly!"
                </p>
                <GetStartedBtn />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* carousel 2 */}
        <SwiperSlide className="w-full h-full">
          <div className="hero h-full">
            <div className="hero h-full px-5 md:px-10 mb-5">
              <div className="hero-content px-0 flex-col lg:flex-row-reverse py-5 md:py-12">
                <img
                  src="https://i.postimg.cc/d0VYfcFM/banner-2.png"
                  alt=""
                  className="w-full md:max-w-[285px] h-full max-h-[400px] rounded-lg"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-10 md:leading-18">
                    Smart Tips
                    <br />
                    for <span className="text-[#70b023]">Thriving Plants</span>
                  </h1>
                  <p className="w-full md:w-8/12 py-6">
                    "Unlock a vast selection of plant varieties, from lush ferns
                    to vibrant flowers and easy-care succulents. With our Plant
                    Care Tracker, discover plants that fit your space,
                    lifestyle, and care preferences. Whether you're growing a
                    leafy jungle or a low-maintenance garden, find the perfect
                    match and get the guidance you need to nurture each one."
                  </p>
                  <GetStartedBtn />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* carousel 3 */}
        <SwiperSlide className="w-full h-full">
          <div className="hero h-full">
            <div className="hero h-full px-5 md:px-10">
              <div className="hero-content px-0 flex-col lg:flex-row-reverse py-5 md:py-12">
                <img
                  src="https://i.postimg.cc/hPXShd6N/banner-3.png"
                  alt=""
                  className="w-full md:max-w-[285px] h-full max-h-[400px] rounded-lg"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-10 md:leading-18">
                    Explore a World
                    <br />
                    of <span className="text-[#70b023]">Plant Varieties</span>
                  </h1>
                  <p className="w-full md:w-8/12 py-6">
                    "Unlock a vast selection of plant varieties, from lush ferns
                    to vibrant flowers and easy-care succulents. With our Plant
                    Care Tracker, discover plants that fit your space,
                    lifestyle, and care preferences. Whether you're growing a
                    leafy jungle or a low-maintenance garden, find the perfect
                    match and get the guidance you need to nurture each one."
                  </p>
                  <GetStartedBtn />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    );
};

export default BannerCarousel;