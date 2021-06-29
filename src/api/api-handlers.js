import fierbase from 'firebase/app';
import axios from 'axios';
import { authUrl, API_CONFIG, dataBaceUrl } from './api-config';

require('firebase/auth')

export const initApi = () => {
  fierbase.initializeApp(API_CONFIG);
};

export const signIn = (email, password) => {
  return axios.post(authUrl, {
    email,
    password,
    returnSecureToken: true
  })
    .then( response => response);
};

export const createdUser = async (name, email, password, birth) => {
  await axios.post(`${dataBaceUrl}/users.json`, {
    name,
    email,
    birth,
  })
    .then( response => console.log(response));

  return await fierbase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => response);
};

export const getUsers = async () => {
  return axios.get(`${dataBaceUrl}/users.json`)
    .then( response => response);
};

initApi();
