import { removeToken, removeUserEmail, removeUserName, getUserName } from "../../shared/ls-service";
import { routes } from "../../shared/constants/routes";

export const logoutBtnHandler = () => {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.onclick = () => {
    removeToken();
    removeUserEmail();
    removeUserName();
    window.location.href = routes.sign_in;
  };
};

export const welcomeUser = () => {
  const divHederMainPage = document.querySelector('.mainPage__header__welcome');
  const h1 = document.createElement('h1');

  h1.className = 'mainPage__header__welcome__h1';

  h1.innerHTML = `Welcome to the club ${getUserName()} !!!`
  divHederMainPage.appendChild(h1);

};

export const musicPlSt = () => {
  const playAndStop = document.getElementById('btnMusic');
  const musicMp3 = document.getElementById('musicMp3');
  let nowMusic = true;

  playAndStop.onclick = () => {
    if (nowMusic) {
      nowMusic = false;
      playAndStop.className = 'musicPlay';
      musicMp3.pause();
    } else {
      musicMp3.play();
      nowMusic = true;
      playAndStop.className = 'music';
    }
  }
};
