import React, { useContext, useEffect } from 'react';
import { ProductsContainer, ProductsRow } from './styles';
import Product from '../Product';
import AppContext from '../../context/AppContext';

function Products() {
  const { products, addToCart } = useContext(AppContext);

  const handleAddToCart = (product, qty) => () => {
    addToCart(product,qty);
  };
  useEffect(() => {
    console.log(products)
  },[products])
  return (
    <ProductsContainer>
      <ProductsRow>
        {products.length > 0 ? 
          products.map((product) => (
            <Product
              key={product.id}
              product={product.attributes}
              handleAddToCart={handleAddToCart}
            />
          ))
          :
          <p>Cargando</p>
        }
        
      </ProductsRow>
    </ProductsContainer>
  );
}

export default Products;
