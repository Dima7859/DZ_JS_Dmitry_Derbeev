// const user = {
//   firstName: 'Alex',
//   lastName: 'Petrov',
//   age: 25,
//   job: {
//     company: 'iTcehArt',
//     position:'webDev',
//     skills: ['JS', 'HTML', 'CSS']
//   }
// }

// user.fullName = `${user.firstName} ${user.lastName}`;
// const { fullName: name = 'noname' } = user;
// const { job: {company: myCompany  = 'EPAM'} } = user;

// console.log(name);
// console.log(myCompany);


const API_CONFIG = {
  apiKey: "AIzaSyCLFgiL1GTYAXSUxEIHWj2Sma7eKcizwNM",
  authDomain: "dimade7859-test.firebaseapp.com",
  databaseURL: "https://dimade7859-test-default-rtdb.firebaseio.com",
  projectId: "dimade7859-test",
  storageBucket: "dimade7859-test.appspot.com",
  messagingSenderId: "709834733024",
  appId: "1:709834733024:web:d8e4c5576ef153251ae785",
  measurementId: "G-48QGH55PZC"
};

const dataBaceUrl = 'https://dimade7859-test-default-rtdb.firebaseio.com/';

class User {

  constructor ( name, surname, age, sphere, company ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sphere = sphere;
    this.company = company;
  }

}

const nameValue = document.getElementById('name');
const surnameValue = document.getElementById('surname');
const ageValue = document.getElementById('age');
const sphereValue = document.getElementById('sphere');
const companyValue = document.getElementById('company');
const btnForm = document.getElementById('btnForm');
const clearList = document.getElementById('clearList');
const btnRefresh = document.getElementById('btnRefresh');
const myForm = document.getElementById('myForm');
const ul = document.getElementById('ul');

const createeUser = ({ name, surname, age, sphere, company }) => {
  fetch(`${dataBaceUrl}/users.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name,
        surname,
        age,
        sphere,
        company
      })
    }
  )
    .then( response => response.json())
    .then( result => console.log(result));
}

const getUsers = () => {
  fetch(
    `${dataBaceUrl}/users.json`,{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  )
    .then( response => response.json())
    .then( result => {
      const transformedUserArr = Object.keys(result).map( key => ({
        ...result[key],
        id: key
      }));
      console.log(transformedUserArr);
      ul.innerHTML = '';
      transformedUserArr.forEach( item => {
        const li = document.createElement('li');
        li.innerHTML = 
          `Name - ${item.name},
          Surname - ${item.surname},
          Age - ${item.age},
          Sphere - ${item.sphere},
          Company - ${item.company}`;
        ul.appendChild(li);
      });
    });
}


btnForm.onclick = () => {
  if (
    nameValue.value !== '' &&
    surnameValue.value !== '' &&
    ageValue.value !== '' &&
    sphereValue.value !== '' &&
    companyValue.value !== ''
  ) {

    const user = new User (
      nameValue.value,
      surnameValue.value,
      ageValue.value,
      sphereValue.value,
      companyValue.value,
    );
    
    console.log(user);
    createeUser (user);
    getUsers();
    myForm.reset();

  } else alert('fill the form');

};

btnRefresh.onclick = getUsers;

clearList.onclick = () => {
  ul.innerHTML = '';
};

getUsers();
