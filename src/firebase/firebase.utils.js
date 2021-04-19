import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDMT9J4-g1Mt5_s69VSWjwKxI3HAumUeQM',
	authDomain: 'crwn-db-d3dcc.firebaseapp.com',
	projectId: 'crwn-db-d3dcc',
	storageBucket: 'crwn-db-d3dcc.appspot.com',
	messagingSenderId: '462057894909',
	appId: '1:462057894909:web:013bece4804a5084bc1f94',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
