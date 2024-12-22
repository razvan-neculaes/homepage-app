import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <Box bg="brand.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" color="brand.900">
          Vintage Shop
        </Heading>
        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <Box as="a" href="#home" p={2} color="brand.900">
            Home
          </Box>
          <Box as="a" href="#about" p={2} color="brand.900">
            About
          </Box>
          <Box as="a" href="#contact" p={2} color="brand.900">
            Contact
          </Box>
        </Flex>
        <HamburgerMenu />
      </Flex>
    </Box>
  );
};

export default Header;
