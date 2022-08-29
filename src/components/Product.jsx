import React from 'react';
import '../styles/components/products.css';

function Product({ product, handleAddToCart }) {
  return (
    <div className="products-item">
      <img
        src={`http://localhost:1337${product.image.data.attributes.url}`}
        alt={product.title}
      />
      <div className="products-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
}

export default Product;
