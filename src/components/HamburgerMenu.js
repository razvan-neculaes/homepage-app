import React from 'react';
import { Box, Stack, Link, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
      flexBasis={{ base: '100%', md: 'auto' }}
      bg="brown.700"
      p={4}
      borderRadius="md"
      boxShadow="md"
      position="relative"
    >
      <IconButton
        icon={<CloseIcon />}
        aria-label="Close Menu"
        position="absolute"
        top={2}
        right={2}
        size="sm"
        onClick={onClose}
        display={{ md: 'none' }}
      />
      <Stack
        spacing={4}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <Link href="#home" color="white">
          Home
        </Link>
        <Link href="#about" color="white">
          About
        </Link>
        <Link href="#services" color="white">
          Services
        </Link>
        <Link href="#contact" color="white">
          Contact
        </Link>
      </Stack>
    </Box>
  );
};

export default HamburgerMenu;
