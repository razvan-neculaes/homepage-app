import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Body = () => {
  return (
    <Box p={8} bg="beige" color="brown.800">
      <Heading as="h2" size="lg">
        Our Services
      </Heading>
      <Text mt={4}>
        We offer a variety of vintage-themed services to cater to your needs.
      </Text>
    </Box>
  );
};

export default Body;
