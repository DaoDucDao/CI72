import db from './fireBase.js';
import * as _noti from '../common/notify.js';

async function createUser(email, password, name, phone, imgURL) {
	try {
		const response = await db.collection('users').add({
			//create a collection called 'users'
			email,
			password,
			name,
			phone,
			imgURL, // if the name and the value are identical, we can just do this for short
		});
	} catch (error) {
		let errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode, errorMessage);
		_noti.error(errorCode, errorMessage);
	}
}

async function getUserByEmail(email) {
	db.collection('users') //point at the users collection
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(`${doc.id} => ${doc.data()}`);
			});
		});
}

export { createUser, getUserByEmail };
