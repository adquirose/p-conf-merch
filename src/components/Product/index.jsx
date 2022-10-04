import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { CardContainer, Card, CardImage, CardBody, CardTitle, CardText, Button, ButtonGroup, CountContainer, CountButton, CountSpan } from './styles';
import { BACKEND_URL } from '../../constants';

function Product({ product, handleAddToCart }) {
  const [qty, setQyt] = useState(0)
  const handleOnClick = (num) => {
    const newQty = qty + num
    if(newQty < 0){
      setQyt(0)
    }else{
      setQyt(newQty)
    }
    
  }
  return (
    <CardContainer>
      <Card>
        <CardImage
          variant="top"
          src={`${BACKEND_URL}${product.image.data.attributes.url}`}
          alt={product.title}
        />
        <CardBody>
          <CardTitle>{product.title}</CardTitle>
          <CardText>{product.description}</CardText>
          <CardText>Valor: ${product.price}</CardText>
          <CountContainer>
            <CountButton onClick={ () => handleOnClick(-1) } type="button">-</CountButton>
            <CountSpan>{ qty }</CountSpan>
            <CountButton onClick={ () => handleOnClick(+1) } type="button">+</CountButton>
          </CountContainer>
          <ButtonGroup>
            <Button disabled={qty < 1 && true} type="button" onClick={handleAddToCart(product,qty)}>
                Agregar
            </Button>
            <Button as={Link} to={`/products/${product.uid}`}>
                Ver más
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </CardContainer>
  );
}
export default Product