import { signIn, createdUser } from "../../api/api-handlers";
import { setToken, setUserEmail, setUserName } from "../../shared/ls-service";
import { routes } from "../../shared/constants/routes";

export const signUpHendler = () => {
  const signUpForm = document.querySelector('.sing-up__form');

  signUpForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const birth = document.getElementById('birth').value;
    const password = document.getElementById('password').value;

    createdUser(name, email, password, birth)
      .then( response => {
        if (response) {
          const { email } = response.user;
          setUserEmail(email);
          signIn(email, password)
            .then( response => {
              if (response) {
                const { idToken: token } = response.data;
                setToken(token);
                window.location.href = routes.home;
              }
            });
        };
      });
  });
};
