import { authUrl, API_CONFIG, dataBaceUrl } from './api-config';
import fierbase from 'firebase/app';
import { getBlockNote,all_Block } from '../index';

const headers = {
  'Content-Type' : 'application/json'
};

export const initApi = () => {
  fierbase.initializeApp(API_CONFIG);
};

export const createdUser = ({ name, position, note, date, idUser }) => {
  fetch(`${dataBaceUrl}/users.json`,
    {
      method: 'POST',
			headers,
      body: JSON.stringify({
        name,
        position,
        note,
        date,
        idUser
      })
    }
  )
    .then( response => response.json())
    .then( result => console.log(result));
}

export const getUsers = () => {
  fetch(
    `${dataBaceUrl}/users.json`,{
      method: 'GET',
			headers
    }
  )
    .then( response => response.json())
    .then( result => {
      const transformedUserArr = Object.keys(result).map( key => ({
        ...result[key],
        key: key
      }));
      console.log(transformedUserArr);
      all_Block.innerHTML = null;

      transformedUserArr.forEach( item => {
        getBlockNote(item);
      });
    });
}
