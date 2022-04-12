import ButtonComponent from '../../components/button.js';
import InputComponent from '../../components/input.js';
import { checkEmail, checkPassword } from '../../common/validation.js';
class LoginScreen {
	$container;
	$title;
	$submitButton;

	$email;
	$password;
	$form;

	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add();

		this.$email = new InputComponent(
			'Email address',
			'email',
			'login-e',
			'email'
		);

		this.$password = new InputComponent(
			'Password',
			'password',
			'login-p',
			'password'
		);

		this.$submitButton = new ButtonComponent(
			'Login',
			['btn', 'btn-success'],
			'submit'
		);

		this.$form = document.createElement('form');
		this.$form.classList.add();
		this.$form.addEventListener('submit', this.handleSubmit);

		this.$title = document.createElement('div');
		this.$title.classList.add();
		this.$title.innerText = 'Welcome to DaeDalus Community';
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const isError = false;
		const { email, password } = e.target;
		console.log(password.value);
		// if (!checkEmail(email.value)) {
		// 	this.$email.setError(checkEmail(email.value));
		// 	isError = true;
		// }
		// if (!checkPassword(password.value)) {
		// 	this.$password.setError(checkPassword(email.value));
		// 	isError = true;
		// }
		// if (!isError) {
		// 	console.log('Success');
		// }
	};

	render() {
		this.$form.append(
			this.$title,
			this.$email.render(),
			this.$password.render(),
			this.$submitButton.render()
		);
		this.$container.appendChild(this.$form);

		return this.$container;
	}
}

export default LoginScreen;
