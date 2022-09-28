import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Search from '../../icons/Search';
import Profile from '../../icons/Profile';
import Cart from '../../icons/Cart';
import AccountList from '../AccountList';
import { NavbarContainer, NavContainer, SearchContainer, ProfileContainer, CartContainer, Alert } from './styles';

function NavbarApp(){
  const [stateProfile, setStateProfile] = useState(false)
  const [stateSearch, setStateSearch] = useState(false)
  const { state } = useContext(AppContext);
  const { cart } = state;

  const handleSearchOnClick = () => {
    setStateProfile(false)
    setStateSearch(!stateSearch)
  }
  const handleProfileOnClick = () => {
    setStateSearch(false)
    setStateProfile(!stateProfile)
  } 
  return (
    
      <NavbarContainer>
        <Link to="/">
          <img src="/#" alt="logo"/>
        </Link>
        <NavContainer>
          <CartContainer>
            {cart.length > 0 && <Alert>{cart.length}</Alert>} 
            <Link to="/cart">
              <Cart/>
            </Link> 
          </CartContainer>
          <SearchContainer onClick={handleSearchOnClick}>
            <Search/>
          </SearchContainer>
          <ProfileContainer onClick={handleProfileOnClick}>
            <Profile/>
          </ProfileContainer>
        </NavContainer>
        { stateProfile && <AccountList handleProfileOnClick={handleProfileOnClick} />}
        { stateSearch && <p>Search</p>}
      </NavbarContainer>
  )
}
export default NavbarApp