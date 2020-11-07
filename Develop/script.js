
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
var questionList = [
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
var questionContainerEl = document.getElementById('answer-buttons')



startButton.addEventListener('click', startGame)

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  questionContainerEl.classList.remove('hide')

  
  
}
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


