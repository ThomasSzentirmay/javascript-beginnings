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

// Target the ul and add an event listener that console logs the innerText of the li that was clicked


var ul = document.querySelector('ul');

function liListener(e) {

    if (e.target.tagName === 'LI') {
    console.log(e.target.innerText);
    };

};

ul.addEventListener('click', liListener)
