var formEl = document.querySelector('#user-form');
var emailInput = document.querySelector('#email-input');
var passwordInput = document.querySelector('#pass-input');
var emailOutput = document.querySelector('#user-email');
var passOutput = document.querySelector('#user-pass');

// Retrieve user data from localStorage
function getUserData () {
    var data = {};
    
    data.email = localStorage.getItem('email');
    data.password = localStorage.getItem('password');

    return data;
};


// Outputs the user information to the window
function showUserData () {
    var userData = getUserData();
    
    emailOutput.innerText = `Email: ${userData.email}`;
    passOutput.innerText = `Password: ${userData.password}`;

};


function getUserInput(eventObj) {
    eventObj.preventDefault();

    var email = emailInput.value;
    var password = passwordInput.value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    showUserData();
};

// Initial process or app start tasks
formEl.addEventListener('submit', getUserInput);
showUserData();






// var input = document.querySelector('#name-input');

// function getUserInput(eventObj) {
//     // eventObj.preventDefault();
//     if (eventObj.keyCode === 13) {
//         console.log('enter pressed');
//     };
// }

// input.addEventListener('keydown', getUserInput);
