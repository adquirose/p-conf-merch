import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';

function Home() {
  return (
    <>
      <Helmet>
        <title>Platzi Conf - Productos</title>
        <meta name="description" content="Home" />
        <meta
          name="keywords"
          content="E-commerce,HTML, CSS, JavaScript, React"
        />
        <meta name="author" content="adquirose" />
      </Helmet>
      <Products />
    </>
  );
}

export default Home;
