const btn = document.querySelector('.section3-know-more-btn');
const lowerDiv = document.querySelector('.section3-lowerDiv');

btn.addEventListener('click', function(){
    lowerDiv.classList.toggle("active");
});