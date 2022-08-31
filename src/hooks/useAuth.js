import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants';

function useProviderAuth() {
 
  const [jwt, setJwt] = useState(!!localStorage.getItem('jwt'));
  const [user, setUser] = useState(!!localStorage.getItem('user'));
  const [error, setError] = useState(false);

  const signIn = (formData, callback) => {
    axios
      .post(`${BACKEND_URL}/api/auth/local`, {
        identifier: formData.get('user'),
        password: formData.get('password'),
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        setUser(response.data.user);
        setJwt(response.data.jwt);
        localStorage.setItem('jwt', response.data.jwt);
        localStorage.setItem('user', response.data.user);
        callback('/')
        setError(false)
      })
      .catch((err) => {
        // Handle error.
        console.log('An error occurred:', err.response);
        setError(true);
      });
  };
  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    setUser(null);
    setJwt(null);
  };
  const signUp = (formData) => {
    axios.get(`${BACKEND_URL}/api/users?filters[$and][0][email][$eq]=${formData.get('email')}`)
      .then((response) => {
        if(!response.data.length){
          axios
            .post(`${BACKEND_URL}/api/auth/local/register`, {
              username: formData.get('username'),
              password: formData.get('password'),
              email: formData.get('email'),
            })
            .then((res) => {
              // Handle success.
              console.log('Well done!');
              console.log('User profile', res.data.user);
              console.log('User token', res.data.jwt);

            })
            .catch((err) => {
              // Handle error.
              console.log('An error occurred:', err.response);
              return err.response
            });
        }
        else{
          console.log('el usuario ya existe!')
        }
      })
      .catch(err => console.log(err))
    };
  const forgotPassword = (email) => {
    axios.get(`${BACKEND_URL}/api/users?filters[$and][0][email][$eq]=${email}`)
      .then((response) => {
        if(response.data.length){
          axios.post(`${BACKEND_URL}/api/auth/forgot-password`, { email })
            .then((res) => {
              console.log(`Your user received an email ${res}`);
            })
            .catch(err => {
              console.log(`An error occurred:', ${err.response}`);
            });
        }else{
          console.log('no se encontro el mail en los registros')
        }
      })
      .catch(err => console.log(err))
    }
  return {
    user,
    jwt,
    error,
    setError,
    setUser,
    setJwt,
    signIn,
    signOut,
    signUp,
    forgotPassword
  };
}
export default useProviderAuth;
