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