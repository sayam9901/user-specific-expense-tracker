import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB4G4P1qH3Q4K2HNrvuwIELy7B3gu1SjPQ",
    authDomain: "expense-user.firebaseapp.com",
    projectId: "expense-user",
    storageBucket: "expense-user.appspot.com",
    messagingSenderId: "377460698567",
    appId: "1:377460698567:web:75dd4b69aff6c1b11bfde2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };