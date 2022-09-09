import { useEffect, useState } from 'react';
import axios from 'axios';
import initialState from '../initialState';
import { BACKEND_URL } from '../constants';

const API = `${BACKEND_URL}/api/products?populate=%2A`;

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data.data);
    };
    fetchData();
  }, []);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
    products,
  };
};
export default useInitialState;
