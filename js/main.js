const authBtn = document.getElementById('open-auth-btn'),
      openCardBtn = document.getElementById('open-cart-btn'),
      logOutBtn = document.getElementById('logout-btn'),
      modal = document.getElementById('auth-modal'),
      closeBtns = modal.querySelectorAll('.close-btn'),
      loginBtn = modal.querySelector('.login-btn');

// Открытие модального окна
const openModal = () => {
  modal.classList.add('d-block');

  setTimeout(() => {
    modal.classList.add('show');
  }, 500)
};

// Закрытие модального окна
const closeModal = () => {
  modal.classList.remove('show');

  setTimeout(() => {
    modal.classList.remove('d-block');
  }, 500)
};

// Авторизация пользователя
const login = () => {
  authBtn.classList.add('d-none');
  openCardBtn.classList.remove('d-none');
  logOutBtn.classList.remove('d-none');
  closeModal();
};

// Выход пользователя
const loginOut = () => {
  authBtn.classList.remove('d-none');
  openCardBtn.classList.add('d-none');
  logOutBtn.classList.add('d-none');
};

// Проверка пользователя
const checkAuth = () => {
  if (JSON.parse(localStorage.getItem('auth'))) {
    login();
  }
};

authBtn.addEventListener('click', openModal);

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', closeModal)
});

loginBtn.addEventListener('click', () => {
  const loginInput = modal.querySelector('#login-control');
  const passwordInput = modal.querySelector('#password-control');

  const user = {
    login: loginInput.value,
    password: passwordInput.value
  }

  localStorage.setItem('auth', JSON.stringify(user));
  login();
});

logOutBtn.addEventListener('click', () => {
  localStorage.removeItem('auth');

  loginOut();
})

checkAuth();
