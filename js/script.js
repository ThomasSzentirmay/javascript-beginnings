// Create a function that increases clicks each time the button is pressed and outputs the click amount to the window

var clickOutput = document.querySelector('#click-output');
var clickBtn = document.querySelector('#click-btn');
var input = document.querySelector('#name-input');
var clicks = 0;

function addClick() {
    // increase clicks by one
    clicks++;
    // output count to h1
    clickOutput.innerText = 'Clicks: ' + clicks;
};

function saveUserClicks(eventObj) {
    if (eventObj.keyCode === 13) {
        localStorage.setItem();
    };
};

clickBtn.addEventListener('click', addClick);
input.addEventListener('keydown', saveUserClicks);