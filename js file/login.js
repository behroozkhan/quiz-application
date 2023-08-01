// {}-----//------------//THIS CODE FOR LOGIN PAGE------///---------///-------///---------{}
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });



// let userInpLogin = document.querySelectorAll("#username-login")[0];
// let passInpLogin = document.querySelectorAll("#password-login")[0];
// let throwMessage = document.querySelectorAll("#result")[0];
// let loginBtn = document.querySelector('#login-btn');

// loginBtn.addEventListener('click',()=>{

// })

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxa0dR8ym6CC8ZlAmDw9lAI2uqLz5d6io",
  authDomain: "quiz-application-b915d.firebaseapp.com",
  projectId: "quiz-application-b915d",
  storageBucket: "quiz-application-b915d.appspot.com",
  messagingSenderId: "1085238516128",
  appId: "1:1085238516128:web:a27ae6c7f119d03545ecc5",
  measurementId: "G-GVWNYW0KH0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

let userInpLogin = document.querySelectorAll("#username-login")[0];
let passInpLogin = document.querySelectorAll("#password-login")[0];
let throwMessage = document.querySelectorAll("#result")[0];
let loginBtn = document.querySelectorAll("#login-btn")[0];

const loginPage = () => {
  let email = userInpLogin.value.toLowerCase();
  let password = passInpLogin.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user succefully login==>", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


  // Clear input fields
  userInpLogin.value = "";
  passInpLogin.value = "";
}



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("uid==> User Status",uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
loginBtn.addEventListener('click', loginPage)
