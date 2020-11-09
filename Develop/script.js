
//document.getElementById(".btn").appendchild(answerBtn)?

// Set time variables
var secondsLeft = 75;

var timerEl = document.getElementById("timer");

// Set time function
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  
}
//When Start Quiz button is clicked, timer starts
document.getElementById("start-quiz").addEventListener("click", setTime);

var questionVar = 0;

//Array of questions and options 
let questionList = [
  {
  questions: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<javascript>", "<js>", "<scripting>"],
    answer: 1
},
{
  questions: "How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function.myFunction()", "function myFunction()", "function : myFunction()"],
    answer: 0
},
{
  questions: "How do you call a function named myFunction?",
    options: ["call myFunction()", "myFunction.()", "myFunction()", "call myFunction"],
    answer: 2
},
{
  questions: "How to write an IF statement in JavaScript?",
    options: ["if i = 0", "if (i = 0)", "if i == 0 then", "none of the above"],
    answer: 0
}
]

var startButton = document.getElementById('start-quiz')
var startPrompt = document.getElementById('start-instructions')
var startTitle = document.getElementById('card-title')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)
questionEl.classList.add('hide')
answerButtonsEl.classList.add('hide')



//var shuffledQuestions = 0;
//var currentQuestionIndex = 0;

function startQuiz() {
  console.log('started')
  startButton.classList.add('hide')
  startPrompt.classList.add('hide')
  startTitle.classList.add('hide')
  questionEl.classList.remove('hide')
  answerButtonsEl.classList.remove('hide')
  //shuffledQuestions = questionList.sort(() => Math.random() - .5)
  //setNextQuestion()
  //getQuestions();
  render()
  
}

//Ask Questions
function render() {
//Present Questions 
  questionEl.innerHTML = questionList[questionVar].questions;
//Questions at random??
//Present 4 potential answers
}
/*function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questions) {
  questionEl.innerText = questions.questions
  questions.options.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = questions.options[Math.floor(Math.random() * questions.options.length) +1]
    
    button.classList.add('btn-style')
    
    button.addEventListener('click', selectAnswer)
    answerButtonsEl.appendChild(button)
  })
}

function resetState() {
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild
    (answerButtonsEl.firstChild)
  }
}
function selectAnswer() {

}

/*for (i = 0; i < optionChoices.length; i++) {
  optionChoices[i].set
}
for (i = 0; i < optionChoices.length; i++) {
  optionChoices[i].textContent = questionList[questionNumber].answer[i];
}
  questionEl.textContent = questionList[questionNumber].question;
  questionNumber++;



//function getQuestions()
/*const lastQuestion = questionList.length -1;
let runningQuestion = 0;

function renderQuestion(){
  let q = questionList[runningQuestion];
  question.innerHtml = "<div class='question'>"+ q.question +"</div>";
}
renderQuestion();

/*var beginQuestions = function() {
  event.preventDefault;
  questionContainer.style.display = "block";
  questionEl.textContent = questionList[i]["question"];

  if (i >=questionList.length -1) {

  }

}
var start
/*var element = document.getElementById('something');

// removing everything inside the node
while (element.firstChild) {
    element.removeChild(element.firstChild);
}

// appending new text node
element.appendChild(document.createTextNode('new text'));
//function startQuiz() {
 // start.style.display = "none";
 // questionRun();
//}

//When Start Quiz button is clicked, questions appear w/ answer options
//function questionRun() {
 // var questionList = questionList.length -1;}

//function submitScore() {}


//When option clicked alert if Wrong/Correct before moving onto next question

//append card-header to question prompts
//append card-body to answer option buttons
//append card-footer to wrong/correct alert
//Highscore input


*/