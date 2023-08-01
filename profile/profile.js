import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getFirestore,
  collection, query, where, getDocs, doc, updateDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxa0dR8ym6CC8ZlAmDw9lAI2uqLz5d6io",
    authDomain: "quiz-application-b915d.firebaseapp.com",
    projectId: "quiz-application-b915d",
    storageBucket: "quiz-application-b915d.appspot.com",
    messagingSenderId: "1085238516128",
    appId: "1:1085238516128:web:a27ae6c7f119d03545ecc5",
    measurementId: "G-GVWNYW0KH0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


const fileInputBtn = document.querySelectorAll("#file-input")[0];
const userProfile = document.querySelectorAll("#user-profile")[0];
const updateProfileBtn = document.querySelectorAll("#update-profile")[0];
// const email = document.querySelectorAll("#email")[0];
// const userName = document.getElementById("name");



onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("uid==>", uid);
    console.log("location==>", location.href);
    getUserCurrentData(uid, user.email);
    document.getElementById("email").innerHTML = user.email;
    // document.getElementById('name').innerHTML = user.userUsername;
    // console.log("user==>", user.userFullName);

    // ...
  } else {
    console.log("user sign out");
    // User is signed out
    // ...
  }
});

const getUserCurrentData = async (uid,email) => {

  console.log("email==>",email)  

  const q = query(collection(db, "users"), where("email", "==", email));
console.log("q==>",q);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {

    console.log(doc.id, " => ", doc.data());
    document.getElementById('name').innerHTML = doc.data().name; 
    document.getElementById('userName').innerHTML = doc.data().userName; 

  });

};



let updateprofile = () => {




}
// ---------------------- This File Work Is uploading a file    ---------------------//

// update Profile //

fileInputBtn.addEventListener("change", () => {
  console.log(fileInputBtn.files[0])
  userProfile.src = URL.createObjectURL(fileInputBtn.files[0])
})

const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const mountainImagesRef = ref(storage, `images/${file.files[0].name}`);
    const uploadTask = uploadBytesResumable(mountainImagesRef, file.files[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

//----------------------  This Function for logout Current User --------------------///
const logoutBtn = document.querySelectorAll("#logout-btn")[0];
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      // let indexProfile = document.querySelectorAll("#index-profile")[0];
      // indexProfile.style.display = "none";
      location.href = "../index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log("Error while signing out:", error);
    });
});