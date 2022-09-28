import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import AppContext from '../../context/AppContext'
import { CartContainer, Span } from './styles'
import Bin from '../../icons/Bin'

function Cart() {
    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state
    console.log(cart)
  return (
    <Layout>
      <CartContainer>
        <h3>Lista de pedidos</h3>
        {cart.length > 0 ?
          <>
            {cart.map((product) => (
                <div key={product.uid} className="checkout-item">
                  <div className="checkout-element">
                    <Span>{product.title}</Span>
                    <Span>{product.qty} x {product.price}</Span>
                    <Span>{product.price * product.qty}</Span>
                  
                  </div>
                  <button type="button" onClick={() => removeFromCart(product)}>
                    <Bin/>
                  </button>
                </div>))
            } 
              <Link to='/checkout' type="button">Continuar Compra</Link>
          </>
          :
            <p>Carro Vacio</p>
        }
      </CartContainer>
    </Layout>
  )
}
export default Cart