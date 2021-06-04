
class Human {

  #name;
  #surname;
  #age;
  
  get name () {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get age() {
    return this.#age;
  }

  set name(newName) { 
    typeof newName === 'string' ? this.#name = newName : alert('Invalid data type entered');
  }

  set surname(newSurname) { 
    typeof newSurname === 'string' ? this.#surname = newSurname : alert('Invalid data type entered');
  }

  set age(newAge) { 
    typeof newAge === 'number' ? this.#age = newAge : alert('Invalid data type entered');
  }


  constructor (name, surname, age) {
    this.#name = name;
    this.#surname = surname;
    this.#age = age;
  }

  fullName () {
    return `${this.name} ${this.surname}`;
  }

};

class Worker extends Human {

  #rate;
  #days;

  get rate() {
    return this.#rate;
  }

  get days() {
    return this.#days;
  }

  set rate(newRate) { 
    typeof newRate === 'number' ? this.#rate = newRate : alert('Invalid data type entered');
  }

  set days(newDays) { 
    typeof newDays === 'number' ? this.#days = newDays : alert('Invalid data type entered');
  }

  constructor (name, surname, age, rate, days,){
    super (name, surname, age);
    this.#rate = rate;
    this.#days = days;
  }

  salary () {
    return this.#rate * this.#days ;
  }

};

class Developer extends Worker{

  #sphere;
  #company;

  get sphere() {
    return this.#sphere;
  }

  get company() {
    return this.#company;
  }

  set sphere(newSphere) { 
    typeof newSphere === 'string' ? this.#sphere = newSphere : alert('Invalid data type entered');
  }

  set company(newCompany) { 
    typeof newCompany === 'string' ? this.#company = newCompany : alert('Invalid data type entered');
  }


  constructor (sphere, company, name, surname, age, rate, days) {
    super(name, surname, age, rate, days);
    this.#sphere = sphere;
    this.#company = company;
  }

  salary () {
    // return `${super.salary()} $`;
    return this.days * this.rate + ' $';
  }

};

class Designer extends Developer{

  #platform;
  #environment;

  get platform() {
    return this.#platform;
  }

  get environment() {
    return this.#environment;
  }

  set platform(newPlatform) { 
    typeof newPlatform === 'string' ? this.#platform = newPlatform : alert('Invalid data type entered');
  }

  set environment(newEnvironment) { 
    typeof newEnvironment === 'string' ? this.#environment = newEnvironment : alert('Invalid data type entered');
  }

  constructor ( name, surname, age, sphere, company, platform, environment, rate, days) {
    super(sphere, company, name, surname, age, rate, days);
    this.#platform = platform;
    this.#environment = environment;
  }

};

const nameValue = document.getElementById('name');
const surnameValue = document.getElementById('surname');
const ageValue = document.getElementById('age');
const sphereValue = document.getElementById('sphere');
const companyValue = document.getElementById('company');
const platformValue = document.getElementById('platform');
const environmentValue = document.getElementById('environment');
const rateValue = document.getElementById('rate');
const daysValue = document.getElementById('days');
const btnForm = document.getElementById('btnForm');
const clearList = document.getElementById('clearList');
const myForm = document.getElementById('myForm');
const ul = document.getElementById('ul');
const users = [];

btnForm.onclick = () => {
  if (nameValue.value !== '' &&
  surnameValue.value !== '' && 
  ageValue.value !== '' && 
  sphereValue.value !== '' &&
  companyValue.value !== '' &&
  platformValue.value !== '' && 
  environmentValue.value !== '' && 
  rateValue.value !== '' && 
  daysValue.value !== '' ) {

    const user = new Designer (nameValue.value, 
      surnameValue.value, 
      ageValue.value,
      sphereValue.value, 
      companyValue.value, 
      platformValue.value, 
      environmentValue.value, 
      rateValue.value, 
      daysValue.value);
    
    users.push(user);
    console.log(user);
    console.log(users);
    myForm.reset();
  
    const li = document.createElement('li');
    li.innerHTML = `${user.fullName()} - ${user.salary()}`
    ul.appendChild(li);

  } else alert('fill the form');

};

clearList.onclick = () => {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}