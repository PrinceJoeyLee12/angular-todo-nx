import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase-admin/firestore';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const Task = db.collection('Tasks');

export { db };

export default Task;
