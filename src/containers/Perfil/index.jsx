import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import Layout from '../../components/Layout';
import { Container, Input } from './styles';

function Perfil() {
    const { user } = useContext(AuthContext)
    const [changePassword, setChangePassword] = useState(false)
    const handleOnClick = () => {
      setChangePassword(!changePassword)
      console.log('cambio')
    }
    useEffect(() => {
        console.log(user)
    },[user])
  return (
    <Layout>
      <Container>
        <h2>Datos de la Cuenta</h2>
        <p>Nombre : {user.username}</p>
        <p>Email : {user.email}</p>
        <span>Cambio de Contraseña</span>
        { !changePassword && <button type="button" onClick={handleOnClick}>Cambiar</button> }
        { changePassword && 
          <div>
            <Input type='password' name='pass1' placeholder='Nueva Contraseña'/>
            <Input type='password' name='pass2' placeholder='Repite Contraseña'/>
            <button type="button" >Cambiar1</button>
          </div>
        }
        
      </Container>
    </Layout>
  )
}

export default Perfil