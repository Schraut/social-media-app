import firebase from 'firebase';
import 'firebase/auth';

// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyCfjYt2dL2XsF3E7QXvk6rNzHp0DqCt0UA',
  authDomain: 'social-media-app-84fa7.firebaseapp.com',
  projectId: 'social-media-app-84fa7',
  storageBucket: 'social-media-app-84fa7.appspot.com',
  messagingSenderId: '1086159032989',
  appId: '1:1086159032989:web:e08afbe3750b8af7083a74',
};

firebase.initializeApp(firebaseConfig);
// https://firebase.google.com/docs/web/setup#available-libraries

export const auth = firebase.auth();

// Todo
// Firestore not setup yet
// export const firestore = firebase.firestore();
export default firebase;
