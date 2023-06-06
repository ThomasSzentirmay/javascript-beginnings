var body = document.body;
var btnElObject = document.getElementById('start');

// console.log(btnElObject);
// btnElObject.innerText = 'something else';
// btnElObject.style.backgroundColor = '#5f1a9a';
// btnElObject.style.color = '#fff';

btnElObject.addEventListener('click', function () {
    body.classList.add('explosion');
});