import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import '../styles/components/products.css';
import { BACKEND_URL } from '../constants';

function Product({ product, handleAddToCart }) {
  return (
    <Col md="3">
      <Card className="mb-2">
        <Card.Img
          variant="top"
          src={`${BACKEND_URL}${product.image.data.attributes.url}`}
          alt={product.title}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button type="button" onClick={handleAddToCart(product)}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
