const btn = document.querySelector('.btn');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const mobNo = document.querySelector('.mobileNumber');
const email = document.querySelector('.email');
const password = document.querySelector('.password');


btn.addEventListener("click", () => {
  let obj = {
    firstName : firstName.value,
    lastName : lastName.value,
    mobileNo : mobNo.value,
    emailId : email.value,
    pass : password.value,
  }
    if (password.value.length > 15) {
        alert('Max of 15');
    }
    else{
        let data = JSON.parse(localStorage.getItem('data')) || [];
        
        console.log(data)
        let flag = true;
        for(let i=0; i<data.length; i++){
          if(obj.mobileNo === data[i].mobileNo || obj.emailId === data[i].emailId){
            flag = false;
            break;
          }
        }
        if(!flag){
          alert('already  user');
        }else{
          data.push(obj);
          // console.log(data);
          localStorage.setItem('data',JSON.stringify(data));
        }
      }
});

// localStorage.clear();