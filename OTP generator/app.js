const otpVerifyBtn = document.querySelector(".verify-OTP-Btn");
const otpInput = document.querySelector(".otp-input");

otpVerifyBtn.addEventListener("click", () => {

    let obj = {
        otpInput: otpInput.value,
    }

    if (otpInput.value === '123456') {
        let data = JSON.parse(localStorage.getItem('data')) || [];
        data.push(obj);

        localStorage.setItem('data', JSON.stringify(data));
        // alert('OTP varified')
    } else {
        alert('invalid OTP');
    }
});

// localStorage.clear();

// console.log((Math.floor(100000 + Math.random() * 900000)));

// ---------------------------- Section on click "LOGIN" starts here ---------------------------- //

const login = document.getElementById("login");
const login_click = document.getElementById("login_click");
const signup_btn = document.querySelector(".signup_btn");
const signup_click = document.getElementById("signup_click");
const otpLogin = document.querySelector(".otp_login");
const otpLoginInside = document.querySelector(".otp_login_inside");
const otpAnchor = document.querySelector(".otp_anchor");
const plus = document.querySelector(".plus");
const passwordLogin = document.querySelector(".password_login");
const passwordLoginInside = document.querySelector(".password_login_inside");
const passwordAnchor = document.querySelector(".password_anchor");
const plusPassword = document.querySelector(".plus_password");
const fbLogin = document.querySelector(".fb_login");
const fbAnchor = document.querySelector(".fb_anchor");
const plusFb = document.querySelector(".plus_fb");
const heading = document.querySelector(".heading");

login.addEventListener("click", function () {
  login_click.style.display = "block";
  tops.style.display = "none";
  bottom.style.display = "none";
})

otpLogin.addEventListener("click", function () {
  this.style.border = "none";
  otpLoginInside.style.display = "block";
  otpAnchor.style.display = "none";
  plus.style.display = "none";
  passwordLogin.style.border = "1px solid black";
  passwordLoginInside.style.display = "none";
  passwordAnchor.style.display = "block";
  plusPassword.style.display = "block";
  fbLogin.style.border = "1px solid black";
  fbAnchor.style.display = "block";
  plusFb.style.display = "block";
  heading.style.display = "none";

})

passwordLogin.addEventListener("click", function () {
  this.style.border = "none";
  passwordLoginInside.style.display = "block";
  passwordAnchor.style.display = "none";
  plusPassword.style.display = "none";
  otpLogin.style.border = "1px solid black";
  otpLoginInside.style.display = "none";
  otpAnchor.style.display = "block";
  plus.style.display = "block";
  fbLogin.style.border = "1px solid black";
  fbAnchor.style.display = "block";
  plusFb.style.display = "block";
  heading.style.display = "none";
})

fbLogin.addEventListener("click", function () {
  this.style.border = "none";
  fbAnchor.style.display = "none";
  plusFb.style.display = "none";
  heading.style.display = "block";
  otpLogin.style.border = "1px solid black";
  otpLoginInside.style.display = "none";
  otpAnchor.style.display = "block";
  plus.style.display = "block";
  passwordLogin.style.border = "1px solid black";
  passwordLoginInside.style.display = "none";
  passwordAnchor.style.display = "block";
  plusPassword.style.display = "block";
})

signup_btn.addEventListener("click",function () {
  login_click.style.display = "none";
  signup_click.style.display = "block";
})

// ---------------------------- Section on click "LOGIN" ends here ---------------------------- //

// ---------------------------- Section on click "REGISTER" starts here ----------------------- //

const registerClick = document.getElementById("register_click");
const otpBtn = document.getElementById("otp_btn");

otpBtn.addEventListener("click", function () {
  registerClick.style.display = "block";
  login_click.style.display = "none";
})

// ---------------------------- Section on click "REGISTER" ends here ----------------------- //
