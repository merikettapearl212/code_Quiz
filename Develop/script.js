
// Grabbing elements
var timerEl = document.getElementById("timer");
// var startButton = document.getElementById("start-quiz");
var startingContainer = document.getElementById("starting-container");
var questionContainer = document.getElementById("question-container");
var allDone = document.getElementById("all-done-container");
var quizQuestionEl = document.getElementById('quiz-question')
var answerButtonsEl = document.getElementById('answer-buttons')
var correctEl = document.getElementById('correct');
var wrongEl = document.getElementById('wrong');
var highScores = document.getElementById('highscores-container')


//Hide containers 
questionContainer.style.display = "none";
allDone.style.display = "none";
// correctEl.style.display = "none";
// wrongEl.style.display = "none";
highScores.style.display = "none";


//Array of questions and answers
let questionList = [
  {
  question: "Inside which HTML element do we put the JavaScript?",
    options: ["&lt;script&gt;", "&lt;javascript&gt;", "&lt;js&gt;", "&lt;scripting&gt;"],
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


// Declare global variables
var secondsLeft = 75;

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


//When Start Quiz button is clicked, timer starts
document.getElementById("start-quiz").addEventListener("click", function() {
  questionContainer.style.display = "block";
  startingContainer.style.display = "none";
  // console.log(questionList[0].question)
  for (var i = 0; i < questionList[0].options.length; i ++) {
    var optbtn = document.createElement('button') 
    optbtn.classList.add('btn-style')
    optbtn.innerHTML = questionList[0].options[i]
    document.getElementById('answer-buttons').appendChild(optbtn)
    // document.getElementById('answer-buttons').innerHTML = questionList[0].options[0]
  }

  
  document.getElementById('quiz-question').innerHTML = questionList[0].question
  // console.log(questionList[0].options[0])
  
  
  

});

