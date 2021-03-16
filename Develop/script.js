// Grabbing elements
var timerEl = document.getElementById("timer");
var startingContainer = document.getElementById("starting-container");
var questionContainer = document.getElementById("question-container");
var allDone = document.getElementById("all-done-container");
var quizQuestionEl = document.getElementById("quiz-question");
var answerButtonsEl = document.getElementById("answer-buttons");
var rightWrongEl = document.getElementById("alert-right-wrong");
var highScores = document.getElementById("highscores-container");
var highscoresListEl = document.getElementById("highscores-list")
var goBacktoStart = document.getElementById("go-back");


//Hide containers
questionContainer.style.display = "none";
allDone.style.display = "none";
highScores.style.display = "none";

//Array of questions and answers
let questionList = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<javascript>", "<js>", "<scripting>"],
    answer: "<script>",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function.myFunction()",
      "function myFunction()",
      "function : myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you call a function named myFunction?",
    options: [
      "call myFunction()",
      "myFunction.()",
      "myFunction()",
      "call myFunction",
    ],
    answer: "myFunction()",
  },
  {
    question: "How to start an IF statement in JavaScript?",
    options: ["if i = 0", "if (i = 0)", "if i == 0 then", "none of the above"],
    answer: "if i = 0",
  },
];

// Declare global variables
var secondsLeft = 75;
var currentIndex = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
// var subtractTimeScore = 10;

// Set time function
let timerInterval
var score = 0

function setTime() {
   timerInterval = setInterval(function () {
    secondsLeft--;
    

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);

        questionContainer.style.display = "none";
        allDone.style.display = "block";
        document.getElementById("amount-r-w").innerHTML = `You got ${correctAnswers} correct! and ${wrongAnswers} wrong!`;
        document.getElementById("score-spot").innerHTML = `Score: ${score + secondsLeft}`;
        secondsLeft = 0;
    }
    timerEl.textContent = "Time: " + secondsLeft;
  }, 1000);
}

//When Start Quiz button is clicked, timer starts
document.getElementById("start-quiz").addEventListener("click", function () {
  questionContainer.style.display = "block";
  startingContainer.style.display = "none";
  // console.log(questionList[0].question)

  showQuestion();
  setTime();
  // console.log(questionList[0].options[0])
});


function showQuestion() {
  console.log(currentIndex);
  //stop showing next question when game is over
  //game is over when current index = 4
  if (currentIndex === questionList.length) {
    // alert("Game Over!")
    questionContainer.style.display = "none";
    allDone.style.display = "block";
    
    document.getElementById("amount-r-w").innerHTML = `You got ${correctAnswers} correct! and ${wrongAnswers} wrong!`;
    document.getElementById("score-spot").innerHTML = `Score: ${score + secondsLeft}`;
    // alert (`You got ${correctAnswers} correct! You got ${wrongAnswers} wrong!`)
    clearInterval(timerInterval);
    return;
  }

  document.getElementById("answer-buttons").innerHTML = "";
  for (var i = 0; i < questionList[currentIndex].options.length; i++) {
    var optbtn = document.createElement("button");
    optbtn.classList.add("btn-style");
    optbtn.classList.add("option-btns");
    optbtn.innerText = questionList[currentIndex].options[i];
    document.getElementById("answer-buttons").appendChild(optbtn);
    // document.getElementById('answer-buttons').innerHTML = questionList[0].options[0]
  }
  document.querySelectorAll(".option-btns").forEach(function (each) {
    each.addEventListener("click", function (event) {
      var chosenOption = event.target.innerText;
      // console.log(chosenOption);
      // console.log(questionList[currentIndex].answer);
      if (chosenOption === questionList[currentIndex].answer) {
        // console.log("Correct!")
        correctAnswers++;
        rightWrongEl.textContent = "Correct!";
      } else {
        // console.log("Wrong!")
        wrongAnswers++;
        rightWrongEl.textContent = "Wrong!";
        secondsLeft -= 10;
        // secondsLeft = secondsLeft -10;
        // alert("wrong!")
      }
      currentIndex++;
      //creates and appends the <hr> tag
      var lineEl = document.createElement("HR");
      document.getElementById("hr-spot").appendChild(lineEl);

      showQuestion();
      //timeouts the correct/wrong text and hr tag
      setTimeout(function () {
        rightWrongEl.textContent = "";
        document.getElementById("hr-spot").removeChild(lineEl);
      }, 1100);
    });
  });

  document.getElementById("quiz-question").innerHTML =
    questionList[currentIndex].question;
}


document.querySelector(".view-highscore").addEventListener("click", function () {
    allDone.style.display = "none";
    questionContainer.style.display = "none";
    startingContainer.style.display = "none";
    timerEl.style.display = "none";
    highScores.style.display = "block";

    var finalScoreLocal = JSON.parse(localStorage.getItem("initials"));
    console.log(finalScoreLocal);

    finalScoreLocal = finalScoreLocal.sort((a, b) =>{
      return b.score - a.score
    }) 

    document.querySelector("#highscores-list").innerHTML = "";
    for (let i = 0; i < finalScoreLocal.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.innerText = `${finalScoreLocal[i].initials} - ${finalScoreLocal[i].score}`;
      console.log(highscoreEl);
      document.querySelector("#highscores-list").appendChild(highscoreEl);
    }

  });

  // Local storage
document.querySelector("#add-initials").addEventListener("submit", function (event) {
  event.preventDefault();
  var initials = document.querySelector("#initials").value;
 score = correctAnswers;
  console.log(initials, score);
  var finalScoreLocal = [];
  
  if (localStorage.getItem("initials")) {
    var finalScoreLocal = JSON.parse(localStorage.getItem("initials"));
  }
  console.log(score)
  console.log(secondsLeft)
    finalScoreLocal.push({
      initials: initials,
      score: score + secondsLeft,
  });
  localStorage.setItem("initials", JSON.stringify(finalScoreLocal));

  finalScoreLocal = finalScoreLocal.sort((a, b) =>{
    return b.score - a.score
  }) 
  

  
  allDone.style.display = "none";
  highScores.style.display = "block";
  document.querySelector("#highscores-list").innerHTML = "";
    for (let i = 0; i < finalScoreLocal.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.innerText = `${finalScoreLocal[i].initials} - ${finalScoreLocal[i].score}`;
      console.log(highscoreEl);
      document.querySelector("#highscores-list").appendChild(highscoreEl);
    }
 
});
  


// need to figure out how to get back to start page without this?
goBacktoStart.onclick = () => {
  window.location.reload(); //reload the current window
};

document.querySelector("#clear-highscores").addEventListener("click", function (){
  highscoresListEl.style.display = "none";
  localStorage.clear();
  
})

