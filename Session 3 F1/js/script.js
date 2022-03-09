import LoginScreen from './containers/Login/login.js';
import RegisterScreen from './containers/Register/register.js';
import CheckEmailScreen from './containers/CheckEmail/checkEmail.js';

// const app = document.getElementById('app');

// const loginScreen = new LoginScreen();
// // const registerScreen = new RegisterScreen();

// app.appendChild(loginScreen.render());

class App {
	$activeScreen;

	constructor() {}
	changeActiveScreen(screen) {
		const appEle = document.getElementById('app');
		if (appEle) {
			if (this.$activeScreen) {
				appEle.innerHTML = '';
			}
			this.$activeScreen = screen;
			appEle.appendChild(screen.render());
		}
	}
}
const signUp = new RegisterScreen();
const app = new App();
const checkEmailScreen = new CheckEmailScreen();
app.changeActiveScreen(signUp);
export default app;
