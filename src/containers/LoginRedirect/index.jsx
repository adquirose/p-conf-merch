import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { BACKEND_URL } from '../../constants'

function LoginRedirect() {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const { setJwt, setUser } = useContext(AuthContext);
  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    
    fetch(`${BACKEND_URL}/api/auth/google/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        console.log(res.user.username)
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('user', res.user);
        setJwt(res.jwt);
        setUser(res.user);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setTimeout(() => navigate('/'), 1000); // Redirect to homepage after 3 sec
      })
      .catch(err => {
        console.log(err);
        setText('An error occurred, please see the developer console.')
      });
  }, [navigate, location.search, params.providerName]);

  return <p>{text}</p>
}

export default LoginRedirect;