// src/theme/vintage.js
import { extendTheme } from '@chakra-ui/react';

const vintageTheme = extendTheme({
  colors: {
    brand: {
      50: '#f5f0e1',
      100: '#e0d7c3',
      200: '#cbbda5',
      300: '#b6a387',
      400: '#a18969',
      500: '#8b6f4f', // Main vintage brown
      600: '#70563e',
      700: '#553d2d',
      800: '#39241c',
      900: '#1e0b0b',
    },
  },
  fonts: {
    heading: `'Georgia', serif`,
    body: `'Times New Roman', serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.50',
        color: 'brand.900',
      },
    },
  },
});

export default vintageTheme;
