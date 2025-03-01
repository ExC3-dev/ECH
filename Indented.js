javascript:(function(){
    // Prompt the user to enter the desired WPM (words per minute)
    var wpm = parseInt(prompt("Enter your desired WPM:"));

    // Validate the user input
    if (isNaN(wpm)) return alert("Please enter a valid number.");
    if (wpm > 150 && !confirm("WPM above 150 may cause lag. Continue?")) return;
    if (wpm <= 0) return alert("WPM must be greater than 0.");

    alert("Starting...");

    var origwpm = wpm; // Store the original WPM for variation adjustments
    var cheat; // Variable to hold the typing automation interval

    /**
     * Function: startTyping
     * Description: Simulates typing by triggering the website's built-in keypress handler.
     */
    function startTyping() {
        cheat = setInterval(() => {
            setTimeout(() => {
                // Check if we have reached the last character in the text
                if (core.cur_char_index >= core.text.length - 1) {
                    core.bound_keypress_handler({ key: "Enter" }); // Press Enter to submit the last word
                    clearInterval(cheat); // Stop typing
                    return;
                }

                // Simulate keypress for the current character
                core.bound_keypress_handler({ key: core.cur_char.chr });

            }, Math.random() * 15 + 10); // Add a small delay to simulate human typing variation
        }, 12000 / wpm); // Adjust typing speed based on user-defined WPM
    }

    /**
     * Function: monitorCompletion
     * Description: Monitors when the typing test ends and automatically restarts.
     */
    function monitorCompletion() {
        setInterval(() => {
            // Look for the "Continue" button, which appears after completing a test
            let btn = document.querySelector(".navbar-continue");
            if (btn) {
                btn.click(); // Click the button to start a new test

                // Add slight variation to WPM to avoid detection
                wpm = origwpm + (Math.random() * 8 - 4); // Random variation ±4 WPM

                // Restart typing after a short delay
                setTimeout(startTyping, 3000);
            }
        }, 2500); // Check every 2.5 seconds for the continue button
    }

    // Start the typing automation
    startTyping();

    // Start monitoring for test completion
    monitorCompleti
