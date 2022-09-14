const btn = document.querySelector(".section3-know-more-btn");
const lowerDiv = document.querySelector(".section3-lowerDiv");

btn.addEventListener("click", function () {
  lowerDiv.classList.toggle("active");
});

// --------------------------------------- Header Starts Here -------------------------------- //

var tops = document.querySelector(".top");
var bottom = document.querySelector(".bottom");
const watch = document.getElementById("watch");
const audio = document.getElementById("audio");
const eyewear = document.getElementById("eyewear");
const bags = document.getElementById("bags");
const perfumes = document.getElementById("perfumes");
const offers = document.getElementById("offers");
const watch_hover = document.getElementById("watch_hover");
const audio_hover = document.getElementById("audio_hover");
const bags_hover = document.getElementById("bags_hover");
const perfumes_hover = document.getElementById("perfumes_hover");
const offers_hover = document.getElementById("offers_hover");

watch.addEventListener("mouseover", function () {
  watch_hover.style.display = "flex";
  audio_hover.style.display = "none";
  bags_hover.style.display = "none";
  perfumes_hover.style.display = "none";
  offers_hover.style.display = "none";
});

watch_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

audio.addEventListener("mouseover", function () {
  watch_hover.style.display = "none";
  audio_hover.style.display = "flex";
  bags_hover.style.display = "none";
  perfumes_hover.style.display = "none";
  offers_hover.style.display = "none";
});

audio_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

bags.addEventListener("mouseover", function () {
  watch_hover.style.display = "none";
  audio_hover.style.display = "none";
  bags_hover.style.display = "flex";
  perfumes_hover.style.display = "none";
  offers_hover.style.display = "none";
});

bags_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

perfumes.addEventListener("mouseover", function () {
  watch_hover.style.display = "none";
  audio_hover.style.display = "none";
  bags_hover.style.display = "none";
  perfumes_hover.style.display = "flex";
  offers_hover.style.display = "none";
});

perfumes_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

offers.addEventListener("mouseover", function () {
  watch_hover.style.display = "none";
  audio_hover.style.display = "none";
  bags_hover.style.display = "none";
  perfumes_hover.style.display = "none";
  offers_hover.style.display = "flex";
});

offers_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

// --------------------------------------- Header Ends Here -------------------------------- //

// ---------------------------- Section on click "BRANDS" starts here ------------------------- //

const brands = document.getElementById("brands");
const brands_click = document.getElementById("brands_click");

brands.addEventListener("click", function () {
  brands_click.style.display = "block";
  this.style.color = "white";
  main.style.display = "none";
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "none";
  section4.style.display = "block";
});

// ---------------------------- Section on click "BRANDS" ends here ------------------------- //

// --------------------- Section on click "CURRENCY SELECTOR" starts here ------------------ //

const currency = document.getElementById("currency");
const currency_click = document.getElementById("currency_click");
const down_icon = document.querySelector(".down");
const up_icon = document.querySelector(".up");

currency.addEventListener("click", function () {
  if (up_icon.style.display === "none") {
    this.style.color = "white";
    currency_click.style.display = "block";
    tops.style.position = "relative";
    tops.style.top = "197px";
    bottom.style.position = "relative";
    bottom.style.top = "197px";
    down_icon.style.display = "none";
    up_icon.style.display = "inline-block";
    up_icon.style.color = "white";
  } else {
    this.style.color = "rgb(175, 173, 173)";
    currency_click.style.display = "none";
    tops.style.top = "0";
    bottom.style.top = "0";
    down_icon.style.display = "inline-block";
    up_icon.style.display = "none";
  }
});

// ---------------------- Section on click "CURRENCY SELECTOR" ends here ------------------- /

// --------------slider coder here--------------------------

let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("dot");
let currentSlide = 0;

document.getElementById("button-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("button-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  console.log("c", currentSlide);
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("activeDot");
  currentSlide = moveTo;
}

document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});

// ------fastrack essential product start-----

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
const main = document.querySelector(".main_and_footer");
const footer = document.getElementById("footer");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");

login.addEventListener("click", function () {
  login_click.style.display = "block";
  tops.style.display = "none";
  bottom.style.display = "none";
  main.style.display = "none";
  footer.style.display = "none";
  brands_click.style.display = "none";
});

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
});

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
});

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
});

signup_btn.addEventListener("click", function () {
  login_click.style.display = "none";
  signup_click.style.display = "block";
});

// ---------------------------- Section on click "LOGIN" ends here ---------------------------- //

// ------------------------ Section on click "Request OTP" Starts Here ------------------------- //

