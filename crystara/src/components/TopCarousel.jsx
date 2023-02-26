import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import {TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Offer/02/Desktop_1920x560_toplisting.jpg",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Newin/01/Desktop_1920-x560_toplisting.jpg",
    "https://banner.caratlane.com/live-images/4320a30823014770b49d6c35ba3508c9.jpg",
    "https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg",
  ];

  return (
    <Box
      position={"relative"}
      height={"auto"}
      width={"auto"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        position="absolute"
        bg={"transparent"}
        top={"26rem"}
        left={"47%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        _hover={"none"}
        onClick={() => slider?.slickPrev()}
      >
        {/* <BiLeftArrowAlt /> */}
        <TfiArrowCircleLeft size={"2rem"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg={"transparent"}
        position="absolute"
        top={"26rem"}
        left={"53%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        _hover={"none"}
        onClick={() => slider?.slickNext()}
      >
        <TfiArrowCircleRight size={"2rem"} />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"md"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
