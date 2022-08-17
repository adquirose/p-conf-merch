import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';
import Map from '../components/Map';
import '../styles/components/success.css';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const address = `${buyer[0].address} ${buyer[0].city} ${buyer[0].state} ${buyer[0].country}`;
  const location = useGoogleAddress(address);

  return (
    <>
      <Helmet>
        <title>Compra realizada</title>
        <meta name="description" content="compra realizada con exito" />
        <meta
          name="keywords"
          content="E-commerce,HTML, CSS, JavaScript, React"
        />
        <meta name="author" content="adquirose" />
      </Helmet>
      <div className="success">
        <div className="success-content">
          <h2>{`${buyer[0].name} Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias a tu direccion</span>
          <div className="success-map">
            <Map data={location} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
