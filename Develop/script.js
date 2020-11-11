
// Grabbing elements
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-quiz");
var startingContainer = document.getElementById("starting-container");
var questionContainer = document.getElementById("question-container");
var allDone = document.getElementById("all-done-container");
var quizQuestionEl = document.getElementById('quiz-question')
var answerButtonsEl = document.getElementById('answer-buttons')

//Hide containers 
questionContainer.style.display = "none";
allDone.style.display = "none";


//When Start Quiz button is clicked, timer starts
document.getElementById("start-quiz").addEventListener("click", setTime);


//Array of questions and answers
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

// Declare global variables
var secondsLeft = 75;
var questionIndex = 0;

// Set time function
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  beginQuestions()
}

var beginQuestions = function() {
  Event.preventDefault;
  startingContainer.style.display = "none";
  questionContainer.style.display = "block";
  quizQuestionEl.innerHTML = questionList[questionIndex]["questions"];

  var button = document.createElement('button');
  button.innerHTML = ;

  button.classList.add('btn-style')
  answerButtonsEl.appendChild(button);
  /*if (i >= questionList.length - 1) {
    endGame();
  }*/

}

startButton.addEventListener('click', beginQuestions)





/*var questionIndex = 0;



var startButton = document.getElementById('start-quiz')
var startPrompt = document.getElementById('start-instructions')
var startTitle = document.getElementById('card-title')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')



startButton.addEventListener('click', startQuiz)
questionEl.classList.add('hide')
answerButtonsEl.classList.add('hide')


function startQuiz() {
  console.log('started')
  startButton.classList.add('hide')
  startPrompt.classList.add('hide')
  startTitle.classList.add('hide')
  questionEl.classList.remove('hide')
  answerButtonsEl.classList.remove('hide')

  showQuestions()
 
}

//Ask Questions
function showQuestions() {
//Present Questions 
  var currentQuestion = questionList[questionIndex];
  questionEl.textContent = currentQuestion.questions;
  //Present 4 potential answers
   
}
//console.log(showQuestions)



//Questions at random??


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