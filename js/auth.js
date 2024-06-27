// Проверяем наличие токена доступа в localStorage
if (localStorage.getItem('accessToken')) {
    // Если токен есть, получаем имя пользователя и показываем UI
    const username = 'JohnDoe'; // Предполагаемое имя пользователя
    showAuthenticatedUI(username);
} else {
    // Если токен отсутствует, показываем стандартные кнопки
    const buttonContainer = document.getElementById('headerButtons');
    buttonContainer.innerHTML = ''; // Очищаем содержимое контейнера

    const signInButton = document.createElement('button');
    signInButton.textContent = 'Sing in';
    signInButton.classList.add('header__container__button-1');
    signInButton.onclick = signIn;

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.classList.add('header__container__button-2');
    loginButton.onclick = login;

    buttonContainer.appendChild(signInButton);
    buttonContainer.appendChild(loginButton);
}

// Функция для имитации входа пользователя
function signIn() {
    console.log('Sign in clicked');
}

// Функция для имитации успешной аутентификации и отображения интерфейса пользователя
function login() {
    const username = 'JohnDoe'; // Предполагаемое имя пользователя после аутентификации (замените на реальное имя пользователя)
    localStorage.setItem('accessToken', 'token_example'); // Здесь может быть ваш токен доступа

    // Показываем UI после успешной аутентификации
    showAuthenticatedUI(username);
}

// Функция для показа UI после успешной аутентификации
function showAuthenticatedUI(username) {
    // Находим контейнер для кнопок
    const buttonContainer = document.getElementById('headerButtons');
    
    // Очищаем содержимое контейнера
    buttonContainer.innerHTML = '';

    // Создаём элементы для имени пользователя и кнопки выхода
    const userContainer = document.createElement('div');
    userContainer.classList.add('header__user-container');

    const usernameElement = document.createElement('span');
    usernameElement.textContent = `${username}`;
    usernameElement.classList.add('header__username'); // Добавляем класс для стилизации имени пользователя

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.classList.add('header__logout-button'); // Добавляем класс для стилизации кнопки выхода
    logoutButton.addEventListener('click', handleLogout);

    // Добавляем элементы в DOM
    userContainer.appendChild(usernameElement);
    userContainer.appendChild(logoutButton);
    buttonContainer.appendChild(userContainer);
}

// Функция для обработки выхода (очистка localStorage и восстановление кнопок Sing in и Login)
function handleLogout() {
    localStorage.removeItem('accessToken'); // Удаляем токен доступа или другие данные аутентификации

    // Восстанавливаем изначальное состояние кнопок
    const buttonContainer = document.getElementById('headerButtons');
    buttonContainer.innerHTML = ''; // Очищаем содержимое контейнера

    const signInButton = document.createElement('button');
    signInButton.textContent = 'Sing in';
    signInButton.classList.add('header__container__button-1');
    signInButton.onclick = signIn;

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.classList.add('header__container__button-2');
    loginButton.onclick = login;

    buttonContainer.appendChild(signInButton);
    buttonContainer.appendChild(loginButton);
}
