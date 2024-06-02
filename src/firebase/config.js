import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2C_0Qzl8MiLWf0-sLrgYoPVh9qiYSJ9Y",
  authDomain: "fir-1b5ab.firebaseapp.com",
  projectId: "fir-1b5ab",
  storageBucket: "fir-1b5ab.appspot.com",
  messagingSenderId: "608282166167",
  appId: "1:608282166167:web:7aedc290dfa872c0f0fad2",
  measurementId: "G-SPDH025VKC"
};
  const firebase= initializeApp(firebaseConfig);
export { firebase };