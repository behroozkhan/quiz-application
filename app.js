






let nameInp = document.querySelectorAll("#name")[0];
let userInp = document.querySelectorAll("#username")[0];
let emailInp = document.querySelectorAll("#email")[0];
let passInp = document.querySelectorAll("#password")[0];
let cPassInp = document.querySelectorAll("#c-password")[0];
let inpValueList;
let userSignUpDataList;
let userEntryList = [];

function signUp() {
  let nameInpValue = nameInp.value.toLowerCase();
  let userInpValue = userInp.value.toLowerCase();
  let emailInpValue = emailInp.value.toLowerCase();
  let passInpValue = passInp.value;
  let cPassInpValue = cPassInp.value;

  inpValueList = `${nameInpValue} ${userInpValue} ${emailInpValue} ${passInpValue} ${cPassInpValue}`;
  console.log(inpValueList);

//   let userlistObj = {
//     userFullName: nameInpValue,
//     userUsername: userInpValue,
//     userEmail: emailInpValue,
//     userPassword: passInpValue,
//     userCnfrmPassword: cPassInpValue,
//   };

//   nameInp.value = "";
//   userInp.value = "";
//   emailInp.value = "";
//   passInp.value = "";
//   cPassInp.value = "";
//   localSafeData(userlistObj);
}
// function localSafeData(userlistObj) {
//   userSignUpDataList = localStorage.getItem("userSignupDataList");
//   if (userSignUpDataList) {
//     userEntryList = JSON.parse(userSignUpDataList);
//   }
//   userEntryList.push(userlistObj);
//   localStorage.setItem("userSignupDataList", JSON.stringify(userEntryList));
// }
