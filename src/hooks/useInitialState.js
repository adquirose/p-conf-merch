import { useEffect, useState } from 'react';
import axios from 'axios';
import initialState from '../initialState';
import { BACKEND_URL } from '../constants';

const API = `${BACKEND_URL}/api/products?populate=%2A`;

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([] || JSON.parse(localStorage.getItem('products')));

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data.data);
      localStorage.setItem('products', JSON.stringify(response.data.data))
    };
    fetchData();
  }, []);
  

  const isInCart = (title) => {
		const enCart = state.cart.find((producto) => producto.title === title);
		if (!enCart) {
			return false;
		}
    return true
	};
  const addProductExistente = (payload, newQty) => {
		const newCart = [...state.cart];
    let newItem = {}
		newCart.forEach(item => {
			if (item.title === payload.title) {
				// console.log(`se agregaron ${newQty} productos`);
       newItem = {
        ...item,
        qty: item.qty + newQty
       }
			}
		});
    const cartFiltered = newCart.filter( item => item.title !== payload.title)
		setState({
      ...state,
      cart: [...cartFiltered, newItem]
    });
	};
  const addToCart = (payload, newQty) => {
    if(isInCart(payload.title)){
      addProductExistente(payload, newQty) 
    }else{
      setState({
        ...state, 
        cart:[...state.cart, {...payload, qty: newQty}] 
      })
    }
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.uid !== payload.uid),
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
