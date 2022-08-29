import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSumaTotal from '../utils';
import '../styles/components/checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  return (
    <>
      <Helmet>
        <title>Platzi Conf - Lista</title>
        <meta name="description" content="Checkout" />
        <meta
          name="keywords"
          content="E-commerce,HTML, CSS, JavaScript, React"
        />
        <meta name="author" content="adquirose" />
      </Helmet>
      <div className="checkout">
        <div className="checkout-content">
          <h3>Lista de pedidos</h3>
          {cart.map((product) => (
            <div key={product.uid} className="checkout-item">
              <div className="checkout-element">
                <h4>{product.title}</h4>
                <span>{product.price}</span>
              </div>
              <button type="button" onClick={() => removeFromCart(product)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        <div className="checkout-sidebar">
          <h3>Precio Total $ {handleSumaTotal(cart)}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Checkout;
