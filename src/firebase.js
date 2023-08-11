
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

import "firebase/compat/storage";
  
  // Import the functions you need from the SDKs you need

  //import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional   below this just the config

  const firebaseConfig = {

    apiKey: "AIzaSyB0kDLzzhbiyUAiMCaCZzu_XpuCJByVJDQ",

    authDomain: "disno-plus.firebaseapp.com",

    projectId: "disno-plus",

    storageBucket: "disno-plus.appspot.com",

    messagingSenderId: "310941709266",

    appId: "1:310941709266:web:4be30399794d561b0e0e0b",

    measurementId: "G-ZW6115M4ME"

  };


  // Initialize Firebase

  //const app = initializeApp(firebaseConfig);

  //const analytics = getAnalytics(app);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;