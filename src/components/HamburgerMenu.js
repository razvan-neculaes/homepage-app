import React from 'react';
import { IconButton, Box, Flex, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        size="md"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Open Menu"
        display={{ md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
      />
      {isOpen && (
        <Flex
          direction="column"
          position="absolute"
          top="60px"
          left="0"
          right="0"
          bg="gray.100"
          zIndex="1"
          p={4}
        >
          <Box as="a" href="#home" p={2} onClick={onClose}>
            Home
          </Box>
          <Box as="a" href="#about" p={2} onClick={onClose}>
            About
          </Box>
          <Box as="a" href="#contact" p={2} onClick={onClose}>
            Contact
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default HamburgerMenu;
