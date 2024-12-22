// theme.js
import { extendTheme } from '@chakra-ui/react';

const vintageTheme = extendTheme({
  colors: {
    brown: {
      50: '#f5f0e6',
      100: '#e6d9c3',
      200: '#d7c2a0',
      300: '#c8ab7d',
      400: '#b9945a',
      500: '#a07b41',
      600: '#7d6133',
      700: '#5a4725',
      800: '#382d17',
      900: '#161309',
    },
    tan: '#D2B48C',
    beige: '#F5F5DC',
  },
  fonts: {
    heading: "'Georgia', serif",
    body: "'Arial', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'beige',
        color: 'brown.800',
      },
    },
  },
});

export default vintageTheme;
