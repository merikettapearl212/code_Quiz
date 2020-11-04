//var startBtn = document.querySelector("#startButton");

var timerEl = document.querySelector("#timer");

var secondsLeft = 75;

function setTime() {

    var callback = function() {
        secondsLeft--;
        timerEl = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);

    }
};


var timerInterval = setInterval(callback, 1000);

}
setTime();


//CLick event, event listener
//startBtn.addEventListener("click", startQuiz);

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
 

