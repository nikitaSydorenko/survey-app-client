import axios from 'axios';

const BASE_URL = 'http://localhost:3000/auth/';
const REGISTRATION = 'registration';
const LOGIN = 'login'

export const fetchToDBLogin = (username, password) => axios.post(`${BASE_URL}${LOGIN}`, {username, password})
  .catch((error) => console.log('error:', error))
  .then(res => console.log('RESPONSE', res));

export const fetchToDbRegistration = (username, password) => axios.post(`${BASE_URL}${REGISTRATION}`, {username, password})
  .catch((error) => console.log('error:', error))
  .then(res => console.log('RESPONSE', res))