// {}-----//------------//THIS CODE FOR LOGIN PAGE------///---------///-------///---------{}
let userInpLogin = document.querySelectorAll("#username-login")[0];
let passInpLogin = document.querySelectorAll("#password-login")[0];
let throwMessage = document.querySelectorAll("#result")[0];
let loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click',()=>{

})



// function loginPage(userlistObj) {
//   let userNameLoginValue = userInpLogin.value.toLowerCase();
//   let passLoginValue = passInpLogin.value.toLowerCase();
//   let emailLoginValue = emailInp;
//   // let emailLoginValue = emailInp.value.toLowerCase();

//   let matchinglocalList = localStorage.getItem("userSignupDataList");
//   let userEnteringList = [];
//   if (matchinglocalList) {
//     let userEnteringList = JSON.parse(matchinglocalList);

//     for (let i = 0; i < userEnteringList.length; i++) {
//       // if (
//       //   (userNameLoginValue === userEnteringList[i].userUsername.toLowerCase()) &&
//       //   (passLoginValue === userEnteringList[i].userPassword) ||
//       //   (emailLoginValue === userEnteringList[i].userEmail.toLowerCase() ||(passLoginValue === userEnteringList[i].userPassword))
//       // ) {
//       //   console.log("Welcome To Our Website");
//       //   location.href = ".index.html";
//       //   return
//       // }
//       if (
//         (userNameLoginValue === userEnteringList[i].userUsername.toLowerCase()) && (passLoginValue === userEnteringList[i].userPassword) ||
//         (emailLoginValue === userEnteringList[i].userEmail.toLowerCase()) &&
//           (passLoginValue === userEnteringList[i].userPassword))
//        {
//         console.log("Welcome To Our Website");
//         // windows.location.href = "./html file/quiz.html";
//         // return;
//       }
//       else{
//         userInpLogin.style.border = "red"
//         throwMessage.innerHTML = "username Or Password Incorrect!"
//       }
//     }
//     // windows.location.href = "./html file/quiz.html";

//   }
//   userInpLogin.value = "";
//   passInpLogin.value = "";
// }

// let userInpLogin = document.querySelectorAll("#username-login")[0];
// let passInpLogin = document.querySelectorAll("#password-login")[0];
// let throwMessage = document.querySelectorAll("#result")[0];

function loginPage(userlistObj) {
  let userNameLoginValue = userInpLogin.value.toLowerCase();
  let passLoginValue = passInpLogin.value.toLowerCase();
  // let emailLoginValue = emailInp.value.toLowerCase();

  // let matchinglocalList = localStorage.getItem("userSignupDataList");
  // let userEnteringList = [];
  // if (matchinglocalList) {
  //   let userEnteringList = JSON.parse(matchinglocalList);

  //   for (let i = 0; i < userEnteringList.length; i++) {
  //     if (
  //       (userNameLoginValue ===
  //         userEnteringList[i].userUsername.toLowerCase() &&
  //         passLoginValue === userEnteringList[i].userPassword) ||
  //       (emailLoginValue === userEnteringList[i].userEmail.toLowerCase() &&
  //         passLoginValue === userEnteringList[i].userPassword)
  //     ) {
  //       console.log("Welcome To Our Website");
  //       window.location.href = "./html file/quiz.html";
  //       return;
  //     } else {
  //       userInpLogin.style.border = "red";
  //       throwMessage.innerHTML = "Username or Password Incorrect!";
  //     }
  //   }
  // }
  userInpLogin.value = "";
  passInpLogin.value = "";
}

// // []-------//------//-----//THIS CODE FOR SIGN UP PAGE Using Firbase------///------///-----///--------[]

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import {getAuth,  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDxa0dR8ym6CC8ZlAmDw9lAI2uqLz5d6io",
//   authDomain: "quiz-application-b915d.firebaseapp.com",
//   projectId: "quiz-application-b915d",
//   storageBucket: "quiz-application-b915d.appspot.com",
//   messagingSenderId: "1085238516128",
//   appId: "1:1085238516128:web:a27ae6c7f119d03545ecc5",
//   measurementId: "G-GVWNYW0KH0",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// let nameInp = document.querySelectorAll("#name")[0];
// let userInp = document.querySelectorAll("#username")[0];
// let emailInp = document.querySelectorAll("#email")[0];
// let passInp = document.querySelectorAll("#password")[0];
// let cPassInp = document.querySelectorAll("#c-password")[0];
// // let inpValueList;
// // let userSignUpDataList;
// // let userEntryList = [];
// let signUpBtn = document.querySelector("#signup-btn");
// signUpBtn.addEventListener("click", () => {
//   let nameInpValue = nameInp.value.toLowerCase();
//   let userInpValue = userInp.value.toLowerCase();
//   let emailInpValue = emailInp.value.toLowerCase();
//   let passInpValue = passInp.value;
//   let cPassInpValue = cPassInp.value;

//   // inpValueList = `${nameInpValue} ${userInpValue} ${emailInpValue} ${passInpValue} ${cPassInpValue}`;

//   let userlistObj = {
//     userFullName: nameInpValue,
//     userUsername: userInpValue,
//     userEmail: emailInpValue,
//     userPassword: passInpValue,
//     userCnfrmPassword: cPassInpValue,
//   };
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, userlistObj.userEmail, userlistObj.userPassword)
//     .then(async(userCredential) => {
//       const user = userCredential.user;
//       try {
//         const docRef = await addDoc(collection(db, "users"), {
//           ...userlistObj,
//           uid : user.uid
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("errorMessage==>", errorMessage);
//     });

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });



