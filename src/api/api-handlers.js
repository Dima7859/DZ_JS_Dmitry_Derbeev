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
    .then( response => response)
    .catch( err => console.log(err));
};

// export const signUp = async (email, password) => {
//   return fierbase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(response => response);
// };

initApi();


export const createdUser = async (name, email, password, birth) => {

  
  await axios.post(`${dataBaceUrl}/users.json`, {
    name,
    email,
    birth,
  })
  .then( response => console.log(response))
  .catch( err => console.log(err));
  
  return await fierbase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => response);

  // await singIn(email, password).then(({idToken}) => {
  //     if (idToken) {
  //         setToken(idToken);
  //         window.location.href = '/';
  //     } else alert('error');
  // });

};

export const getUsers = async () => {

  return axios.get(`${dataBaceUrl}/users.json`)
    .then( response => console.log(response))
    .catch( err => console.log(err));

    // return fetch(`${baceUrl}/users.json`,{
    //     method: 'GET',
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     },
    // }).then( response => response.json());
};
