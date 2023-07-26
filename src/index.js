import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, theme} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor =  persistStore(store)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>

 <ChakraProvider theme={theme}>
  <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/cart' element ={<Cart/>}/>
    </Routes>
  </Router>
 </ChakraProvider>
    </PersistGate>
  </Provider>
 
);
reportWebVitals();
