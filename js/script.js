// API is a tool set to interact with something. As a developer, that something is code.
// The web API is the JavaScript sub-set of functions and objects for us to work with the browser


// DOM
// Window  >  Browser window  &&  Document  >  </html>


// setInterval(function () {
//     console.log('Run this code');
// }, 1000);

// function myFunc (one, two, callBackFunc) {
//     callBackFunc('some callback argument');
// }

// myFunc(10, 'some str', function (str) { console.log(str) });




// DECLARATION FUNCTION:
function getProduct(a, b) {
    return a * b;
}

getProduct(5, 5);



function doSomething(whatAmI, blah) {
    whatAmI('arg passed to callback');
    console.log(blah);
}

doSomething(function(youGotThis) {
    console.log(youGotThis);
}, 10);



// EXPRESSION FUNCTION:
// var another = function () {
// }

// another();


// METHOD FUNCTION:
// var person = {
//     haveBirthday: function() {
//     }
// }

// person.haveBirthday();