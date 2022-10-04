import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants';

function useProviderAuth() {
  const [jwt, setJwt] = useState(!!JSON.parse(localStorage.getItem('jwt')));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
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
        setLoading(false);
        setUser(response.data.user);
        setJwt(response.data.jwt);
        localStorage.setItem('jwt', JSON.stringify(response.data.jwt));
        localStorage.setItem('user', JSON.stringify(response.data.user));
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
    setLoading(true);
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
            .then(() => {
              setMessage('revisa tu correo electronico de confirmacion');
              setError(null);
              setLoading(false);
            })
            .catch((err) => {
              setMessage(null);
              setError(err.response);
              setLoading(false);
            });
        } else {
          setMessage('el usuario ya existe');
          setError(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setMessage('ha ocurrido un error');
        setLoading(false);
      });
  };
  const forgotPassword = (formData) => {
    setLoading(true);
    axios
      .get(
        `${BACKEND_URL}/api/users?filters[$and][0][email][$eq]=${formData.get(
          'email'
        )}`
      )
      .then((response) => {
        if (response.data.length) {
          axios
            .post(`${BACKEND_URL}/api/auth/forgot-password`, {
              email: formData.get('email'),
            })
            .then((res) => {
              setLoading(false);
              setMessage(
                'revisa tu correo electronico para recuperar tu constraseña'
              );
              setTimeout(() => {
                setMessage('');
              }, 3000);
              setError(!res.data.ok);
            })
            .catch((err) => {
              setMessage('');
              setLoading(false);
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
  const resetPassword = (params, formData) => {
    setLoading(true);
    axios
      .post(`${BACKEND_URL}/api/auth/reset-password`, {
        code: params.get('code'),
        password: formData.get('password'),
        passwordConfirmation: formData.get('password'),
      })
      .then((response) => {
        setMessage('contraseña cambiada correctamente');
        console.log(response);
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setMessage('');
        }, 3000);
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
    resetPassword,
  };
}
export default useProviderAuth;
