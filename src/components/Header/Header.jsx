import React from 'react';
// import { useLocation } from 'react-router-dom';
// import AppContext from '../../context/AppContext';
// import AuthContext from '../../context/AuthContext';



import NavbarApp from '../Navbar';

function Header() {
  // const { state } = useContext(AppContext);
  // const { jwt } = useContext(AuthContext);
  // const { cart } = state;
  // const location = useLocation()
   
  return (
    // <HeaderContainer>
    //   <h1 className="header-title">
    //     <Link to="/">BTS Merch</Link>
    //   </h1>
    //   <HeaderCheckout>
    //     {
    //       location.pathname !== '/login' &&(
    //         <>
    //           <Link to="/cart">
    //             <ShoppingCart width="32" height="32"/>
    //           </Link>
    //           {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
    //           {jwt ? (
    //             <MyAccount/>
    //           )
    //             : <Link to='/login'>Ingresa aca</Link>
    //           }
    //         </>
    //       )
    //     } 
    //   </HeaderCheckout>
    // </HeaderContainer>
    <NavbarApp/>
  );
}

export default Header;
