import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5b6FNyy6X_bRKL_2YGCN2LgZ_p23d6rA",
    authDomain: "crichiss.firebaseapp.com",
    projectId: "crichiss",
    storageBucket: "crichiss.appspot.com",
    messagingSenderId: "647084327853",
    appId: "1:647084327853:web:4562f4a21ceae2e0355724",
    measurementId: "G-Y80CCRZCHW"
});

const db = firebaseApp.firestore();

export default db;
