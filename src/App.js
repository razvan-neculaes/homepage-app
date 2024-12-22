import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import vintageTheme from './theme/vintage';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={vintageTheme}>
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
