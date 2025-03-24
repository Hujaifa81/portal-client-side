import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';

// Import required modules
import { Pagination } from 'swiper/modules';

 const Slider=()=> {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="h-[88vh] w-full relative z-0">
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={banner1} className="w-full h-full object-cover" alt="Movie Banner 1" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-10 text-white">
              <h2 className="text-5xl font-extrabold mb-3">Experience the Thrill</h2>
              <p className="text-lg  mb-5 text-center">
                "Action, adventure, and suspense—all in one place. Discover the ultimate entertainment now!"
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition max-w-sm mx-auto">
              Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={banner2} className="w-full h-full object-cover" alt="Movie Banner 2" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-10 text-white">
              <h2 className="text-5xl font-extrabold mb-3">A Journey Beyond Imagination</h2>
              <p className="text-lg text-center mb-5">
                "Step into a world where dreams become reality. The magic of cinema awaits!"
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition max-w-sm mx-auto">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={banner3} className="w-full h-full object-cover" alt="Movie Banner 3" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-10 text-white">
              <h2 className="text-5xl font-extrabold mb-3">Unravel the Mystery</h2>
              <p className="text-lg text-center mb-5">
                "Every frame tells a story, every moment builds suspense. Get ready for an unforgettable ride!"
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition max-w-sm mx-auto">
              Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
export default Slider;
