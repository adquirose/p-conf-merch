import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const backendUrl = 'http://localhost:1337';

const providersNames = [
  'discord',
  'facebook',
  'github',
  'google',
  'instagram',
  'linkedin',
  'reddit',
  'twitch',
  'twitter',
  'vk',
  'auth0',
];

function LoginButton({ providerName }) {
  return (
    <a href={`${backendUrl}/api/connect/${providerName}`}>
      <button type="button" style={{ width: '150px' }}>
        Connect to {providerName}
      </button>
    </a>
  );
}

function Login() {
  const { error, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const form = useRef(null);
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    signIn(formData);
    navigate(-1);
  };

  return (
    <>
      <form ref={form}>
        <input name="user" type="text" />
        <input name="password" type="password" />
      </form>
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
      <ul style={{ listStyleType: 'none' }}>
        {providersNames.map((providerName) => (
          <li key={providerName}>
            <LoginButton providerName={providerName} />
          </li>
        ))}
      </ul>
      {error && <span>Error en los datos ingresados</span>}
    </>
  );
}
export default Login;
