import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import AuthContext from '../../context/AuthContext';
import { HeaderContainer, HeaderCheckout } from './styles';
import ShoppingCart from '../../icons/ShoppingCart';
import MyAccount from '../MyAccount';

function Header() {
  const { state } = useContext(AppContext);
  const { auth } = useContext(AuthContext);
  const { cart } = state;
  const location = useLocation()
  
  // const handleLogin = () => {
  //   navigate('/login');
  // };
  
  return (
    <HeaderContainer>
      <h1 className="header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <HeaderCheckout>
        {
          location.pathname !== '/login' &&(
            <>
              <Link to="/cart">
                <ShoppingCart width="32" height="32"/>
              </Link>
              {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
              {auth ? (
                <MyAccount/>
              )
                : <Link to='/login'>Ingresa aca</Link>
              }
            </>
          )
        } 
      </HeaderCheckout>
    </HeaderContainer>
  );
}

export default Header;
