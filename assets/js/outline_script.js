// ******************************
// ******************************
// MAIN OUTLINE
// ******************************
// ******************************

    // ******************************
    /* HTML ELEMENTS (some for MAIN page?) */
    // ******************************
        // REQUIRED: START button
        // ?REQUIRED: INTRO/TITLE screen
        // REQUIRED: TEST QUESTIONS
        // REQUIRED: ANSWER BUTTONS
        // REQUIRED: GAME OVER SCREEN
            // Test Score SUBMIT form
        // REQUIRED: COUNTDOWN TIMER DISPLAY
        // REQUIRED: HIGH SCORES DISPLAY
        // OPTIONAL: Correct/Incorrect indicator

    /* 
    ******************************
    ** VARIABLES
    ****************************** 
    */

    // Variable TYPES
    // DATA storage items
    // ---------------------
        // REQUIRED BANK of TEST questions bank (LOCAL STORAGE?)
        // REQUIRED/LOCAL STORAGE: High Scores list 
        // REQUIRED: current score/questions correct
        // REQUIRED: TEMP test questions (use during a test)
        // Max time
        // REQUIRED: time left:

    // Page DISPLAY elements/containers
    // ---------------------
        // REQUIRED: High Scores container/display
            // high scores table
                // list items (initials + score)

        // INTRO/TITLE container:
            // Header/Title
            // Description/instructions

        // REQUIRED: Test questions container

        // REQUIRED: Time Left display container
            // "Time Remaining: " + timeLeft

        // REQUIRED: Game Over container
            // Show Score
            // Input: INITIALS/NAME
            // Button: SUBMIT
        
    // Page EVENT elements (buttons, etc)
    // ----------------------------------
        // ON PAGE LOAD... 
        // REQUIRED: Start button
        // REQUIRED: Answer "button"/ (make list items clickable)
        // REQUIRED: Submit Score button
        // REQ/OPT: Button decorations (color, outline)
        // OPTIONAL: Next/Previous buttons
        // OPTIONAL: Reset/Restart (reload "home" screen, etc)

    // ****************************
    // FUNCTIONS
    // ****************************

    // EVENTS
    // -------------
        // - on PAGE LOAD
        // - R: on START button
        // - R: on ANSWER click
            // - on CORRECT
            // - on INCORRECT
        // - R: on GAME OVER (0 questions left OR 0 time left)
        // - R: on SUBMIT SCORE
        // - on SHOW HIGH SCORES
        // - on RESET

    //--------------
    // FUNCTIONALITIES
        // - Load TEMP QUESTIONS
        // - Display TITLE (unless static)
        // - Disable START button
        // - Create/Start countdown timer
        // - Get/Display FIRST question
        // - Check CORRECT/INCORRECT
        // - Update CURRENT SCORE/NUM_CORRECT
        // - Hide LAST question
        // - REMOVE LAST question from TEMP QUESTIONS
        // - Get/Display NEXT question
        // - Decrement time left (on countdown)
        // - Decrement time left (on INCORRECT)
        // - Update HIGH SCORES (verify score & initials != empty)
    
// ****** OUTLINE ****************************