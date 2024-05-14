import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import {  Pagination } from "swiper/modules";

const ClientReview = () => {
  return (
    <div className=" max-w-[1480px] mx-auto mt-16">
        <div className=" text-center">
            <h1 className=" md:text-4xl text-3xl ">Testimonials From Our Customers</h1>
            <p className=" text-lg mt-2">Check Our Client Feedback ! And You can also giving a review.</p>
        </div>
      <div className=" my-16 py-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className= "">
          <SwiperSlide>
            <div className=" flex md:flex-row flex-col">
              <div className="card lg:w-[600px] mr-5 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl font-medium text-blue-400">Perfect design</h2>
                  <p className=" text-start text-base">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                  <div className=" flex items-center gap-4 mt-3">
                   <div className=" w-16">
                   <img className="" src="https://i.ibb.co/MhV3vPL/t1.jpg" alt="" />
                   </div>
                    <div className=" flex flex-col items-start">
                        <h3 className=" text-lg">BrookLyn Simmons</h3>
                        <p className=" text-sm">Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card lg:w-[600px] mr-5 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl font-medium text-blue-400">Very Useful</h2>
                  <p className=" text-start text-base">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                  <div className=" flex items-center gap-4 mt-3">
                   <div className=" w-16">
                   <img className="" src="https://i.ibb.co/VLBK47x/t4.jpg" alt="" />
                   </div>
                    <div className=" flex flex-col items-start">
                        <h3 className=" text-lg">Ronald Richards</h3>
                        <p className=" text-sm">Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" flex md:flex-row flex-col">
              <div className="card lg:w-[600px] mr-5 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl font-medium text-blue-400">Perfect design</h2>
                  <p className=" text-start text-base">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                  <div className=" flex items-center gap-4 mt-3">
                   <div className=" w-16">
                   <img className="" src="https://i.ibb.co/MhV3vPL/t1.jpg" alt="" />
                   </div>
                    <div className=" flex flex-col items-start">
                        <h3 className=" text-lg">BrookLyn Simmons</h3>
                        <p className=" text-sm">Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card lg:w-[600px] mr-5 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl font-medium text-blue-400">Very Useful</h2>
                  <p className=" text-start text-base">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                  <div className=" flex items-center gap-4 mt-3">
                   <div className=" w-16">
                   <img className="" src="https://i.ibb.co/VLBK47x/t4.jpg" alt="" />
                   </div>
                    <div className=" flex flex-col items-start">
                        <h3 className=" text-lg">Ronald Richards</h3>
                        <p className=" text-sm">Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" flex md:flex-row flex-col">
              <div className="card lg:w-[600px] mr-5 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl font-medium text-blue-400">Perfect design</h2>
                  <p className=" text-start text-base">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                  <div className=" flex items-center gap-4 mt-3">
                   <div className=" w-16">
                   <img className="" src="https://i.ibb.co/MhV3vPL/t1.jpg" alt="" />
                   </div>
                    <div className=" flex flex-col items-start">
                        <h3 className=" text-lg">BrookLyn Simmons</h3>
                        <p className=" text-sm">Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card lg:w-[600px] mr-5 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl font-medium text-blue-400">Very Useful</h2>
                  <p className=" text-start text-base">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                  <div className=" flex items-center gap-4 mt-3">
                   <div className=" w-16">
                   <img className="" src="https://i.ibb.co/VLBK47x/t4.jpg" alt="" />
                   </div>
                    <div className=" flex flex-col items-start">
                        <h3 className=" text-lg">Ronald Richards</h3>
                        <p className=" text-sm">Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
