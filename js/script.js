var body = document.body;
var btnElObject = document.querySelector('#start');
var mainSectionEl = document.querySelector('.main-content section');
var questionData = [
    {
        question: 'What does the acronym D.O.M. stand for?',
        choices: ['Document on Memory', 'Dog Only Members', 'Dancing On Mercury', 'Document Object Model'],
        answer: 'Document Object Model'
    },
    {
        question: 'Should we refer to JavaScript as Java?',
        choices: ['Maybe', 'Yes', 'No', 'Only on Saturdays'],
        answer: 'No'
    }
];

for (var index = 0; index < questionData.length; index++) {
    var questionObj = questionData[index];
    var questionDiv = document.createElement('div');
    var h2 = document.createElement('h2');
    var p = document.createElement('p');

    h2.innerText = questionObj.question;
    p.innerText = questionObj.answer;

    questionDiv.append(h2);
    questionDiv.append(p);

    // questionDiv.innerHTML = `
    // <h2>${questionObj.question}</h2>
    // <p>Answer: ${questionObj.answer}</p>
    // `;

    // mainSectionEl.append(questionDiv);
}




// btnElObject.addEventListener('click', function () {
//     body.classList.add('explosion');
// });


