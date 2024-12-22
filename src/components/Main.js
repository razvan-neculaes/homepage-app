import React from 'react';
import { Box, Text, Heading, SimpleGrid, Image } from '@chakra-ui/react';

const Main = () => {
  return (
    <Box p={4} textAlign="center">
      <Heading color="brand.900">Welcome to the Vintage Shop</Heading>
      <Text mt={4} color="brand.900">
        Explore our collection of vintage items and find something unique for
        your home.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
        <Box>
          <Image
            src="https://via.placeholder.com/300x200.png?text=Vintage+Item+1"
            alt="Vintage Item 1"
          />
          <Text mt={2} color="brand.900">
            Vintage Item 1
          </Text>
        </Box>
        <Box>
          <Image
            src="https://via.placeholder.com/300x200.png?text=Vintage+Item+2"
            alt="Vintage Item 2"
          />
          <Text mt={2} color="brand.900">
            Vintage Item 2
          </Text>
        </Box>
        <Box>
          <Image
            src="https://via.placeholder.com/300x200.png?text=Vintage+Item+3"
            alt="Vintage Item 3"
          />
          <Text mt={2} color="brand.900">
            Vintage Item 3
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Main;
