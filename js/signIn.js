let addUser = () => {
  var valid = true;
  valid =
    checkInputOnchange("idEmail", "errEmail", checkEmail("idEmail")) &
    checkInputOnchange("idPass", "errPass", checkPassWord("idPass")) &
    checkInputOnchange(
      "idPassConfirm",
      "errPassConfirm",
      checkPassConfirm(idPassConfirm)
    ) &
    checkInputOnchange(
      "idUserName",
      "errUserName",
      checkUserName("idUserName")
    ) &
    checkInputOnchange("idPhone", "errPhone", checkPhoneNumbers("idPhone"));

  if (checkGender() == -1) {
    return;
  }
  if (!valid) {
    return;
  }

  let user = new User();

  user.email = document.getElementById("idEmail").value;

  user.password = document.getElementById("idPass").value;

  user.name = document.getElementById("idUserName").value;

  const gender = document.querySelectorAll(".gender");
  if (gender[0].checked) {
    user.gender = true;
  }
  if (gender[1].checked) {
    user.gender = false;
  }

  user.phone = document.getElementById("idPhone").value;

  // console.log(user);

  // gọi api themSinhVien để thêm người dùng vào
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: user,
  });

  promise.then(function (res) {
    // console.log(res.data.content.name);
    console.log(res);
    if (res.status == 200) {
      // đẩy dữ liệu lấy được xuống local
      localStorage.setItem("infoUser", JSON.stringify(res.data.content));
      window.location.href = "./../index.html";
    }
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
