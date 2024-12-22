// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import vintageTheme from './theme/vintage';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={vintageTheme}>
    <App />
  </ChakraProvider>
);

// Log results to the console
reportWebVitals(console.log);

// Or send to an analytics endpoint
// reportWebVitals((metric) => {
//   // Send metric to an analytics endpoint
// });
