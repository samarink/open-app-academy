import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    /* pass in a falsey value to the function to ensure that
       the token will be removed from memory once our user is
       logged out or when the token has expired */
    delete axios.defaults.headers.common['Authorization'];
  }
}

export const signup = (userData) => (
  axios.post('/api/users/register', userData)
);

export const login = (userData) => (
  axios.post('/api/users/login', userData)
);
