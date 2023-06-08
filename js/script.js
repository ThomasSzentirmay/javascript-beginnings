// var link = document.querySelector('#link');
// var div = document.querySelector('div');

// function triggered (eventObj) {
//     if (eventObj.target.tagName === 'BUTTON') {
//         eventObj.target.innerText = 'Clicked';
//     }
// };

// div.addEventListener('click', triggered);



// function stopTheDefault(eventObj) {
//     eventObj.preventDefault();


//     eventObj.target.innerText = 'Something Else'
// };

// link.addEventListener('click', stopTheDefault);





// Target all the li's in the ul and add an event listener to each li that console logs the innerText of the li

// var liArray = document.querySelectorAll('li');

// function clicked(clicked) {
//     console.log('clicked');
// }

// for (var i = 0; i < liArray.length; i++) {
//     liArray[i].addEventListener('click', clicked)
// };

// Target the ul and add an event listener that console logs the innerText of the li that was clicked


var ul = document.querySelector('ul');

function liListener(e) {

    var el = e.target;
    var ignore = el.classList.contains('not-me');

    if (!ignore) {
    console.log(el.innerText);
    };

};

ul.addEventListener('click', liListener)
