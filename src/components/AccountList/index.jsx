import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { Item, List, Button, AccountListContainer } from './styles'

function AccountList({ handleProfileOnClick }) {
    const { jwt, signOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut();
        navigate('/');
        handleProfileOnClick()
    };
    return ( 
        <AccountListContainer>
            {jwt ?
            <List>
                <Item as={Link} to="/perfil">
                    Perfil
                </Item>
                <Item as={Button} type="button" onClick={ handleLogout }> 
                    Salir
                </Item>
            </List>
            :
            <Link to="/login">
                Iniciar Sesion
            </Link>
            }
        </AccountListContainer>
        
    )
}

export default AccountList