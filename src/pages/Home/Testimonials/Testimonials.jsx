import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUser, FaUserCircle } from "react-icons/fa";
// import { Pagination } from "swiper";
import reviewImg1 from "/20230810_120154.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import useAxiosNormal from "../../../hooks/useAxiosNormal";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/feedback")
      .then((data) => {
        setFeedbacks(data?.result);
      });
  }, []);

  return (
    <section>
      <div className="flexcode-container">
        <SectionTitle
          title="Inspiring Testimonials"
          descrition="Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class."
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {/* <SwiperSlide>
                        <div className='bg-secondary-color p-8 md:p-10 mb-12 rounded-2xl text-white border border-[#1e2d40] hover:border-[#0fcda1] transition-all duration-300 cursor-pointer'>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Excellent
                            </h2>
                            <p>
                                I've been using this carrier service
                                company for years, and they never disappoint. They always
                                deliver on time, and my goods arrive in perfect condition.
                                Their customer service is also top-notch -
                                they are always friendly and responsive.
                            </p>
                            <h3 className='text-xl font-semibold mt-8 mb-2'>~ Omar Faruq</h3>
                            <div
                                className='w-20 h-20 object-cover rounded-full border-[#0fcda1] bg-secondary-color border absolute'
                            >
                                <img src={reviewImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide> */}
          {feedbacks?.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <div className="bg-secondary-color p-8 md:p-10 mb-8 rounded-2xl text-white border border-[#1e2d40] hover:border-[#0fcda1] transition-all duration-300 cursor-pointer">
                <h2 className="text-2xl font-semibold mb-5">
                  {feedback.thumbExpression.length > 20
                    ? feedback.thumbExpression.slice(0, 20) + "...."
                    : feedback.thumbExpression}
                </h2>
                <p className="min-h-[160px]">
                  {feedback.details.length > 350
                    ? feedback.details.slice(0, 350) + "...."
                    : feedback.details}
                </p>
                <span className="flex mt-8 items-center justify-between">
                  <h3 className="text-xl font-semibold  mb-2">
                    ~{" "}
                    {feedback.userName.length > 9
                      ? feedback.userName.slice(0, 9) + "...."
                      : feedback.userName}
                  </h3>
                  <Rating
                    initialRating={feedback.rating}
                    readonly
                    className="flex items-center justify-center"
                    emptySymbol={
                      <FaRegStar className="text-xl mr-2 text-amber-500" />
                    }
                    fullSymbol={
                      <FaStar className="text-xl mr-2 text-amber-500" />
                    }
                  />
                </span>
                <div className="w-16 h-16 object-cover rounded-full border-[#0fcda1] bg-secondary-color border absolute bottom-0">
                  {feedback?.image ? (
                    <img src={feedback.image} className="rounded-full p-1" alt="" />
                  ) : (
                    <FaUser className=" text-[#0fcda1] w-full h-full p-1 rounded-full" />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='text-center mt-10'>
          <Link to='/allTestimonials'>
            <button className='flexcode-button px-8 py-3'>
              All Testimonials
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;