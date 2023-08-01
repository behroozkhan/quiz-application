
// []-------//------//-----//THIS CODE FOR SIGN UP PAGE Using Firbase------///------///-----///--------[]

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {getAuth,  signInWithEmailAndPassword ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

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
const auth = getAuth(app);
const db = getFirestore(app);






let nameInp = document.querySelectorAll("#name")[0];
let userInp = document.querySelectorAll("#username")[0];
let emailInp = document.querySelectorAll("#email")[0];
let passInp = document.querySelectorAll("#password")[0];
let cPassInp = document.querySelectorAll("#c-password")[0];
// let inpValueList;
// let userSignUpDataList;
// let userEntryList = [];
let signUpBtn = document.querySelector("#signup-btn");
signUpBtn.addEventListener("click", () => {
  let nameInpValue = nameInp.value.toLowerCase();
  let userInpValue = userInp.value.toLowerCase();
  let emailInpValue = emailInp.value.toLowerCase();
  let passInpValue = passInp.value;
  let cPassInpValue = cPassInp.value;
  
  let name = nameInp.value.toLowerCase();
  let userName = userInp.value.toLowerCase();
  let email = emailInp.value.toLowerCase();
  let password = passInp.value;
  let cPassword = cPassInp.value;



  // inpValueList = `${nameInpValue} ${userInpValue} ${emailInpValue} ${passInpValue} ${cPassInpValue}`;

  let userlistObj = {
    name,
    userName,
    email,
    password,
    cPassword
  };
  
  createUserWithEmailAndPassword(auth, userlistObj.userEmail, userlistObj.userPassword)
    .then(async(userCredential) => {
      const user = userCredential.user;
      try {
        const docRef = await addDoc(collection(db, "users"), {
          ...userlistObj,
          uid : user.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage==>", errorMessage);
    });

      

  nameInp.value = "";
  userInp.value = "";
  emailInp.value = "";
  passInp.value = "";
  cPassInp.value = "";
});


