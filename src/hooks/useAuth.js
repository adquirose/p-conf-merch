import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants';

function useProviderAuth() {
  const [jwt, setJwt] = useState(!!localStorage.getItem('jwt'));
  const [user, setUser] = useState(!!localStorage.getItem('user'));
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = (formData, callback) => {
    setLoading(true);
    axios
      .post(`${BACKEND_URL}/api/auth/local`, {
        identifier: formData.get('user'),
        password: formData.get('password'),
      })
      .then((response) => {
        // Handle success.
        // console.log('Well done!');
        // console.log('User profile', response.data.user);
        // console.log('User token', response.data.jwt);
        setLoading(false);
        setUser(response.data.user);
        setJwt(response.data.jwt);
        localStorage.setItem('jwt', response.data.jwt);
        localStorage.setItem('user', response.data.user);

        callback('/');
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response);
      });
  };
  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    setUser(null);
    setJwt(null);
  };
  const signUp = (formData) => {
    axios
      .get(
        `${BACKEND_URL}/api/users?filters[$and][0][email][$eq]=${formData.get(
          'email'
        )}`
      )
      .then((response) => {
        if (!response.data.length) {
          axios
            .post(`${BACKEND_URL}/api/auth/local/register`, {
              username: formData.get('username'),
              password: formData.get('password'),
              email: formData.get('email'),
            })
            .then((res) => {
              setMessage('revisa tu correo electronico de confirmacion');
              setError(!res.data.ok);
            })
            .catch((err) => {
              setMessage('');
              setError(err.response);
            });
        } else {
          setMessage('el usuario ya existe');
          setError(null);
        }
      })
      .catch((err) => {
        setError(err);
        setMessage('ha ocurrido un error');
      });
  };
  const forgotPassword = (formData) => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/api/users?filters[$and][0][email][$eq]=${formData.get('email')}`)
      .then((response) => {
        if(response.data.length) {
          axios
            .post(`${BACKEND_URL}/api/auth/forgot-password`, {
              email: formData.get('email'),
            })
            .then((res) => {
              setLoading(false)
              setMessage(
                'revisa tu correo electronico para recuperar tu constraseña'
              );
              setError(!res.data.ok);
            })
            .catch((err) => {
              setMessage('');
              setLoading(false)
              setError(err.response);
            });
        } else {
          setError(null);
          setMessage('usuario no registrado!');
        }
      })
      .catch((err) => {
        setError(err);
        setMessage('ha ocurrido un error');
      });
  };
  return {
    user,
    jwt,
    error,
    message,
    loading,
    setError,
    setUser,
    setJwt,
    signIn,
    signOut,
    signUp,
    forgotPassword,
  };
}
export default useProviderAuth;