//   nameInp.value = "";
//   userInp.value = "";
//   emailInp.value = "";
//   passInp.value = "";
//   cPassInp.value = "";
// });

/*

//////////////////---------------------------------------!!!!!!!!!!----------------------
              
                        ````````HTML Quiz Section!``````

////////////////``````````========////////////////`````````````======////////---------------


*/
let htmlQuizQuestions = [
  {
    question: "What does HTML stand for?",
    option1: "Hyperlinks and Text Markup Language",
    option2: "Hypertext Markup Language",
    option3: "Home Tool Markup Language",
    option4: "Hypermedia and Text Markup Language",
    correctOption: "Hypertext Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    option1: "The World Wide Web Consortium ",
    option2: "Internet Engineering Task Force",
    option3: "Web Hypertext Application Technology Working",
    option4: "Unicode Consortium",
    correctOption: "The World Wide Web Consortium",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    option1: "<heading>",
    option2: "<h6>",
    option3: "<h1>",
    option4: "<h3>",
    correctOption: "<h1>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    option1: "<linebreak>",
    option2: "<br>",
    option3: "<break>",
    option4: "<newline>",
    correctOption: "<br>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    option1: '<body bg="yellow">',
    option2: "<background>yellow</background>",
    option3: '<body style="background-color:yellow;">',
    option4: "background-color: red;",
    correctOption: '<body style="background-color:yellow;">',
  },
  {
    question: "Choose the correct HTML element to define important text:",
    option1: "<strong>",
    option2: "<b>",
    option3: "<i>",
    option4: "<imp>",
    correctOption: "<strong>",
  },
  {
    question: "Choose the correct HTML element to define emphasized text:",
    option1: "<italic>",
    option2: "<i>",
    option3: "<em>",
    option4: "<bold>",
    correctOption: "<em>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    option1: "<a>http://www.w3schools.com</a>",
    option2: '<a href="http://www.w3schools.com">W3Schools</a>',
    option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    option4: '<a script="http://www.w3schools.com">W3Schools.com</a>',
    correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
  },
  {
    question: "Which character is used to indicate an end tag in HTML?",
    option1: "*",
    option2: "/",
    option3: "<",
    option4: ">",
    correctOption: "/",
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    option1: '<a href="url" target="new">',
    option2: '<a href="url" new>',
    option3: '<a href="url" target="_blank">',
    option4: '<a href="url" target="_new tab">',
    correctOption: '<a href="url" target="_blank">',
  },
];

let container = document.querySelectorAll("#bk-quiz")[0];
let ques = document.querySelector("#question");
let optionsDiv = document.querySelectorAll(".option-div")[0];
let option1 = document.querySelectorAll("#option1")[0];
let option2 = document.querySelectorAll("#option2")[0];
let option3 = document.querySelectorAll("#option3")[0];
let option4 = document.querySelectorAll("#option4")[0];
let myDocument = document.documentElement;
let mainContainer = document.querySelectorAll(".main-header-container")[0];
let quizCardDiv = document.querySelectorAll(".card-quiz-template")[0];
let index = 0;
let score = 0;
let btnNext = document.querySelectorAll("#next-btn")[0];

// let quizDiv = document.querySelectorAll(".bk-quiz-container")[0];
function closeDiv() {
  container.style.display = "none";
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozExitFullscreen) {
    document.mozExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
let btnDisplay = document.querySelectorAll(".btn")[0];
let whichLanguage;
function htmlQuiz(userPick) {
  btnDisplay.style.display = "none";
  mainContainer.style.display = "none";
  // mainContainer.style.height = '50vh'
  // container.style.display = "none";
  // quizCardDiv.style.display = 'none';
  container.style.display = "block";
  optionsDiv.style.display = "block";

  if (index > htmlQuizQuestions.length - 1) {
    console.log("Questions End It.");
    console.log((score / htmlQuizQuestions.length) * 100);
  } else {
    ques.innerText = `Q:${htmlQuizQuestions[index].question}`;
    option1.innerText = `i: ${htmlQuizQuestions[index].option1}`;
    option2.innerText = `ii: ${htmlQuizQuestions[index].option2}`;
    option3.innerText = `iii: ${htmlQuizQuestions[index].option3}`;
    option4.innerText = `iv: ${htmlQuizQuestions[index].option4}`;
    index++;
    htmlFunctionBtn.style.display = "none";
  }
}

let htmlFunctionBtn = document.querySelectorAll("#html-button")[0];
let nextBtn = document.querySelectorAll("#button-bk")[0];

function nextQuestion(userPick) {
  btnDisplay.style.display = "none";

  let radioValue = document.querySelectorAll(".answer-value");
  for (let i = 0; i < radioValue.length; i++) {
    if (radioValue[i].checked) {
      let selectedOption = radioValue[i].value;
      userPick = htmlQuizQuestions[index - 1][`option${radioValue[i].value}`];
      let correctAnwer = htmlQuizQuestions[index - 1].correctOption;
      if (userPick === correctAnwer) {
        score++;
      }
    }
    radioValue[i].checked = false;
  }
  nextBtn.disabled = true;

  htmlQuiz();
}

function enableBtn() {
  nextBtn.disabled = false;
}

function openQuizWindow() {
  let newWindow = window.open("quiz.html", "_blank");
  if (newWindow) {
    newWindow.onload = function () {
      newWindow.htmlQuizQuestions = htmlQuizQuestions;
      newWindow.currentQuestionIndex = currentQuestionIndex;
      newWindow.renderQuestion = renderQuestion;
      newWindow.checkAnswer = checkAnswer;
      newWindow.startQuiz = startQuiz;
    };
  }
}
