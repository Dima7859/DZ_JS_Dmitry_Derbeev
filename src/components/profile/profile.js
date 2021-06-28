import { removeToken, removeUserEmail, removeUserName } from "../../shared/ls-service";
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