// Array with all questions in quiz
var questions = [
    {
        question: 'Which HTML tag do we link in the JavaScript file?',
        choices: ['<scripting>', '<head>', '<script>', '<div>'],
        answer: '<script>',
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        choices: ['true', 'false'],
        answer: 'false',
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        choices: ['ceil(x, y)','Math.ceil(x, y)', 'Math.max(x, y)', 'top(x, y)'],
        answer: 'Math.max(x, y)',
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        choices: ['onclick', 'onchange', 'onmouseover', 'onmouseclick'],
        answer: 'onclick',
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        choices: ['*', '-', 'x', '='],
        answer: '=',
    }
];

var score = 0;
var index = 0;
var timer = document.querySelector('#timer');
var divQuestions = document.querySelector('#questions');
var timeLeft = 50;
var minusTime = 5;
var ulFiller = document.querySelector('#choices');

function showQuestions() {
    divQuestions.innerHTML = '';
    ulFiller.innerHTML = '';
    for (var i = 0; i < questions.length; i++); {
        var usersQuestions = questions.question;
        var usersChoices = questions.choices;
        divQuestions.textContent = usersQuestions
    }
    usersChoices.forEach(function (newThing) {
        var listThing = document.createElement('li');
        listThing.textContent = newThing;
        divQuestions.appendChild(ulFiller);
    })
}