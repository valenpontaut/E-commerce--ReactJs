import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlbGI5OoqEOLJaHO4Zc23qTBNOYudlrMg",
  authDomain: "db-reactch-ecommerce.firebaseapp.com",
  projectId: "db-reactch-ecommerce",
  storageBucket: "db-reactch-ecommerce.appspot.com",
  messagingSenderId: "668512895290",
  appId: "1:668512895290:web:81f008da18e2b4d3d21003"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
