import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import AppContext from '../../context/AppContext'
import { CartContainer, Container, Span, Item, Button } from './styles'
import Bin from '../../icons/Bin'

function Cart() {
    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state
    console.log(cart)
  return (
    <Layout>
      <Container>
        <div>
          <Link to="/">Volver</Link>
        </div>
        <h2>Tu Carrito:</h2>
        {cart.length > 0 ?
          <CartContainer>
              <Item>
                <Span>Producto</Span>
                <Span>Cantidad</Span>
                <Span>Valor Unitario</Span>
                <Span>Total</Span>
              </Item> 
              {cart.map((product) => (
                <Item key={product.uid}>
                  <Span>{product.title}</Span>
                  <Span>{product.qty}</Span>
                  <Span>{product.price}</Span>
                  <Span>{product.price * product.qty}</Span>
                  <Button type="button" onClick={() => removeFromCart(product)}>
                    <Bin/>
                  </Button>
                </Item>))
              }
            
          </CartContainer>
          :
            <p>Carro Vacio</p>
        }
        <Link to='/checkout' type="button">Checkout</Link>
      </Container>
    </Layout>
  )
}
export default Cart