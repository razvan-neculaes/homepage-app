import React from 'react';
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="brown.700" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontSize="xl" fontWeight="bold">
          Vintage Logo
        </Box>
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onToggle}
        />
      </Flex>
      <HamburgerMenu isOpen={isOpen} onClose={onToggle} />
    </Box>
  );
};

export default Header;
