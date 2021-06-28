import './components/styles/style.scss';
import { paths, routes } from './shared/constants/routes';
import { signInHandler } from './components/sign-in/sign-in';
import { getToken, getUserEmail, setUserName, getUserName } from './shared/ls-service';
import { logoutBtnHandler, musicPlSt, welcomeUser } from './components/profile/profile';
import { signUpHendler } from './components/sign-up/sign-up';
import { getUsers } from './api/api-handlers';

window.onload = () => {

  const pathname = Object.values(paths).find( path => path === window.location.pathname );

  switch (pathname) {
    case paths.home:

      const token = getToken();

      if (!token) {
        window.location.href = routes.sign_in;
      } else {
        getUsers()
          .then(result => {

            const transformedUserArr = Object.keys(result.data).map( key => ({
              ...result.data[key],
              key: key
            }));

            transformedUserArr.forEach( item => {
              const emailUser = item.email.toLowerCase();
              if (emailUser === getUserEmail() || item.email === getUserEmail()) {
                setUserName(item.name);
                welcomeUser();
              };
            });

          });
        logoutBtnHandler();
        musicPlSt();
      };
      break;
    case paths.sign_in:
      signInHandler();
      break;
    case paths.sign_up:
      signUpHendler ()
      break;
    default:
      break;
  }
}
