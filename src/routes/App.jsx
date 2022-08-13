import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Success from '../containers/Success';
import Payment from '../containers/Payment';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/components/app.css';
import config from '../../config';

const initialOptions = {
  'client-id': config.reactAppPayPalClientId,
  currency: 'USD',
  intent: 'capture',
};
function App() {
  const initialState = useInitialState();
  return (
    <PayPalScriptProvider options={initialOptions}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route path="/checkout/information" element={<Information />} />
              <Route path="/checkout/payment" element={<Payment />} />
              <Route path="/checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </PayPalScriptProvider>
  );
}

export default App;
