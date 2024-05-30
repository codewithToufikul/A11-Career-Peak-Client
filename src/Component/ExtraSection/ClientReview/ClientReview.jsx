// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import {  Pagination } from "swiper/modules";
import { useQuery } from "react-query";
import axios from "axios";

const ClientReview = () => {
  const {data: reviews =[]} = useQuery({
    queryKey: ['review'],
    queryFn: async ()=>{
      const res = await axios.get('https://career-peak-server.vercel.app/reviews')
      return res.data
    }
  })
  return (
    <div className=" max-w-[1480px] mx-auto mt-16">
        <div className=" text-center">
            <h1 className=" md:text-4xl text-4xl font-semibold ">Testimonials From Our Users</h1>
            <p className=" text-lg mt-2">Check Our Client Feedback ! And You can also giving a review.</p>
        </div>
      <div className=" my-16 py-5">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className= "">
          {
            reviews.map(review => <SwiperSlide key={review._id}>
              <div className=" flex md:flex-row flex-col">
                <div className="card lg:w-[600px] mr-5 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title text-xl font-medium text-blue-400">{review.shortReview}</h2>
                    <p className=" text-start text-base">{review.review.slice(0,200)}</p>
                    <div className=" flex items-center gap-4 mt-3">
                     <div className=" w-16 h-16">
                     <img className=" rounded-full w-full h-full " src={review.photo} alt="" />
                     </div>
                      <div className=" flex flex-col items-start">
                          <h3 className=" text-lg">{review.name}</h3>
                          <p className=" text-sm">{review.passion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>)
          }
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
