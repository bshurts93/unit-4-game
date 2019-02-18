// ------------------------- //
// GLOBAL VARIABLES DECLARED
// ------------------------- //

// Scoring
var currentScore = 0;
var targetScore;
var wins = 0;
var losses = 0;
var redVal;
var greenVal;
var blueVal;


// DOM selectors
var userScoreDOM = $("#user-score");
var targetScoreDOM = $("#target-score");
var winsDOM = $("#wins");
var losssesDOM = $("#losses");
var messageBox = $(".message-box");
var messageText = $(".message");

// ------------------------- //
// FUNCTION DECLARATIONS
// ------------------------- //

function genEggVals() {
    firstVal = Math.floor(Math.random() * 5 + 2);
    secondVal = Math.floor(Math.random() * 5 + 2);
    thirdVal = Math.floor(Math.random() * 5 + 2);
    fourthVal = Math.floor(Math.random() * 5 + 2);
}

function genTargetScore() {
    targetScore = Math.floor(Math.random() * 15 + 16);
    targetScoreDOM.text(targetScore);
}

function winOrLose() {
    if (currentScore == targetScore) {
        wins++;
        winsDOM.text(wins);
        gameInit();
    } else if (currentScore > targetScore) {
        losses++
        losssesDOM.text(losses);
        gameInit();
    }
}

function gameInit() {
    currentScore = 0;
    userScoreDOM.text(currentScore);

    genTargetScore();

    genEggVals();


    console.log("Egg 1 = " + firstVal);
    console.log("Egg 2 = " + secondVal);
    console.log("Egg 3 = " + thirdVal);
    console.log("Egg 4 = " + fourthVal);
}

// ------------------------- //
// CLICK EVENT HANDLERS 
// ------------------------- //

$("#btn-one").on("click", function () {
    console.log(firstVal);

    currentScore += firstVal;
    userScoreDOM.text(currentScore);
    winOrLose();
});

$("#btn-two").on("click", function () {
    console.log(secondVal);

    currentScore += secondVal;
    userScoreDOM.text(currentScore);
    winOrLose();
});

$("#btn-three").on("click", function () {
    console.log(thirdVal);

    currentScore += thirdVal;
    userScoreDOM.text(currentScore);
    winOrLose();
});

$("#btn-four").on("click", function () {
    console.log(fourthVal);

    currentScore += fourthVal;
    userScoreDOM.text(currentScore);
    winOrLose();
});


gameInit();








