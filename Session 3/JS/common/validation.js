export const checkEmail = (email) => {
	if (!email || email.length === 0) {
		return 'Email is required!!';
	}
	return true;
};

export const checkPassword = (password) => {
	if (!password || password.length === 0) {
		return 'Password is required!!';
	} else if (!password.length < 8) {
		return 'Password is not strong enough, password requires at least 8 characters!';
	}
	return true;
};
