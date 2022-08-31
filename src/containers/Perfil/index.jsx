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
      <div>Hola {user.username}</div>
    </Layout>
  )
}

export default Perfil