import React from 'react';
import { Box, Text, Heading, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Ensure arrows are enabled for navigation
  };

  return (
    <Box p={4} textAlign="center">
      <Heading color="brand.900">Welcome to the Vintage Shop</Heading>
      <Text mt={4} color="brand.900">
        Explore our collection of vintage items and find something unique for
        your home.
      </Text>
      <Box mt={8}>
        <Image
          src={`${process.env.PUBLIC_URL}/images/vintage-hero.png`}
          alt="Vintage Shop Hero"
          width="100vw"
          maxWidth="100%"
          borderRadius="md"
        />
      </Box>
      <Box mt={8} width="100vw" maxWidth="100%">
        <Slider {...settings}>
          <Box>
            <Image
              src={`${process.env.PUBLIC_URL}/images/vintage-item-1.png`}
              alt="Vintage Item 1"
              width="100%"
            />
            <Text mt={2} color="brand.900">
              Vintage Item 1
            </Text>
          </Box>
          <Box>
            <Image
              src={`${process.env.PUBLIC_URL}/images/vintage-item-2.png`}
              alt="Vintage Item 2"
              width="100%"
            />
            <Text mt={2} color="brand.900">
              Vintage Item 2
            </Text>
          </Box>
          <Box>
            <Image
              src={`${process.env.PUBLIC_URL}/images/vintage-item-3.png`}
              alt="Vintage Item 3"
              width="100%"
            />
            <Text mt={2} color="brand.900">
              Vintage Item 3
            </Text>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default Main;
