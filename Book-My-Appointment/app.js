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

// localStorage.clear();