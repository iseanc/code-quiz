console.log("This is the right JS script.")
// ******************************

//******************************
//** VARIABLES
//****************************** 

// Page EVENT elements (buttons, etc)
// ----------------------------------
// BUTTONS
    // REQUIRED: Start button
    var startButton = document.querySelector("#start-button");
    // REQUIRED: Answer "button"/ (make list items clickable)
    // REQUIRED: Submit Score button
    // OPTIONAL: Next/Previous buttons
    // OPTIONAL: Reset/Restart (reload "home" screen, etc)
    // REQ/OPT: Button decorations (color, outline)
    
    
    // reset/try again 
    // submit (score + initials)
    // clear high scores
    // answer buttons

// OTHER EVENT ELEMENTS 
    // ON PAGE LOAD...

// Page DISPLAY elements/containers
// ---------------------
    // REQUIRED: High Scores container/display
        // high scores table
            // list items (initials + score)

    // INTRO/TITLE container:
        // Header/Title
        // Description/instructions

    // REQUIRED: TEST QUESTIONS container - id="test-container"
    var testContainerEl = document.querySelector("#test-container");
    // QUESTION text
    var testQuestionEl = document.createElement("p");
    // ANSWER list
    var testAnswerListEl = document.createElement("ul");
    // ANSWER list items
    var testAnswerItemEl = document.createElement("li");

    // REQUIRED: Time Left display container
        // "Time Remaining: " + timeLeft

    // REQUIRED: Game Over container
        // Show Score
        // Input: INITIALS/NAME
        // Button: SUBMIT

// ---------------------
// DATA storage items
// ---------------------
// REQUIRED BANK of TEST questions bank (LOCAL STORAGE?)
var questions = [
    { 
        question: "What is a characteristic of <i>first-class functions</i>?",
        answers: { 
            a: "They can be passed as an argument to other functions.",
            b: "They can be returned by another function.",
            c: "They can be assigned as a value to a variable.",
            d: "All of the above are characteristics of first-class functions."
        },
        correct: "d"
    },
    { 
        question: "The primitive data types in JavaScript are __________.",
        answers: { 
            a: "string, number, bigint, boolean, undefined, symbol, and null",
            b: "number, binary, decimal, Unicode, ASCII, and hexadecimal",
            c: "multiplication, division, addition, and subtraction",
            d: "int, byte, short, long, float, double, boolean, and char"
        },
        correct: "a"
    },
    { 
        question: "What is the output of <code>console.log(3 + 3 * 5 % 2);</code>",
        answers: { 
            a: "9",
            b: "4",
            c: "0",
            d: "1"
        },
        correct: "b"
    },
    { 
        question: "Which of the following is false?",
        answers: { 
            a: "<code>'10' == 10</code>",
            b: "The values <code>false</code>, <code>0</code>, <code>\"\"</code> (empty string) and <code>undefined</code> are all <i>falsy</i> values.",
            c: "<code>false</code>",
            d: "<code>false === false</code>",
        },
        correct: "c"
    },
    { 
        question: "Given a function <code>var greetings = function() { return 'Hello, World!' };</code>, which statement is correct?",
        answers: { 
            a: "It is a <i>function declaration</i> that can be invoked <i>anywhere</i> in the code.",
            b: "It is a <i>function expression</i> and may only be invoked <i>after</i> it has been declared.",
            c: "It is a <i>function declaration</i> and can only be invoked <i>after</i> it has been declared.",
            d: "It is a <i>function expression</i> and it can be invoked <i>anywhere</i> in the code."
        },
        correct: "a"
    }
]
/* QUESTION TEMPLATE: 
    { 
        question: "a",
        answers: { 
            a: a,
            b: b,
            c: c,
            d: d
        },
        correct: a
    }
*/

// REQUIRED/LOCAL STORAGE: High Scores list 
var highScores = [
    {
        initials: "SEC",
        score: 10,
        date: "10/07/2022"
    },
    {
        initials: "SEC",
        score: 20,
        date: "10/05/2022"
    }
];

// REQUIRED: current score/questions correct

// REQUIRED: TEMP test questions (use during a test)
var tempQuestions = [];

// Max time

// REQUIRED: time left:

    
// ****************************
// FUNCTIONS
// ****************************



//--------------
// FUNCTIONALITIES
    //START - Load TEMP QUESTIONS
    //START - Disable START button
    //START - Create/Start countdown timer
    //START - Get/Display FIRST question
    //ANSWER - Check CORRECT/INCORRECT
    //ANSWER - Update CURRENT SCORE/NUM_CORRECT
    //ANSWER/GAME OVER - Hide LAST question
    //ANSWER? - REMOVE LAST question from TEMP QUESTIONS
    //ANSWER - Get/Display NEXT question
    //ON TICK - Decrement time left (on countdown)
    //ANSWER - Decrement time left (on INCORRECT)
    // - Update HIGH SCORES (verify score & initials != empty)
    //RESET/PAGE LOAD - Enable START button
    


