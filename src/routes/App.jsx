import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Success from '../containers/Success';
import Payment from '../containers/Payment';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout/Layout';
import AppContext from '../context/AppContext';
import AuthContext from '../context/AuthContext';
import useInitialState from '../hooks/useInitialState';
import useAuth from '../hooks/useAuth';
import GlobalStyle from './styles';

const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
};
function App() {
  const initialState = useInitialState();
  const auth = useAuth();
  const isEmpty = Object.keys(initialState.state).length;

  return (
    <div>
      <GlobalStyle />
      {isEmpty > 0 ? (
        <PayPalScriptProvider options={initialOptions}>
          <AppContext.Provider value={initialState}>
            <BrowserRouter>
              <AuthContext.Provider value={auth}>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                      path="/checkout"
                      element={
                        <PrivateRoute redirectTo="/login">
                          <Checkout />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/checkout/information"
                      element={<Information />}
                    />
                    <Route path="/checkout/payment" element={<Payment />} />
                    <Route path="/checkout/success" element={<Success />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </AuthContext.Provider>
            </BrowserRouter>
          </AppContext.Provider>
        </PayPalScriptProvider>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
}

export default App;
