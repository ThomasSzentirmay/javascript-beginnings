var body = document.body;
var btnElObject = document.querySelector('#start');
var mainEl = document.querySelector('.main-content');

console.log(mainEl);

// console.log(btnElObject);
// btnElObject.innerText = 'something else';
btnElObject.style.backgroundColor = '#5f1a9a';
btnElObject.style.color = '#fff';
mainEl.style.backgroundColor = 'red';

mainEl.setAttribute('id', 'something');


btnElObject.addEventListener('click', function () {
    body.classList.add('explosion');
});


