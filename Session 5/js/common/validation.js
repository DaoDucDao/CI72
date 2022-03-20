export const checkEmail = (email) => {
	if (!email || email.length === 0) {
		// return true;
		return 'Email is required!';
	}
	const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
	if (regex.test(email)) {
		// return true;
		return 'Email is Invalid!';
	}
	// return false;
	return true;
};
export const checkPassword = (password) => {
	if (!password || password.length === 0) {
		// return true;
		return 'Password is required!';
	}
	if (password.length < 8) {
		return 'Password is not strong enough!!';
	}
	// return false;
	return true;
};

export const checkPhone = (phone) => {
	if (!phone || phone.length === 0) {
		return 'Phone number is required!';
	}
	const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
	if (regex.test(phone)) {
		return 'Invalid phone number!!';
	}
};
