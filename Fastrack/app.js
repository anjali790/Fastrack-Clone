var main = document.querySelector(".watch-main-div");
var cart = [];
var data = [];
(async () => {
  let response = await fetch(`https://avish-test-api.herokuapp.com/watches`);
  let data = await response.json();
  // console.log(data);

  data.map((oneData) => {
    let main = document.querySelector(".watch-main-div");
    main.innerHTML += `<div class="watch-div">
      <img src=${oneData.urlImg}>
      <div class="btn-div">
      <h2 class="watch-name">${oneData.Name}</h2>
      <button class="addButton" onclick="add_to_cart(event)" id=${oneData.id}>ADD</button>
      </div>
      </div>`;
  });
})();

async function add_to_cart(e) {
  let response = await fetch(`https://avish-test-api.herokuapp.com/watches`);
  let data = await response.json();
  console.log(e.target.id)
  let idd = e.target.id;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == idd) {
      cart.push(data[i]);
    }

  }
  let cartNumber = document.querySelector('.cart-number');
  cartNumber.innerHTML = `<sup class="cart-count">${cart.length}<sup>`
}

async function cart_button() {
  main.innerHTML = `
  <div class="cartt">
  
  </div>`

  let cart_div = document.querySelector(".cartt");
  cart.map((oneData) => {
    cart_div.innerHTML += `<div class="itemInCart">
    <div class="cart-desc-div"><img class="cartImage" src=${oneData.urlImg}></div>
    <div product-detail-div><h2 class="productName">${oneData.Name}</h2>
    <h3 class="productDescription">${oneData.description.para}</h3>
    <span class="product-mrp">MRP &#8377 <span class="item-mrp">${oneData.price}</span></span><span class="product-offerPrice"> OFFER PRICE &#8377 ${oneData.offerPrice}</span><span class="product-discount">(${oneData.discount}% Off)</span>
    <div class="product-EMI-div"><span class="product-EMI">NO COST EMI</span><span class="product-function">${oneData.function}</span></div>
    <div><button class="buy-now-btn">BUY NOW</button><button class="product-availability-btn">${oneData.availabilty}</button>
    </div>
    </div>
    
    </div>`
  });
};


// function remove_item(e){
//   let idd = e.target.id;
//   for(let i=0; i<cart.length; i++){
//     if(idd == cart[i].id){
//       if(cart[i].count ==1){
//         cart.splice(i,1);
//         // console.log("yes");
//       }else{
//         // console.log("no");
//         cart[i].count -=1;
//       }
//     }
//   }
// }