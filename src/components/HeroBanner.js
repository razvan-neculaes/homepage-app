import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HeroBanner = () => {
  return (
    <Box bg="tan" color="brown.800" textAlign="center" py={20}>
      <Heading as="h1" size="2xl">
        Welcome to Our Vintage Site
      </Heading>
      <Text mt={4}>
        Experience the charm of the past with modern convenience.
      </Text>
    </Box>
  );
};

export default HeroBanner;
