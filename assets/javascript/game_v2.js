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

function genCrystalVals() {
    redVal = Math.floor(Math.random() * 5 + 2); // Gets a random number between 2 and 6
    greenVal = Math.floor(Math.random() * 5 + 2); // Gets a random number between 2 and 6
}

function genTargetScore() {
    targetScore = Math.floor(Math.random() * 15 + 16);
    targetScoreDOM.text(targetScore);
}

function gameInit() {
    currentScore = 0;
    userScoreDOM.text(currentScore);

    genTargetScore();

    genCrystalVals();


    console.log("redVal = " + redVal);
    console.log("greenVal = " + greenVal);
}




// ------------------------- //
// CLICKS
// ------------------------- //


$("#btn-red").on("click", function(){
    currentScore += redVal;
    userScoreDOM.text(currentScore);


    if (currentScore == targetScore) {
        wins++;
        winsDOM.text(wins);
        gameInit();
    } else if (currentScore > targetScore) {
        losses++;
        losssesDOM.text(losses);
        gameInit();
    }
});

$("#btn-green").on("click", function(){
    currentScore += greenVal;
    userScoreDOM.text(currentScore);

    if (currentScore == targetScore) {
        wins++;
        winsDOM.text(wins);
        gameInit();
    } else if (currentScore > targetScore) {
        losses++;
        losssesDOM.text(losses);
        gameInit();
    }
});






gameInit();

