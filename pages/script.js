//function ageCalculator(currentYear, birthYear) {
//   firstAgeOption = currentYear - birthYear;
//}
//const currentYear = 2019;
//const birthYear = 2001;

//let temp= Math.random()

//function temperatureConverter (temp, typeOfTemp) {
  //  if (typeOfTemp === 'F'){
  //      alert((temp - 32) * (5/9))
  //  } else {
  //      alert((temp * 9/5) + (32)) 
 //   }
//}
//temperatureConverter(temp,"F");

//let randomNumber = Math.floor(Math.random() * 100) + 1;

//const guesses = document.querySelector('.guesses');
//const lastResult = document.querySelector('.lastResult');
//const lowOrHigh = document.querySelector('.lowOrHigh');

//const guessSubmit = document.querySelector('.guessSubmit');
//const guessField = 

let num = Math.floor((Math.random() * 100) + 1)
let display = document.getElementById('result')

 function checkResult(){
     let guess = parseInt(document.getElementById('number').value);
 
    if (guess == null){
        return
    }
    else if (guess == num){
        display.style.color = "#000000";
        display.innerHTML = "You're Right!";
    }
    else if (guess > num){
        display.style.color ="#000000";
        display.innerHTML = "Your Guess is too High";
    }
    else {
        display.style.color = "#000000";
        display.innerHTML = "Your Guess is too low";
    }
}