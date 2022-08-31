import React, { useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

// const backendUrl = 'http://localhost:1337';

// const providersNames = [
//   'discord',
//   'facebook',
//   'github',
//   'google',
//   'instagram',
//   'linkedin',
//   'reddit',
//   'twitch',
//   'twitter',
//   'vk',
//   'auth0',
// ];

// function LoginButton({ providerName }) {
//   return (
//     <a href={`${backendUrl}/api/connect/${providerName}`}>
//       <button type="button" style={{ width: '150px' }}>
//         Connect to {providerName}
//       </button>
//     </a>
//   );
// }

function Login() {
  const { error, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const form = useRef(null);
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    signIn(formData, navigate);
  };

  return (
    <div style={{width:'450px'}}>
      <h2>Inicio de sesión</h2>
      <form style={{width:'420px'}} ref={form}>
        <input name="user" type="text" placeholder="Email"/>
        <input name="password" type="password" placeholder="Password"/>
      </form>
      <button type='button' onClick={handleSubmit}>Iniciar</button>
      <Link to="/forgot-password">Olvidaste tu contraseña?</Link>
      <Link to="/signup">Registrate</Link>
    
      {/* <ul style={{ listStyleType: 'none' }}>
        {providersNames.map((providerName) => (
          <li key={providerName}>
            <LoginButton providerName={providerName} />
          </li>
        ))}
      </ul> */}
      {error && <span style={{color:'black'}}>Error en los datos ingresados</span>}
    </div>
  );
}
export default Login;
