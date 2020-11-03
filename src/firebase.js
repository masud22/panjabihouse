import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCE9vHG6IOf0D2t41OUXtZ6Qxeq_5T8H0Q",
    authDomain: "panjabi-house.firebaseapp.com",
    databaseURL: "https://panjabi-house.firebaseio.com",
    projectId: "panjabi-house",
    storageBucket: "panjabi-house.appspot.com",
    messagingSenderId: "885404093364",
    appId: "1:885404093364:web:847003bbd0e2cdc603c0e1",
    measurementId: "G-TFQ1RZFJK6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };