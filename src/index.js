import { 
  createdUser, 
  getUsers
} from "./api/api-handlers";
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import './Styles/styles.scss';

class User {
  constructor ( name, position, note, date, idUser ) {
    this.name = name;
    this.position  = position ;
    this.note = note;
    this.date = date;
    this.idUser = idUser;
  }
}

const nameValue = document.getElementById('name');
const positionValue = document.getElementById('position');
const note_contentValue = document.getElementById('note_content');
const btnRefresh = document.getElementById('btnRefresh');
const noteForm = document.getElementById('noteForm');
export const all_Block = document.getElementById('all_Block');

noteForm.addEventListener('submit', event => {
  event.preventDefault();
  if (
    nameValue.value !== '' &&
    positionValue.value !== '' &&
    note_contentValue.value !== ''
  ) {

    const user = new User (
      nameValue.value,
      positionValue.value,
      note_contentValue.value,
      moment().format('LLL'),
      uuidv4()
    );
    
    createdUser (user);
    getUsers();
    noteForm.reset();

  } else alert('fill the form');
});

btnRefresh.addEventListener('click', event => {
  event.preventDefault();
  getUsers();
});

export const getBlockNote = ({ name, position, note, date }) => {

  const divBlock = document.createElement('div');
  const divHeader = document.createElement('div');
  const divName = document.createElement('div');
  const divDate = document.createElement('div');
  const divNote = document.createElement('div');

  divBlock.className = 'all_Block_Note';
  divHeader.className = 'all_Block_Note_Header';
  divNote.className = 'all_Block_Note_Content';
  divName.innerHTML = `${position} ${name}`;
  divDate.innerHTML = date;
  divNote.innerHTML = note;

  all_Block.appendChild(divBlock);
  divBlock.appendChild(divHeader);
  divHeader.appendChild(divName);
  divHeader.appendChild(divDate);
  divBlock.appendChild(divNote);
};

getUsers();
