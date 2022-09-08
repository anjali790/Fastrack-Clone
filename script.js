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
  console.log("c",currentSlide);
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

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})