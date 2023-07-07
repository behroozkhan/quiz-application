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


let userInpLogin = document.querySelector("#username-login");
let passInpLogin = document.querySelector("#password-login");
let throwMessage = document.querySelector("#result");

function loginPage() {
  let username = userInpLogin.value.toLowerCase();
  let password = passInpLogin.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
      // Login success
      let user = userCredential.user;
      console.log("Login successful:", user);

      // Redirect to desired page or perform other actions
      window.location.href = "./html file/quiz.html";
    })
    .catch((error) => {
      // Login error
      let errorCode = error.code;
      let errorMessage = error.message;
      console.error("Login error:", errorCode, errorMessage);

      // Display error message
      userInpLogin.style.border = "red";
      throwMessage.innerHTML = "Username or Password Incorrect!";
    });

  // Clear input fields
  userInpLogin.value = "";
  passInpLogin.value = "";
}