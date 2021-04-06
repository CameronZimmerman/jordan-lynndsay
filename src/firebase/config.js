import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBhIIbm11ZW6GUe5aVJIB3X9jcSUWWuSPQ",
  authDomain: "jordan-lynndsay-gallery.firebaseapp.com",
  projectId: "jordan-lynndsay-gallery",
  storageBucket: "jordan-lynndsay-gallery.appspot.com",
  messagingSenderId: "918845075208",
  appId: "1:918845075208:web:facba02399bc3babeb86bd",
  measurementId: "G-D6BCQ5RTGP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
export { projectStorage };
