import LoginScreen from './containers/Login/login.js';
import RegisterScreen from './containers/Register/register.js';
import CheckEmailScreen from './containers/CheckEmail/checkEmail.js';
import { MainScreen } from './containers/Main/main.js';

// const app = document.getElementById('app');

// const loginScreen = new LoginScreen();
// // const registerScreen = new RegisterScreen();

// app.appendChild(loginScreen.render());

class App {
	$activeScreen;

	constructor() {
		this.checkLogined();
	}

	checkLogined() {
		const emailLogined = localStorage.getItem('emailLogined');
		let screen;
		if (emailLogined) {
			screen = new MainScreen();
		} else {
			screen = new LoginScreen();
		}
		this.changeActiveScreen(screen); // setting the main screen active if we have already signed in
	}

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
// const signIn = new LoginScreen(); // this create a new screen
const app = new App();
// const checkEmailScreen = new CheckEmailScreen();
// app.changeActiveScreen(signIn); // and this put the that previous screen on the page
export default app;
