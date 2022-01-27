// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB0YUUMX6iTSPE5CBA1yX1U7OKJXhhcPuE",
//   authDomain: "osamaflix-17d99.firebaseapp.com",
//   projectId: "osamaflix-17d99",
//   storageBucket: "osamaflix-17d99.appspot.com",
//   messagingSenderId: "49853435923",
//   appId: "1:49853435923:web:6e7086e4b12598735a6fe6",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import * as auth from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0YUUMX6iTSPE5CBA1yX1U7OKJXhhcPuE",
  authDomain: "osamaflix-17d99.firebaseapp.com",
  projectId: "osamaflix-17d99",
  storageBucket: "osamaflix-17d99.appspot.com",
  messagingSenderId: "49853435923",
  appId: "1:49853435923:web:6e7086e4b12598735a6fe6",
};

// if (!firebase.apps.length) {
// firebfase.initializeApp(firebaseConfig);
// // }
// export const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const firebaseauth = auth;
