// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgKzk3oekSRmzRwv0kqPd3KKXF8wGVuoU",
  authDomain: "tp1-aw.firebaseapp.com",
  projectId: "tp1-aw",
  storageBucket: "tp1-aw.appspot.com",
  messagingSenderId: "249938759930",
  appId: "1:249938759930:web:c93eb9c17a87b06e1a7943",
  measurementId: "G-JDE7YH2QVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);