import React, { useRef, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/information.css';
import handleSumaTotal from '../utils';

function Information() {
  const form = useRef(null);
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <>
      <Helmet>
        <title>Platzi Conf - Informacion</title>
        <meta name="description" content="Informacion de compra" />
        <meta
          name="keywords"
          content="E-commerce,HTML, CSS, JavaScript, React"
        />
        <meta name="author" content="adquirose" />
      </Helmet>

      <div className="information">
        <div className="information-content">
          <div className="information-head">
            <h2>Informacion de contacto:</h2>
          </div>
          <div className="information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre Completo" name="name" />
              <input
                type="email"
                placeholder="Correo Electronico"
                name="email"
              />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Codigo Postal" name="cp" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
          <div className="information-buttons">
            <div className="information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>
        <div className="information-sidebar">
          <h3>Pedido: $ {handleSumaTotal(cart)}</h3>
          {cart.map((product) => (
            <div key={product.id} className="information-item">
              <div className="information-element">
                <h4>{product.title}</h4>
                <span>$ {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Information;
