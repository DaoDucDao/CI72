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
		throw error;
	}
}

async function getUserByEmail(email) {
	// Because to functioning with firebase data so we need to try catch it
	// console.log(email);
	try {
		const querySnapshot = await db //this querySnapshot is an array
			.collection('users') //point at the users collection
			.where('email', '==', email)
			.get();

		if (querySnapshot.docs === 0) {
			return null;
		}
		// 		.then((querySnapshot) => {
		// 			querySnapshot.forEach((doc) => {
		// 				// console.log(`${doc.id} => ${doc.data()}`); //this will log out the ID and also the object type of the data
		// 				console.log(doc.data());
		// 			});
		// 		});
		return {
			id: querySnapshot.docs[0].id,
			...querySnapshot.docs[0].data(), // Normally, when we fetch an API, we have to parse the data, but firebase has data() that parse data for us already
		};
	} catch (error) {
		let errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode, errorMessage);
		_noti.error(errorCode, errorMessage);
		throw error;
	}
}

async function updateUser(uid, email, name, phone, imgURL) {
	try {
		const response = await db
			.collection('users')
			.doc(uid)
			.update({ email, name, phone, imgURL });
		console.log(response);
	} catch (error) {
		let errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode, errorMessage);
		throw error;
	}
}

async function createConversation(name, imgURL, desc, users, email) {
	try {
		const response = await db.collection('conversations').add({
			name,
			imgURL,
			description: desc,
			users,
			createdBy: email,
		});
		console.log(response);
	} catch (error) {
		let errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode, errorMessage);
		throw error;
	}
}

export { createUser, getUserByEmail, updateUser, createConversation };
