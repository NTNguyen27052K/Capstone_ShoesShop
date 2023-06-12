function checkInputOnclick(dataInput, id, idErr) {
  if (dataInput) {
    document.getElementById(id).classList.remove("is-invalid");
    document.getElementById(idErr).style.display = "none";
  } else {
    document.getElementById(id).classList.add("is-invalid");
    document.getElementById(idErr).style.display = "block";
  }
}
function checkInputOnchange(id, idErr, checkValidation) {
  let dataInput = document.getElementById(id).value;

  if (dataInput && checkValidation) {
    document.getElementById(id).classList.remove("is-invalid");
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(id).classList.add("is-invalid");
    document.getElementById(idErr).style.display = "block";
    return false;
  }
}
// check email
function checkEmail(id) {
  let dataInput = document.getElementById(id).value;
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let tempEmail = regexEmail.test(dataInput);
  return tempEmail;
}
// check password
function checkPassWord(id) {
  let dataInput = document.getElementById(id).value;
  var regexPassWord =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  var tempPass = regexPassWord.test(dataInput);
  return tempPass;
}
// check password confirm
function checkPassConfirm() {
  if (
    document.getElementById("idPass").value ==
    document.getElementById("idPassConfirm").value
  ) {
    return true;
  } else {
    return false;
  }
}
// check user name không chứa ký tự đặt biệt không chứa khoảng trắng, số
function checkUserName(id) {
  let dataInput = document.getElementById(id).value;
  var regexUserName = /^[a-zA-Z\-]+$/;
  var tempPass = regexUserName.test(dataInput);
  return tempPass;
}
// check phone number
function checkPhoneNumbers(id) {
  let dataInput = document.getElementById(id).value;
  var regexPhoneNumbers = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  var tempPass = regexPhoneNumbers.test(dataInput);
  return tempPass;
}
// Check gender
function checkGender() {
  let temp = 0;
  const gender = document.querySelectorAll(".gender");
  if (gender[0].checked) {
    document.getElementById("errGender").style.display = "none";
    temp = 1;
    return true;
  }
  if (gender[1].checked) {
    document.getElementById("errGender").style.display = "none";
    temp = 1;
    return false;
  }
  if (temp == 0) {
    document.getElementById("errGender").style.display = "block";
    return -1;
  }
}
