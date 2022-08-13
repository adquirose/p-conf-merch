import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext';
import handleSumaTotal from '../utils';
import '../styles/components/payment.css';

function PayPalCheckout({ cart, addNewOrder, buyer }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleApprove = (order) => {
    if (order.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: order,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };
  return (
    <PayPalButtons
      style={{ layout: 'vertical' }}
      disabled={false}
      createOrder={(data, actions) =>
        actions.order.create({
          purchase_units: [
            {
              amount: {
                value: handleSumaTotal(cart),
              },
            },
          ],
        })
      }
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        handleApprove(order);
      }}
      onError={(err) => {
        setError(err);
        console.error('PayPal Checkout onError', error);
      }}
      onClick={(data, actions) => {
        // Validate on button click, client or server side
        const hasAlreadyBoughtCourse = false;

        if (hasAlreadyBoughtCourse) {
          setError(
            'You already bought this course. Go to your account to view your list of courses.'
          );

          return actions.reject();
        }
        return actions.resolve();
      }}
    />
  );
}
function Payment() {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((product) => (
          <div key={product.title} className="payment-item">
            <div className="payment-element">
              <h4>{product.title}</h4>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 ? <h3>{`Total: ${handleSumaTotal(cart)}`}</h3> : null}
        <div className="payment-button">
          <PayPalCheckout cart={cart} buyer={buyer} addNewOrder={addNewOrder} />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;
