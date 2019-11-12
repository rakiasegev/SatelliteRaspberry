import firebase from 'firebase';
import "firebase/auth";

const app  = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "satelliteraspberry.firebaseapp.com",
    databaseURL: "https://satelliteraspberry.firebaseio.com",
    projectId: "satelliteraspberry",
    storageBucket: "satelliteraspberry.appspot.com",
    messagingSenderId: "500967322458",
    appId: "1:500967322458:web:c99fc67e7bcd2e11ebf963",
    measurementId: "G-L42S06X6X5"
  });

export const storage = firebase.storage().ref()

export default app;
