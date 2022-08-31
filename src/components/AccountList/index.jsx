import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'

function ButtonMyAccount({ handleOnClick }) {
    return(
        <button type="button" onClick={handleOnClick}> 
            Mi Cuenta
        </button>
    )
}
    
function MyAccount() {
    const { signOut } = useContext(AuthContext)
    const [visibleButton, setVisibleButton] = useState(true)
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut();
        navigate('/');
    };

    const renderAccount = () => {
        if(visibleButton){
            return(<ButtonMyAccount handleOnClick={() => setVisibleButton(!visibleButton)}/>)
        }
            return(
            <ul>
                <Link to='/perfil'>
                    Perfil
                </Link>
                <li>
                    <button type="button" onClick={handleLogout}>Salir</button>
                </li>
            </ul>)
        
    }
    return (
        <>{renderAccount()}</>
    )
}

export default MyAccount