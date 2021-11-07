import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCfSCkK1E7mGeN1z4wcqPLPI6Hfg7OJ7s',
  authDomain: 'uber-clone-03.firebaseapp.com',
  projectId: 'uber-clone-03',
  storageBucket: 'uber-clone-03.appspot.com',
  messagingSenderId: '270350147700',
  appId: '1:270350147700:web:12a7fa2999cc64f21bb121',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
