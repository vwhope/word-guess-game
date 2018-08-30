// Javascript for Word-Guess-Game
//
// This is just a test to be sure I have .js file linked correctly
// note to self - remove this before submission
var  myHeading = document.querySelector("h1");
myHeading.textContent = "Word-Guess Game";

// set Global variables

// for winWordArea - crt individual arrays, then link to master array so can use the same index number
var wordList = ["lemons", "blueberries", "cherries"];
var winImage = ["../images/lemons.jpg", "../images/blueberries.jpg", "../images/cherries.jpg"];
var winText = ["text about lemons", "text about blueberries", "text about cherries"];
var winSound = ["../audio/lemon.mp3"]
var masterArray = new Array ();
masterArray[0] =  wordList;
masterArray[1] = winImage;
masterArray[2] = winText;
masterArray[3] = winSound;

// var char1 = ["l", "e", "m", "o", "n", "s"];
// var char2 = ["b", "l", "u", "e", "b", "e", "r", "r", "i", "e", "s"];
// var char3 = ["c", "h", "e", "r", "r", "i", "e", "s"];
// var word1 = ["lemons"]

var userGuess = " ";
var totWins =  0;
var guessRemain = 0;
var guessRemaining = 0;
var newGame = true; //this is for the very first time through
var nextGame = false; // this is for each new word after the first word until i >= wordList.length
var winGame = false; // only set to true if correctLetters = gameWord AND guessRemain !== 0
var userKey;
var correctWord = [];
var wrongWord = [];

// totWords is the maximum number of games the player can guess without repeating  words
var totWords = wordList.length;
console.log(totWords);

// Beginning of a new Game - word 1 - reset all variables, set to start at first word in array wordList[0] 
if (newGame === true && nextGame === false) {
    //for each newGame:
   // set gameWord to wordList[0], for each new game i++, at last array element no words left = endGame
   // put the letters of the word into an array ?
    var gameWord = wordList[0]; // by doing this, have I made gameWord an array? it is acting like an array?
    console.log(gameWord);
    console.log(gameWord.length);
    console.log(gameWord[3]); // test to see if could get specific character in the string - I did
    
    // set initial guessRemain for start of game
    var guessRemain  = document.getElementById("guessRemain");
    guessRemain.textContent = gameWord.length +1;
    guessRemaining = guessRemain.textContent;
    
    // set initial correctLetters - an underscore for each letter in the first word
    var screenLetters = document.getElementById("correctLetters");
    screenLetters.textContent = " ";
    
    for (var i = 0; i < gameWord.length; i++) {
       screenLetters.textContent = "_" + screenLetters.textContent;
    }
    console.log(correctLetters);
    console.log(correctLetters.textContent);

    // set Letters Already Guessed to blank
    var badLetters = document.getElementById("wrongLetters");
    badLetters.textContent = " ";

   // get the key the user pressed
   
   document.onkeyup = function(event) {
    userKey = event.key;  
    console.log(userKey);
   };
//!!!!why is the code below executing BEFORE the user presses a key????? And NOT executing after pressing key???   
// at this point I have the userKey and the gameWord for newGame, but need to loop to compare each new letter try
// I will make this a function eventually (function compareLetter())
// compare Letter by Letter
   for (var i = 0; i < gameWord.length; i++) {
        if (userKey === gameWord[i]) {
            console.log(gameWord[i]);
            correctWord[i] = gameWord[i];
            console.log(correctWord);
        } else {
            wrongWord[i] = gameWord[i];
            console.log(wrongWord);
            wrongWord[i].toUpperCase();
            console.log(wrongWord);
            correctWord[i] = "_";
            console.log(correctWord);
            guessRemaining - 1;
            console.log(guessRemaining);
        }
    } //end of for loop

// at this point we have compared the userKey to all letters in gameWord and need to update the screen with results


} // end of the FIRST IF statement for newGame
   
    
    

    // update document html 
    // compare the user key to letters in the array
    // if letters match, update correctLetter html content for that position on the screen with the user key
    // else if no match, update the wrongLetter array (append wrong letter to array and re-dsp updated array)
    // var newGame = false;
    // var nextRound = true;

    // new round, not new game - don't zero out totWins -  IF winGame = true then totWins++
// } else if (newGame === false && nextGame === true) {
  
//     //for each nextGame:
//     //starting with the second word, do these steps for each new word, until no new words
//     for (var i = 0; i < wordList.length; i++) {
        
//     }
//         //2. get new word
//         //3. update correctLetters for new word and send to screen
//         //4. blank out wrongLetters and send to screen
//         //5. set guessRemaining to length of new word plus 1 and send to screen
//         //6. update winTot if winGame is true

// } else {
//   // for endGame - reset all including winWord, winImage, winText  
    
//     // var newGame = false;
//     // var nextRound = false;
// }

////START GAME HERE
// 1. initialize 
//1. select first word, (wordList[0])
//2. get length of first word, (wordList[0].length)

// reset guessRemain to 7 (or word length plus 1)
//1. get the letter name of the key the user pressed, if not a letter, send error  - resend 

//2. compare letter to letters in the word (write function to compare letter to letters)

//3. if letter match, note index #, update correctLetter array at that index and display it

//4. if no letter match, append wrong letter to the wrongLetter array AND
//   subtract 1 from guessRemain

//get current values of correct and wrong guesses - these are <p> tag elements

// var userRight = document.getElementById("correctLetters");
// console.log(userCorrect);



// var userWrong = document.getElementById("wrongLetters");
// console.log(userWrong);


// Run the following function whenever a key is pressed/released
             // get the name of the key and put in var userKey.
             // then be sure the key name is in lower case for accurate comparison to computer guess

            
            //  document.onkeyup = function(event) {
            //     userGuess.textContent = event.key;
            //     userGuess = userKey.textContent.toLowerCase();
            //     console.log(userGuess);
            //  }; 
            //     alert("you pressed: " + userGuess);
            //     if (userGuess !== "a through z") {
            //         //send error message - a letter key was not selected
            //     }
 
                