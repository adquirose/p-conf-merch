import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import Layout from '../../components/Layout';

function Perfil() {
    const { user } = useContext(AuthContext)
    useEffect(() => {
        console.log(user)
    },[user])
  return (
    <Layout>
      <h2>Datos de la Cuenta</h2>
      <p>Nombre : {user.username}</p>
      <p>Email : {user.email}</p>
      <span>Cambio de Contraseña</span>

    </Layout>
  )
}

export default Perfil