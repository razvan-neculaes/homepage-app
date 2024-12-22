import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="brand.100" p={4} textAlign="center">
      <Text color="brand.900">
        &copy; 2024 Vintage Shop. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
