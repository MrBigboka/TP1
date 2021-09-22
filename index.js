import firebase from 'firebase/compat/app';

//import { getDatabase } from "firebase/database";

const firebaseConfig = {

  apiKey: "AIzaSyBgKzk3oekSRmzRwv0kqPd3KKXF8wGVuoU",

  authDomain: "tp1-aw.firebaseapp.com",

  databaseURL: "https://tp1-aw-default-rtdb.firebaseio.com",

  projectId: "tp1-aw",

  storageBucket: "tp1-aw.appspot.com",

  messagingSenderId: "249938759930",

  appId: "1:249938759930:web:c93eb9c17a87b06e1a7943",

  measurementId: "G-JDE7YH2QVV"

};


const app = initializeApp(firebaseConfig);
//const database = getDatabase(firebaseConfig);

console.log(app)

/*const updatebtn = document.getElementById("updatebtn")
const addBtn = document.getElementById("addbtn")
const deletebtn = document.getElementById("deletebtn")
const email = document.getElementById("email")
const password = document.getElementById("password")

addBtn.addEventListener("click", () => {
  database.ref('/users/1/').set({
    Email: email.value,
    Password: password.value
  })
});*/