import { openModal, closeModal } from "./modals";
import { getData } from "./api";

export const authFunc = () => {
  const authBtn = document.getElementById('open-auth-btn'),
    openCardBtn = document.getElementById('open-cart-btn'),
    logOutBtn = document.getElementById('logout-btn'),
    modal = document.getElementById('auth-modal'),
    closeBtns = modal.querySelectorAll('.close-btn'),
    loginBtn = modal.querySelector('.login-btn');

  const cartModal = document.querySelector('#cart-modal');

  // Авторизация пользователя
  const login = () => {
    authBtn.classList.add('d-none');
    openCardBtn.classList.remove('d-none');
    logOutBtn.classList.remove('d-none');
    closeModal(modal);
  };

  // Выход пользователя
  const loginOut = () => {
    authBtn.classList.remove('d-none');
    openCardBtn.classList.add('d-none');
    logOutBtn.classList.add('d-none');
  };

  // Проверка пользователя
  const checkAuth = () => {
    const user = JSON.parse(localStorage.getItem('auth'));

    if (user) {
      getData('/profile')
      .then((data) => {
        if (
          (data.login && data.login === user.login) &&
          (data.password && data.password === user.password)
        ) {
          login();
        }
      })
    }

  };

  authBtn.addEventListener('click', () => {
    openModal(modal);
  });

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      closeModal(modal);
    })
  });

  loginBtn.addEventListener('click', () => {
    const loginInput = modal.querySelector('#login-control');
    const passwordInput = modal.querySelector('#password-control');

    const user = {
      login: loginInput.value,
      password: passwordInput.value
    }

    getData('/profile')
      .then((data) => {
        // console.log(data);
        if (
          (data.login && data.login === user.login) &&
          (data.password && data.password === user.password)
        ) {
          // console.log('Success');
          localStorage.setItem('auth', JSON.stringify(data));
          login();
        } else {
          alert('Неверный пароль!')
        }
      })

    // localStorage.setItem('auth', JSON.stringify(user));
    // login();
  });

  logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('auth');

    loginOut();
  })

  // openCardBtn.addEventListener('click', () => {
  //   openModal(cartModal);
  // })

  checkAuth();

}
