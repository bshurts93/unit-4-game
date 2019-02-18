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
function randNumScore() {
    return Math.floor(Math.random() * 15 + 16); // Gets a random number between 14 and 30
}
function randNumCrystal() {
    return Math.floor(Math.random() * 5 + 2); // Gets a random number between 2 and 6
}

function winOrLoss(result) {
    if (result === "win") {
        wins++;
        messageText.text("You win!");
        messageBox.addClass("message-box-active");
        gameInit();
    } else if (result === "loss") {
        losses++
        messageText.html("You lose!");
        messageBox.addClass("message-box-active");
        gameInit();
    }
}

function click(id, val) {
    $(id).on("click", function () {

        currentScore += val;
        userScoreDOM.text(currentScore);

        // console.log("ID: " + id + ". Val: " + val + ".");

        if (currentScore == targetScore) {
            winOrLoss("win");
        } else if (currentScore > targetScore) {
            winOrLoss("loss");
        }
    });
}
function resetUserScore() {
    userScoreDOM.text("0");
    console.log("score is reset");
    currentScore = 0;
}

function gameInit() {
    // Put code here that sets up the game from the start
        // Assign a random number to the target score and push to DOM
        targetScore = (randNumScore());  // Scoring value
        targetScoreDOM.text(targetScore);  // Pass that value to the DOM

        // Assign a unique random number to each crystal value
        redVal = randNumCrystal();
        greenVal = randNumCrystal();

        // Run function for button click events
        click("#btn-green", greenVal);
        click("#btn-red", redVal);

        // Reset user score
        resetUserScore();
};


gameInit();

