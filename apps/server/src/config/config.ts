import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase-admin/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAmDoYp5LcZuRbQThSjDp3Z8HYH1bh8CiQ',
  authDomain: 'angular-todo-55f66.firebaseapp.com',
  projectId: 'angular-todo-55f66',
  storageBucket: 'angular-todo-55f66.appspot.com',
  messagingSenderId: '799951733878',
  appId: '1:799951733878:web:979ea1f93e6829635b0b57',
  measurementId: 'G-FVBTTJ1SF8',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const Task = db.collection('Tasks');

export { db };

export default Task;
