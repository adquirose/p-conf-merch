import React, { useRef, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function SignUp() {
  const form = useRef(null);
  const { signUp } = useContext(AuthContext);
  const handleOnClick = () => {
    const formData = new FormData(form.current);
    signUp(formData);
  };
  return (
    <>
      <form ref={form}>
        <input name="username" type="text" placeholder="Username" />
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input name="password1" type="password" placeholder="Repite Password" />
      </form>
      <button type="button" onClick={handleOnClick}>
        Registrarte
      </button>
    </>
  );
}

export default SignUp;
