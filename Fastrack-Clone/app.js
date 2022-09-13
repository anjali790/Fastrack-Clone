//otp-generate//
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



//sign-in//
const registerBtn = document.querySelector('#register');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const mobNo = document.querySelector('#mobile_no');
const email = document.querySelector('#email');
const password = document.querySelector('.password');


registerBtn.addEventListener("click", () => {

  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    mobileNo: mobNo.value,
    emailId: email.value,
    pass: password.value,
  }

  if (password.value.length > 15) {
    alert('Max of 15');
  }
  else {
    let data = JSON.parse(localStorage.getItem('data')) || [];

    console.log(data)
    let flag = true;
    for (let i = 0; i < data.length; i++) {
      if (obj.mobileNo === data[i].mobileNo || obj.emailId === data[i].emailId) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      alert('already  user');
    } else {
      data.push(obj);
      // console.log(data);
      localStorage.setItem('data', JSON.stringify(data));
    }
  }
});

// localStorage.clear();



//Book appointment//
const submitBtn = document.querySelector('.submitBtn');
const personName = document.querySelector('.name');
const phoneNumber = document.querySelector('.phoneNumber');
const state = document.querySelector('.state');

submitBtn.addEventListener('click', () => {

    let obj = {
        personName: personName.value,
        phoneNumber: phoneNumber.value,
        state: state.value,
    }

    if (personName.value == '') {
        alert('Invaild input');
    } else if (phoneNumber.value == '') {
        alert('Invalid input');
    } else if (state.value == '') {
        alert('Invalid input');
    } else {
        let data = JSON.parse(localStorage.getItem('data')) || [];
        data.push(obj);
        // console.log(data);

        localStorage.setItem('data', JSON.stringify(data));
        alert('Appointment Booked');
    }

});