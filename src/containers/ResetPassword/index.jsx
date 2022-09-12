import React, { useRef } from 'react'
import { useLocation }  from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../../constants'

function ResetPassword() {
  const location = useLocation()
  const params = new URLSearchParams(location.search);
  const form = useRef(null)
  
  const handleOnclick = () => {
    const formData = new FormData(form.current)
    axios
      .post(`${BACKEND_URL}/api/auth/reset-password`, {
        code: params.get('code'), // code contained in the reset link of step 3.
        password: formData.get('password'),
        passwordConfirmation: formData.get('password'),
      })
      .then(response => {
        console.log(response)
        console.log("Your user's password has been reset.");
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
  }
  return (
    <div style={{width:'450px'}}>
      <h2>Escribe tu nueva contraseña</h2>
      <form ref={form}>
        <input type="password" name="password"/>
        <input type="password" name="password1"/>
      </form>
      <button type="button" onClick={handleOnclick}>Cambiar</button>
    </div>
  )
}

export default ResetPassword