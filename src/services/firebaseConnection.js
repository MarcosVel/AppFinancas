import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyDVT6xB5Pbzx-uET71Cvl02NvqgSJfG16o",
  authDomain: "appfinancas-b3391.firebaseapp.com",
  projectId: "appfinancas-b3391",
  storageBucket: "appfinancas-b3391.appspot.com",
  messagingSenderId: "821910640951",
  appId: "1:821910640951:web:e881ad152a06111807e2b2",
  measurementId: "G-91ETHCWZYW"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;