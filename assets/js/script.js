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
    var answerButton = document.querySelector("#start-button");
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
var testItemEl = document.querySelector("#test-item");
// QUESTION text
var testQuestionEl = document.createElement("p");
// ANSWER list
var testAnswerListEl = document.createElement("ol");
// ANSWER list items
// var testAnswerItemEl = document.createElement("li");

// REQUIRED: Time Left display container
var timerElement = document.querySelector(".timer-count");
    // "Time Remaining: " + timeLeft

    // REQUIRED: Game Over container
        // Show Score
        // Input: INITIALS/NAME
        // Button: SUBMIT

// ---------------------
// DATA storage items
// ---------------------
// REQUIRED BANK of TEST questions bank (LOCAL STORAGE?)
// var questions = [
//     { 
//         question: "What is a characteristic of <i>first-class functions</i>?",
//         answers: { 
//             a: "They can be passed as an argument to other functions.",
//             b: "They can be returned by another function.",
//             c: "They can be assigned as a value to a variable.",
//             d: "All of the above are characteristics of first-class functions."
//         },
//         correct: "d"
//     },
//     { 
//         question: "The primitive data types in JavaScript are __________.",
//         answers: { 
//             a: "string, number, bigint, boolean, undefined, symbol, and null",
//             b: "number, binary, decimal, Unicode, ASCII, and hexadecimal",
//             c: "multiplication, division, addition, and subtraction",
//             d: "int, byte, short, long, float, double, boolean, and char"
//         },
//         correct: "a"
//     },
//     { 
//         question: "What is the output of <code>console.log(3 + 3 * 5 % 2);</code>",
//         answers: { 
//             a: "9",
//             b: "4",
//             c: "0",
//             d: "1"
//         },
//         correct: "b"
//     },
//     { 
//         question: "Which of the following is false?",
//         answers: { 
//             a: "<code>'10' == 10</code>",
//             b: "The values <code>false</code>, <code>0</code>, <code>\"\"</code> (empty string) and <code>undefined</code> are all <i>falsy</i> values.",
//             c: "<code>false</code>",
//             d: "<code>false === false</code>",
//         },
//         correct: "c"
//     },
//     { 
//         question: "Given a function <code>var greetings = function() { return 'Hello, World!' };</code>, which statement is correct?",
//         answers: { 
//             a: "It is a <i>function declaration</i> that can be invoked <i>anywhere</i> in the code.",
//             b: "It is a <i>function expression</i> and may only be invoked <i>after</i> it has been declared.",
//             c: "It is a <i>function declaration</i> and can only be invoked <i>after</i> it has been declared.",
//             d: "It is a <i>function expression</i> and it can be invoked <i>anywhere</i> in the code."
//         },
//         correct: "a"
//     }
// ]