const otpVerifyBtn = document.querySelector(".verify-OTP-Btn");
const otpInput = document.querySelector(".otp-input");
const otpBtn = document.querySelector("#otp_btn");
const otpContainer = document.querySelector(".otp-container");

otpBtn.addEventListener("click", function () {
  otpContainer.style.display = "block";
  login_click.style.display = "none";
});

otpVerifyBtn.addEventListener("click", () => {
  let obj = {
    otpInput: otpInput.value,
  };
  if (otpInput.value === "1234") {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
    alert("OTP verified");
  } else {
    alert("invalid OTP");
  }
});

// ------------------------ Section on click "Request OTP" Ends Here ------------------------- //

// ---------------------------- Section on click "SIGN UP NOW" starts here ----------------- //

const registerBtn = document.querySelector("#register");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const mobNo = document.querySelector("#mobile_no");
const email = document.querySelector("#email");
const password = document.querySelector(".password");

registerBtn.addEventListener("click", () => {
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    mobileNo: mobNo.value,
    emailId: email.value,
    pass: password.value,
  };

  if (password.value.length > 15) {
    alert("Max of 15");
  } else {
    let data = JSON.parse(localStorage.getItem("data")) || [];

    console.log(data);
    let flag = true;
    for (let i = 0; i < data.length; i++) {
      if (
        obj.mobileNo === data[i].mobileNo ||
        obj.emailId === data[i].emailId
      ) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      alert("already user");
    } else {
      data.push(obj);
      // console.log(data);
      localStorage.setItem("data", JSON.stringify(data));
      alert("registered successfully");
    }
  }
});

// localStorage.clear();

// ---------------------------- Section on click "SIGN UP NOW" ends here ----------------- //


// ---------------------------- Carousel Starts here ----------------- //

const trendingWatchImage = document.querySelectorAll(".trending_watch_image");
const trendingNxtBtn = document.querySelectorAll(".trending-next-btn");
const trendingPreBtn = document.querySelectorAll(".trending-prev-btn");

trendingWatchImage.forEach((item, i) => {
  let a = item.getBoundingClientRect();
  let b = a.width;

  console.log(trendingNxtBtn[i]);

  trendingNxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += b;
    // console.log("pressed")
  });

  trendingPreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= b;
  });
});

// ---------------------------- Carousel Ends here ----------------- //

// ---------------------------- Cart Functinality Starts here ---------------------------- //

// var main1 = document.querySelector(".watch-main-div");
// var cart = [];
// var data = [];
// (async () => {
//   let response = await fetch(`https://avish-test-api.herokuapp.com/watches`);
//   let data = await response.json();
//   console.log(data);

//   data.map((oneData) => {
//     let main1 = document.querySelector(".watch-main-div");
//     main1.innerHTML += `<div class="watch-div">
//       <img src=${oneData.urlImg}>
//       <div class="btn-div">
//       <h2 class="watch-name">${oneData.Name}</h2>
//       <button class="addButton" onclick="add_to_cart(event)" id=${oneData.id}>ADD</button>
//       </div>
//       </div>`;
//   });
// })();

// async function add_to_cart(e) {
//   let response = await fetch(`https://avish-test-api.herokuapp.com/watches`);
//   let data = await response.json();
//   console.log(e.target.id)
//   let idd = e.target.id;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].id == idd) {
//       cart.push(data[i]);
//     }

//   }
//   let cartNumber = document.querySelector('.cart-number');
//   cartNumber.innerHTML = `<sup class="cart-count">${cart.length}<sup>`
// }

// async function cart_button() {
//   main1.innerHTML = `
//   <div class="cartt">
  
//   </div>`

//   let cart_div = document.querySelector(".cartt");
//   cart.map((oneData) => {
//     cart_div.innerHTML += `<div class="itemInCart">
//     <div class="cart-desc-div"><img class="cartImage" src=${oneData.urlImg}></div>
//     <div product-detail-div><h2 class="productName">${oneData.Name}</h2>
//     <h3 class="productDescription">${oneData.description.para}</h3>
//     <span class="product-mrp">MRP &#8377 <span class="item-mrp">${oneData.price}</span></span><span class="product-offerPrice"> OFFER PRICE &#8377 ${oneData.offerPrice}</span><span class="product-discount">(${oneData.discount}% Off)</span>
//     <div class="product-EMI-div"><span class="product-EMI">NO COST EMI</span><span class="product-function">${oneData.function}</span></div>
//     <div><button class="buy-now-btn">BUY NOW</button><button class="product-availability-btn">${oneData.availabilty}</button>
//     </div>
//     </div>
    
//     </div>`
//   });
// };


// ---------------------------- Cart Functinality Ends here ---------------------------- //