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
    return redVal, greenVal;
}

function genTargetScore() {
    targetScore = Math.floor(Math.random() * 15 + 16);
    targetScoreDOM.text(targetScore);
}

function winOrLose(result) {
    if (result == "win") {
        wins++;
        winsDOM.text(wins);
        gameInit();
    } else if (result == "lose") {
        losses++
        losssesDOM.text(losses);
        gameInit();
    }
}

function gameInit() {
    currentScore = 0;
    userScoreDOM.text(currentScore);

    genTargetScore();

    genCrystalVals();


    console.log("redVal = " + redVal);
    console.log("greenVal = " + greenVal);
}

// function clicks(id, val) {
//     $(id).on("click", function () {
//         console.log(val);

//         currentScore += val;
//         userScoreDOM.text(currentScore);

//         if (currentScore == targetScore) {
//             winOrLose("win");
//             genCrystalVals();
//         } else if (currentScore > targetScore) {
//             winOrLose("lose");
//             genCrystalVals();
//         }
//     });
// }

$("#btn-red").on("click", function () {
    console.log(redVal);

    currentScore += redVal;
    userScoreDOM.text(currentScore);

    if (currentScore == targetScore) {
        winOrLose("win");
    } else if (currentScore > targetScore) {
        winOrLose("lose");
    }
});

$("#btn-green").on("click", function () {
    console.log(greenVal);

    currentScore += greenVal;
    userScoreDOM.text(currentScore);

    if (currentScore == targetScore) {
        winOrLose("win");
    } else if (currentScore > targetScore) {
        winOrLose("lose");
    }
});


gameInit();

// clicks("#btn-red", redVal);
// clicks("#btn-green", greenVal);








