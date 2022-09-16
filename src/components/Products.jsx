import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/products.css';

function Products() {
  const { products, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product.attributes}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Products;
