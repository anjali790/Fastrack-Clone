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
});

// ---------------------------- Section on click "BRANDS" ends here ------------------------- //

// --------------------- Section on click "CURRENCY SELECTOR" starts here ------------------ //

const currency = document.getElementById("currency");
const currency_click = document.getElementById("currency_click");
const down_icon = document.querySelector(".down");
const up_icon = document.querySelector(".up");

currency.addEventListener("click", function () {
  this.style.color = "white";
  currency_click.style.display = "block";
  tops.style.position = "relative";
  tops.style.top = "197px";
  bottom.style.position = "relative";
  bottom.style.top = "197px";
  down_icon.style.display = "none";
  up_icon.style.display = "inline-block";
  up_icon.style.color = "white";
});

// ---------------------- Section on click "CURRENCY SELECTOR" ends here ------------------- //
