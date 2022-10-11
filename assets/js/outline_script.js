// ******************************
// ******************************
// MAIN OUTLINE
// ******************************
// ******************************

// ******************************
/* HTML ELEMENTS (some for MAIN page?) */
// ******************************

// IN INDEX.HTML
    // xx REQUIRED: START button 
        // - id="start-button" class="btn start-button"
    // xx REQUIRED: INTRO/TITLE screen
        // - I'm leaving the title/instructions/start button exposed
        // - and will disable the start button
    // xx REQUIRED: TEST QUESTION AREA
        // CONTAINER: id="test-container" class="card test"
    

// ADD VIA JAVASCRIPT
    // REQUIRED: TEST QUESTION <p></p>
    // REQUIRED: Answer list <ul></ul> or <ol></ol>
        // REQUIRED: ANSWER BUTTONS <li></li>
    // REQUIRED: GAME OVER SCREEN
        // Test Score SUBMIT form

// TO BE DETERMINED
    // REQUIRED: COUNTDOWN TIMER DISPLAY
    // REQUIRED: HIGH SCORES DISPLAY
    // OPTIONAL: Correct/Incorrect indicator


//******************************
//** VARIABLES
//******************************

// Page EVENT elements (buttons, etc)
// ----------------------------------
// BUTTONS

    // ---------------
    // COMPLETED
    // ---------------
        // xx REQUIRED: Start button

    // ---------------
    // INCOMPLETE
    // ---------------
        // REQUIRED: Answer "button"/ (make list items clickable)
        // REQUIRED: Submit Score button
        // OPTIONAL: Next/Previous buttons
        // OPTIONAL: Reset/Restart (reload "home" screen, etc)
        // REQ/OPT: Button decorations (color, outline)

    // HTML elements
    
    // OTHER EVENT ELEMENTS 
        // ON PAGE LOAD...

// Page DISPLAY elements/containers
// ---------------------
    // ---------------
    // COMPLETED
    // ---------------
        // XX REQUIRED: Test questions container - id="test-container"
            // XX QUESTION text
            // XX ANSWER list
                // XX ANSWER list items
        // XX INTRO/TITLE container:
            // XX Header/Title
            // XX Description/instructions
            // XX Start Button

    // ---------------
    // INCOMPLETE
    // ---------------

        // REQUIRED: High Scores container/display
            // high scores table
                // list items (initials + score)

        // REQUIRED: Time Left display container
            // "Time Remaining: " + timeLeft

        // REQUIRED: Game Over container
            // Show Score
            // Input: INITIALS/NAME
            // Button: SUBMIT
    
// ---------------------
// DATA storage items
// ---------------------

    // ---------------
    // COMPLETED
    // ---------------
        //XX REQUIRED BANK of TEST questions bank (LOCAL STORAGE?)
        //XX REQUIRED/LOCAL STORAGE: High Scores list 
        //XX REQUIRED: TEMP test questions (use during a test)

    // ---------------
    // INCOMPLETE
    // ---------------
        
        // REQUIRED: current score/questions correct
        // Max time
        // REQUIRED: time left:


// ****************************
// FUNCTIONS
// ****************************

    // ---------------
    // COMPLETED
    // ---------------

    // ---------------
    // INCOMPLETE
    // ---------------

        //--------------
        // FUNCTIONALITIES (ON EVENT)
            //E - on PAGE LOAD
            //E - R: on START button
                // function startGame()
                    //F - REQ: Disable START button
                    //F - REQ: Load TEMP QUESTIONS
                    //F - Create/Start countdown timer
                    //F - Get/Display FIRST question

            //E - R: on ANSWER click
                //F Check CORRECT/INCORRECT
                    //F IF INCORRECT
                        //F - Decrement time left (on INCORRECT)
                        //F - Hide LAST question
                        //F - REMOVE LAST question from TEMP QUESTIONS
                    //F IF CORRECT
                        // - Update CURRENT SCORE/NUM_CORRECT
                        // - Hide LAST question
                        // - REMOVE LAST question from TEMP QUESTIONS
                        // - Get/Display NEXT questions
                //F - Get/Display NEXT question

            //E - R: on GAME OVER (0 questions left OR 0 time left)
            //E - R: on SUBMIT SCORE
                //F - Update HIGH SCORES (verify score & initials != empty)
            
            //E - on SHOW HIGH SCORES
            //E - on RESET
                // F - Enable START button
                //
            //E- R: on TICK/time passing
                //F - Decrement time left (on countdown)

            // EVENTS/EVENT LISTENERS
        // -------------
            // - on PAGE LOAD
            // - R: on START button
            // - R: on ANSWER click
            // - R: on GAME OVER (0 questions left OR 0 time left)
            // - R: on SUBMIT SCORE
            // - on SHOW HIGH SCORES
            // - on RESET
            // - R: on TICK/time passing

// ****** OUTLINE ****************************