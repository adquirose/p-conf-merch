import { useState } from 'react';
import axios from 'axios';

function useProviderAuth() {
  const [auth, setAuth] = useState(!!localStorage.getItem('auth'));
  const [error, setError] = useState(false);
  const signIn = (formData) => {
    axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: formData.get('user'),
        password: formData.get('password'),
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        setAuth(response.data.jwt);
        localStorage.setItem('auth', response.data.jwt);
      })
      .catch((err) => {
        // Handle error.
        console.log('An error occurred:', err.response);
        setError(true);
      });
  };
  const signOut = () => {
    localStorage.removeItem('auth');
    setAuth(null);
  };
  const signUp = (formData) => {
    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email'),
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((err) => {
        // Handle error.
        console.log('An error occurred:', err.response);
      });
  };
  return {
    auth,
    error,
    setError,
    setAuth,
    signIn,
    signOut,
    signUp,
  };
}
export default useProviderAuth;