//Event types
// Data loading/updates
// ---------------------
    // Load a TEMP Questions array
        // Randomly select from BANK
        // Push onto TEMP array
    // Track questions answered and remaining
    // IDEA: Remove "answered" questions from TEMP array
    // Load NEXT question

// SUPPORTING FUNCTIONS (called from FUNCTIONALITIES BY EVENT below)

// The startTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}


// - FUNCTIONALITIES (by EVENT)
// ---------------------
    // On page load
        // Load TITLE/INTRO

    // REQUIRED: On START click
    // The startGame function is called when the start button is clicked
    
    function startGame() {
        //Q: Do I need to make sure it's not a GAME OVER CONDITION?
        isWin = false;
            // Disable/Hide start button
            // Prevents start button from being clicked when round is in progress
            startButton.disabled = true;
            // Start the countdown timer
            timerCount = 10;
            startTimer()
            
            // Load TEMP Questions array
            
            // DISPLAY first temp question
            
            //renderBlanks()
    }

    // REQUIRED: On ANSWER click
        // IF/WHILE (THERE ARE TEMP QUESTIONS LEFT)...
            // Check correctness
                // IF CORRECT:
                    // Update score
                    // Remove last ? from TEMP array
                    // Get/load next NEW question
                // ELSE (INCORRECT):
                    // Decrement time remaining
                    // Remove last ? from TEMP array
                    // Get/Load next question

    // REQUIRED: On GAME OVER/FINISH (all ?'s answered OR 0 time remaining)
        // Show "GAME OVER" message
        // Show Total Score
        // Show INPUT message/field for name/initials
        // Show SUBMIT button.

    // REQUIRED: On SUBMIT SCORE button (click)
        // Verify TEXT != "" and SCORE != "";
        // Add score/initials to High Scores array (as object(JSON Stringify)
        // OPT: Display high scores (or just use Show Scores btn to load)

    // on SHOW HIGH SCORES

    // on RESET

    // REQUIRED: on TICK/time passing

// - Timer(s)
// ---------------------
    // - START a countdown
    // - Keep counting down
    // - Decrement TIME on INCORRECT
    // - Reset TimeLeft

// EVENT LISTENERS
// -------------
    // - on PAGE LOAD
    // - R: on START button -  RUN function startGame()
    // start button listener - Attach event listener to start button to call startGame function on click
    startButton.addEventListener("click", startGame);
    // - R: on ANSWER click
    // - R: on GAME OVER (0 questions left OR 0 time left)
    // - R: on SUBMIT SCORE
    // - on SHOW HIGH SCORES
    // - on RESET
    // - R: on TICK/time passing

// ****** OUTLINE ****************************




// LOAD-QUESTION Calling a value from 'questions' and displaying it in HTML
var myAnswer = questions[3].answers.a;
var tag = document.createElement("h2");
tag.innerHTML = myAnswer;
document.body.appendChild(tag);


/* Page DISPLAY  */
var questionPoints = 10;
var score = 0;
var correct = 0;
var secondsPerQuestion = 30
var secondsTotal = questions.length * secondsPerQuestion; // 30 seconds per question
var secondsPenalty = secondsPerQuestion;
var gameOver = "Game Over!";

// another
// var tagOl = document.createElement("ul");
// tagOl.innerHTML = questions;
// document.body.appendChild(tagOl);

/* 
******************************
** FUNCTIONS
****************************** 
*/

// on page load -- window.init() ??
function initPage() {
    // Load START screen header/message & START BUTTON
}

// Countdown timer
function countdown() {
    var timeLeft = 5;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left to start";
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        // Calls function to create and append image
        // only executes once because of clearInterval, and only after timeLeft reaches zero.
        displayMessage();
      }
    // if you run displayMessage() from here, it starts
    // at the same time as this function.
    }, 1000);
  }



// Load questions into TEMP QUESTIONS array
function loadQuestions() {
    // Create QUESTION element
        // load Question into textContent/innerHTML
        // append to parent element to display
        // SEE COMMENT // LOAD-QUESTION
    
    // Create ANSWER list
        // make <OL></OL>
        // For each ANSWER in tempQuestion.ArrayElement...
            // make an <LI></LI>
            // load ANSWER TEXT into textContent/innerHTML
            // do something with the CORRECT
}

// ANSWER button click
function answer() {
    // load questions into TEMP QUESTIONS array (random order?)
    // Hide "start screen"
    // Display first question & answers in HTML 
    // WHILE there are still questions left in TEMP QUESTIONS
        // INCORRECT:
            // decrement timer
            // Load next question
        // CORRECT:
            // record points/num correct
            //load next question
}

// decrement time on wrong

// game over
function gameOver() {

}

// record user's initials and score
function recordScore() {
    // get data from Initials input
    // get score from this test round
        // from var score or var correct
    // add initials + score to High Scores
}


// display list of High Scores 
function listHighScores() {

}

