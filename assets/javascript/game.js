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
var redDOM = $("btn-red");
var greenDOM = $("btn-green");


// ------------------------- //
// FUNCTION DECLARATIONS
// ------------------------- //
var randNumScore = function () {
    return Math.floor(Math.random() * 15 + 16); // Gets a random number between 14 and 30
}

var randNumCrystal = function () {
    return Math.floor(Math.random() * 5 + 2); // Gets a random number between 2 and 6
}

var click = function (id, val) {
    $(id).on("click", function () {
        currentScore += val;
        userScoreDOM.text(currentScore);

        if (currentScore == targetScore) {
            console.log("you win");
            $(".user-score").text("You win!");
            gameInit();
        } else if (currentScore > targetScore) {
            console.log("you lose");
            $(".user-score").text("You lose!");
        }
    });
}

var gameInit = function () {
    // Put code here that sets up the game from the start

    // Reset user score
    currentScore = 0;
    // Assign a random number to the target score and push to DOM
    targetScore = (randNumScore());  // Scoring value
    targetScoreDOM.text(targetScore);  // Pass that value to the DOM

    // Assign a unique random number to each crystal value
    redVal = randNumCrystal();
    greenVal = randNumCrystal();

    // Run function for button click events
    click("#btn-green", greenVal);
    click("#btn-red", redVal);
}

// ------------------------- //
// GAME PROCESS
// ------------------------- //