import { signIn } from "../../api/api-handlers";
import { setToken, setUserEmail } from "../../shared/ls-service";
import { routes } from "../../shared/constants/routes";

export const signInHandler = () => {
  const signInForm = document.querySelector('.sing-in__form');

  signInForm.addEventListener('submit', event =>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signIn(email, password)
      .then( response => {
        if (response) {
          const { idToken: token } = response.data;
          setToken(token);
          setUserEmail(email);
          window.location.href = routes.home;
        }
      });
  });
};
