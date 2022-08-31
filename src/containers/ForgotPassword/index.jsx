import React, { useRef, useContext } from 'react'
import AuthContext from '../../context/AuthContext'

function ForgotPassword() {
    const form = useRef(null)
    const { forgotPassword } = useContext(AuthContext)

    const handleOnClick = () => {
      const formData = new FormData(form.current)
      forgotPassword(formData.get('email'))
      }
    return (
      <div style={{width:'450px'}}>
        <h2>Olvidaste tu contraseña</h2>
        <form ref={form}>
          <input type="email" name="email" placeholder='Tu Email'/>
        </form>
        <button type="button" onClick={handleOnClick}>Enviar</button>
      </div>
    )
}

export default ForgotPassword