import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import AppContext from '../../context/AppContext'

function Cart() {
    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state
    
  return (
    <Layout>
      <div className="checkout-content">
            <h3>Lista de pedidos</h3>
            { cart.map((product) => (
              <div key={product.uid} className="checkout-item">
                <div className="checkout-element">
                  <h4>{product.title}</h4>
                  <span>{product.price}</span>
                </div>
                <button type="button" onClick={() => removeFromCart(product)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            ))}
            <Link to='/checkout' type="button">Checkout</Link>
      </div>
    </Layout>
  )
}
export default Cart