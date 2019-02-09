
        let num = Math.floor((Math.random() * 100) + 1);
        let allowedGuesses = 2;
        let numGuesses = 0;
        let guess = document.numForm.number.value;

function checkResult() {
    if ((numGuesses < allowedGuesses) && (guess != num)) {                    
            guess = document.numForm.number.value;
            guess = parseInt(guess);


            if (guess < num && guess > 1) {
                document.numForm.gameResults.value = "Your guess was too low.";
                numGuesses++;
            }

            else if (guess > num && guess < 100) {
                document.numForm.gameResults.value = "Your guess was too high.";
                numGuesses++;
            }
            else if (guess == num) {
                document.numForm.gameResults.value = "Congratulations! You guessed correctly.";
                numGuesses++;
            }

            else {
                document.numForm.gameResults.value = "Your guess was out of the desired parameters. Please guess again.";
                numGuesses--;
            }
    }

        else {
            document.numForm.gameResults.value = "Sorry, you have reached the allowed number of guesses, which is " + allowedGuesses + "." + " Click 'New Game' to try again.";
        }
    return false;
}