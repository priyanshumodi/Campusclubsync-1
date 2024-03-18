import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src="https://image.slidesharecdn.com/gdscpresentationinfosession-230827103902-57bb0253/85/gdsc-presentation-info-sessionpptx-2-320.jpg?cb=1693133075"
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Arun Singh Bhatnagar
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-800 tracking-wide leading-5"
            >
             Shri Arun S Bhatnagar is a Senior Govt. of India bureaucrat of 1983 batch with overall experience of 45 years. Started his career in 1975 as an 
             Assistant Professor in Economics. After appearing in the All India Civil Services Exam in 1982, joined IRS in 1983.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Director General of IIST</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Vice President of Pickalball association</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>samutkarsh yojna</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;