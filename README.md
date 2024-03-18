# lower navBar

```
 <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div> 
```

# testimonials
```
import React from "react";
import Slider from "react-slick" ; // jai 

const TestimonialData = [
  {
    id: 1,
    name: "Sarika purohit (GDSC LEAD)",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Sarika%20Purohit%20Profile.jpg",
  },
  {
    id: 2,
    name: "Prabal Patidar (ex GDSC LEAD)",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "sarthak joleya (GfG)",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://media.licdn.com/dms/image/D4D03AQENJGd9ChdVMA/profile-displayphoto-shrink_400_400/0/1666810078918?e=2147483647&v=beta&t=YkMGCFYY6JxajSwLsMGPU98kdFV-lDIcqZETQCfXJkY",
  },
  {
    id: 5,
    name: "Priyanshu Modi (Algozenith)",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://lh3.googleusercontent.com/a/AGNmyxZ0gxQdXxZo9v0evHJWvmTJqjmFdpBlt3EVC0RxQA=w60-h60",
  },
  {
    id: 6,
    name: "Muskan kushwah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://avatars.githubusercontent.com/u/131872972?s=48&v=4",
  },
  {
    id: 7,
    name: "Himanshi dubey",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  }
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our club members are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

```


# Banner

```

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
              className="text-sm text-gray-500 tracking-wide leading-5"
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

export default Banner;//
```