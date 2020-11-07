
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


//Array of questions and options 
let questionList = [
  {
  question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<javascript>", "<js>", "<scripting>"],
    answer: 1
},
{
  question: "How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function.myFunction()", "function myFunction()", "function : myFunction()"],
    answer: 0
},
{
  question: "How do you call a function named myFunction?",
    options: ["call myFunction()", "myFunction.()", "myFunction()", "call myFunction"],
    answer: 2
},
{
  question: "How to write an IF statement in JavaScript?",
    options: ["if i = 0", "if (i = 0)", "if i == 0 then", "none of the above"],
    answer: 0
}
]

var startButton = document.getElementById('start-quiz')
var answersContainerEl = document.getElementById('answer-buttons')
var startPrompt = document.getElementById('start-instructions')
var questionContainer =document.getElementById('card-prompt')
var questionEl = document.getElementById('questions-container')

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  answersContainerEl.classList.remove('hide')
  startPrompt.classList.add('hide')
  questionContainer.classList.add('hide')
  
}
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