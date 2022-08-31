import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import Products from '../../components/Products';

function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Home;
