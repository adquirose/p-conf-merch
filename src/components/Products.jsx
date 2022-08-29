import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/products.css';

function Products() {
  const { products, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product
            key={product.attributes.uid}
            product={product.attributes}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
