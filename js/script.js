var formEl = document.querySelector('#user-form');
var emailInput = document.querySelector('#email-input');
var passwordInput = document.querySelector('#pass-input');

function getUserInput(eventObj) {
    eventObj.preventDefault();

    var email = emailInput.value;
    var password = passwordInput.value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
};

formEl.addEventListener('submit', getUserInput);






// var input = document.querySelector('#name-input');

// function getUserInput(eventObj) {
//     // eventObj.preventDefault();
//     if (eventObj.keyCode === 13) {
//         console.log('enter pressed');
//     };
// }

// input.addEventListener('keydown', getUserInput);
