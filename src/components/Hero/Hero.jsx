// import React from "react";
// import Image1 from "../../assets/hero/women.png";
// import Image2 from "../../assets/hero/shopping.png";
// import Image3 from "../../assets/hero/sale.png";
// import Slider from "react-slick";

// const ImageList = [
//   {
//     id: 1,
//     img: Image1,
//     title: "Upto 50% off on all Men's Wear",
//     description:
//       "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: Image2,
//     title: "30% off on all Women's Wear",
//     description:
//       "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Image3,
//     title: "70% off on all Products Sale",
//     description:
//       "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

const Hero = ({ handleOrderPopup }) => {
  // var settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 800,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   cssEase: "ease-in-out",
  //   pauseOnHover: false,
  //   pauseOnFocus: true,
  // };

  return (
    <div >
      <img className="w-full h-{50rem}" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2fU3b3RjqbTMrXF4JODbJgJuB9evwUdwwQ&s" alt="" />
    </div>
  );
};

export default Hero;
