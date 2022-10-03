const submitBtn = document.querySelector('.submitBtn');
const personName = document.querySelector('.name');
const phoneNumber = document.querySelector('.phoneNumber');
const city = document.querySelector('.city');
const personEmail = document.querySelector('.userEmail');
const store = document.querySelector('.store');
const date = document.querySelector('.date');
const time = document.querySelector('.time');

submitBtn.addEventListener('click', () => {

    let obj = {
        personName: personName.value,
        phoneNumber: phoneNumber.value,
        city: city.value,
        personEmail:personEmail.value,
        store:store.value,
        date: date.value,
        time: time.value,
    }

    if (personName.value == '') {
        alert('Invaild input');
    } else if (phoneNumber.value == '') {
        alert('Invalid input');
    } else if (city.value == '') {
        alert('Invalid input');
    } else if (store.value == '') {
        alert('Invalid input');
    } else if (date.value == '') {
        alert('Invalid input');
    } else if (time.value == '') {
        alert('Invalid input');
    } else {
        let data = JSON.parse(localStorage.getItem('data')) || [];
        data.push(obj);
        // console.log(data);

        localStorage.setItem('data', JSON.stringify(data));
        alert('Appointment Booked');
    }

});