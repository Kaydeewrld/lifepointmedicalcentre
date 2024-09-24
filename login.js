// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyB9Ce5u1slo74AkTTyM1jpm0OdT-kz-Soo",
    authDomain: "staff-portal-abc7f.firebaseapp.com",
    projectId: "staff-portal-abc7f",
    storageBucket: "staff-portal-abc7f.appspot.com",
    messagingSenderId: "669845563390",
    appId: "1:669845563390:web:5466496f45a278f6fe42af"
  };
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
var email = document.getElementById('email').value; // Replace with your email input's ID
var password = document.getElementById('password').value;


const email = document.getElementById('email').value; 
const password = document.getElementById('password').value; 
const submit = document.getElementById('submit');

submit.addEventListener("click", function (event){
    event.preventDefault();
    alert(5)
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