var questions = [
    { 
        question: "What is a characteristic of <i>first-class functions</i>?",
        answers: [ 
            "They can be passed as an argument to other functions.",
            "They can be returned by another function.",
            "They can be assigned as a value to a variable.",
            "All of the above are characteristics of first-class functions."
        ],
        correct: 3
    },
    { 
        question: "The primitive data types in JavaScript are __________.",
        answers: [ 
            "string, number, bigint, boolean, undefined, symbol, and null",
            "number, binary, decimal, Unicode, ASCII, and hexadecimal",
            "multiplication, division, addition, and subtraction",
            "int, byte, short, long, float, double, boolean, and char"
        ],
        correct: 0
    },
    { 
        question: "What is the output of <code>console.log(3 + 3 * 5 % 2);</code>",
        answers: [ 
            "9",
            "4",
            "0",
            "1"
        ],
        correct: 1
    },
    { 
        question: "Which of the following is false?",
        answers: [ 
            "<code>'10' == 10</code>",
            "The values <code>false</code>, <code>0</code>, <code>\"\"</code> (empty string) and <code>undefined</code> are all <i>falsy</i> values.",
            "<code>false</code>",
            "<code>false === false</code>",
        ],
        correct: 2
    },
    { 
        question: "Given the following function, which statement is correct? <pre>\n<code>var greetings = function() {\nreturn 'Hello, World!'};</code></pre>",
        answers: [ 
            "It is a <i>function declaration</i> that can be invoked <i>anywhere</i> in the code.",
            "It is a <i>function expression</i> and may only be invoked <i>after</i> it has been declared.",
            "It is a <i>function declaration</i> and can only be invoked <i>after</i> it has been declared.",
            "It is a <i>function expression</i> and it can be invoked <i>anywhere</i> in the code."
        ],
        correct: 0
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

// LOAD-QUESTION Calling a value from 'questions' and displaying it in HTML
var myAnswer = questions[3].answers.a;
var tag = document.createElement("h2");
tag.innerHTML = myAnswer;
document.body.appendChild(tag);

// REQUIRED: TEMP test questions (use during a test)
var tempQuestions = [];
// represents the currently loaded test question and answers
var currentQuestion;
var currentAnswers;

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

//TIME and TEST LENGTH VARIABLES
// number of test questions to use. Set to 0 to load ALL available questions.
var numQuestionsToUse = 2; 
// static 30 seconds per question
var secondsPerQuestion = 3; 
var secondsTotal; // to store total time allotted for test, set in startGame()
var timerCount; // for countdown timer

// REQUIRED: time left:

// REQUIRED: current score/questions correct
var questionPoints = 10;
var score = 0;
var correct = 0;
var secondsPenalty = secondsPerQuestion;

// another
// var tagOl = document.createElement("ul");
// tagOl.innerHTML = questions;
// document.body.appendChild(tagOl);

// ****************************
// FUNCTIONS
// ****************************

//--------------
// FUNCTIONALITIES
    //START - Get/Display FIRST question
    //ANSWER - Check CORRECT/INCORRECT
    //ANSWER - Update CURRENT SCORE/NUM_CORRECT
    //ANSWER/GAME OVER - Hide LAST question
    //ANSWER? - REMOVE LAST question from TEMP QUESTIONS
    //ANSWER - Get/Display NEXT question
    //ANSWER - Decrement time left (on INCORRECT)
    //Update HIGH SCORES (verify score & initials != empty)
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
  timerCount = secondsTotal;
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    /* MAYBE TEST IF TEMP QUESTIONS IS EMPTY */
    // if (timerCount >= 0) {
    //   // Tests if win condition is met
    //   if (isWin && timerCount > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(timer);
    //     winGame();
    //   }
    // }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

// Load questions into TEMP QUESTIONS/ANSWERS array
function loadQuestions() {
    // load the entire Questions array into a temp array and shuffle it
    const shuffleQuestions = [...questions].sort(() => 0.5 - Math.random());
    // Get a sub-array of the first n elements from the temp array
    // if numQuestionsToUse is a positive value
    if (numQuestionsToUse > 0) {  
        // load that many questions
        tempQuestions = shuffleQuestions.slice(0, numQuestionsToUse);
    } else {
        // otherwise load all available questions 
        tempQuestions = shuffleQuestions.slice(0, shuffleQuestions.length);
    }
    
    console.log("These are the temp questions");
    console.log(tempQuestions)
}

function loadTestQuestion() {
    if (tempQuestions.length > 0) {
        // load first ? from tempQuestions[]
        currentQuestion = tempQuestions[0];
        currentAnswers = currentQuestion.answers;
        // remove the ? from tempQuestions[]
        tempQuestions.shift();
        console.log("lnq_currentQuestion: ", currentQuestion);
        console.log("lnq_currentAnswers: ", currentAnswers);
        // Make sure test-container content is hidden
        testItemEl.dataset.state = "hidden";
        // testItemEl.setAttribute("hidden","");
        testItemEl.removeAttribute("hidden");
        // Create test-item content elements
        // QUESTION element
        testQuestionEl.classList.add("question-font");
        testQuestionEl.innerHTML = currentQuestion.question;
        // ANSWER list <ol></ol>element
        // ANSWER list items
        for (var i = 0; i < currentAnswers.length; i++) {
            var testAnswerItemEl = document.createElement("li");
            console.log("li i/a", [i], currentAnswers[i])
            testAnswerItemEl.classList.add("answer-font");
            testAnswerItemEl.innerHTML = currentAnswers[i];
            testAnswerListEl.appendChild(testAnswerItemEl);
        }
        testAnswerListEl.setAttribute("type","a");
        testItemEl.appendChild(testQuestionEl);
        testItemEl.appendChild(testAnswerListEl);
  
    }
}

function displayTestQuestion() {
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


// actions to take if GAME OVER function
function gameOver() {
    console.log("game over, bruh!");
}


// - FUNCTIONALITIES (by EVENT)
// ---------------------
    // On page load
        // Reset timer to 0
        // Update high scores list (??)
        // Reenable START button
        // Clear TEST container

    // REQUIRED: On START click
    // The startGame function is called when the start button is clicked
    
    function startGame() {
        //Q: Do I need to make sure it's not a GAME OVER CONDITION?
        isWin = false;
            // Disable start button 
            // Prevents start button from being clicked when round is in progress
            startButton.disabled = true;
            // Load questions into tempQuestions array
            loadQuestions();
            // Set timeLeft = tempQuestions.length * timePerQuestion
            secondsTotal = tempQuestions.length * secondsPerQuestion;
            // load a question from tempQuestions array
            loadTestQuestion();
            // DISPLAY first temp question
            // Start the countdown timer
            startTimer()

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
        // If Total Score == 0 || =="", then show message "You did not answer any questions".
        // Otherwise
            //Show Total Score
            // Show INPUT message/field for name/initials
            // Show SUBMIT button.

    // REQUIRED: On SUBMIT SCORE button (click)
        // Verify TEXT != "" and SCORE != "";
        // Add score/initials to High Scores array (as object(JSON Stringify)
        // OPT: Display high scores (or just use Show Scores btn to load)

    // on SHOW HIGH SCORES
        // Sort High Scores array by highest score, descending
        // Retrieve top 10 scores
        // Display scores on screen

    // on RESET
        // Call On Page Load

    // REQUIRED: on TICK/time passing
        // Decrement timeLeft variable
        // Decrement Time Remaining on screen

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
    // Attach event listener to start button to call startGame() on click
    startButton.addEventListener("click", startGame);
    // - R: on ANSWER click
    answerButton.addEventListener("click", checkAnswer);
    // - R: on GAME OVER (0 questions left OR 0 time left)
    // - R: on SUBMIT SCORE
    // - on SHOW HIGH SCORES
    // - on RESET
    // - R: on TICK/time passing

// ****** OUTLINE ****************************

/* 
******************************
** FUNCTIONS
****************************** 
*/

// on page load -- window.init() ??
function initPage() {
    // Load START screen header/message & START BUTTON
}

// ANSWER button click
function checkAnswer() {
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

// decrement time on wrong answer

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

