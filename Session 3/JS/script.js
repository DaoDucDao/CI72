import LoginScreen from './container/Login/login.js';

const app = document.getElementById('app');

const loginScreen = new LoginScreen();

app.appendChild(loginScreen.render());
