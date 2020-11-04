
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
document.getElementById("start-quiz").addEventListener("click", setTime);


//Var currentScore/timeLeft
//append card-header to question prompts
//append card-body to answer option buttons
//append card-footer to wrong/correct alert
//Questions
var q1 = {
    qu: "What is...",
    op: "a",
    op: "b",
    op: "c",
    op: "d",
    an: "d",
}

var q2 = {
    qu: "What is...",
    op: "a",
    op: "b",
    op: "c",
    op: "d",
    an: "c",
}

var q3 = {
    qu: "What is...",
    op: "a",
    op: "b",
    op: "c",
    op: "d",
    an: "a",
}

var q4 = {
    qu: "What is...",
    op: "a",
    op: "b",
    op: "c",
    op: "d",
    an: "b",
}

var q5 = {
    qu: "What is...",
    op: "a",
    op: "b",
    op: "c",
    op: "d",
    an: "d",
}

var q6 = {
    qu: "What is...",
    op: "a",
    op: "b",
    op: "c",
    op: "d",
    an: "c",
}
 

