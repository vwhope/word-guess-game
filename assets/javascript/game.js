// Javascript for Word-Guess-Game
//
// note to self - do this without jQuery first, then again with jQuery to understand the difference
//
// there are random food(fruit) generators, but don't know how I would link to my photo, sound, etc.
// I would have to have those objects for every possible word the generator might select so am not trying to use a generator yet
//
// First two lines below are just a test to be sure I have .js file linked correctly
// note to self - remove this before submission and type the correct heading in the HTML file
var  myHeading = document.querySelector("h1");
myHeading.textContent = "Word-Guess Game";

// set Global variables

// for winWordArea - crt individual arrays, then link to master array so can use the same index number
// to access sub array element:
// masterArray[# of subArray ex. 0 is wordList] [index of element in subArray ex. 0 is lemons]
var wordList = ["lemons", "blueberries", "cherries"];
var winImage = ["../images/lemons.jpg", "../images/blueberries.jpg", "../images/cherries.jpg"];
var winText = ["text about lemons", "text about blueberries", "text about cherries"];
var winSound = ["../audio/lemons.mp3","../audio/blueberries.mp3","../audio/cherries.mp3"];
var masterArray = new Array ();
masterArray[0] = wordList;
masterArray[1] = winImage;
masterArray[2] = winText;
masterArray[3] = winSound;

// keep in case I need - but I should be able to get these programmatically!
// var char1 = ["l", "e", "m", "o", "n", "s"];
// var char2 = ["b", "l", "u", "e", "b", "e", "r", "r", "i", "e", "s"];
// var char3 = ["c", "h", "e", "r", "r", "i", "e", "s"];
// var word1 = ["lemons"]

// or could create an object for each word, but I will have to know what words are in the game instead of using a random generator
// access like this: lemon[name] - holds the string "lemon" 
// can also access with dot notation if property has no spaces:  lemon.name
// which way? quotes or no quotes around property name - saw it both ways in class examples????

var lemon = {
    name: "lemon",
    image: "../images.lemons.jpg",
    text: "text about lemons goes here",
    sound: "../sound.lemonsound.mp3",
}

var blueberries = {
    "name": "blueberries",
    "image": "../images.blueberries.jpg",
    "text": "text about blueberries goes here",
    "sound": "../sound.lemonsound.mp3",
}

var cherries = {
    "name": "cherries",
    "image": "../images.cherries.jpg",
    "text": "text about cherries goes here",
    "sound": "../sound.cherries.mp3",
}

// should the game itself be an object? what would its properties be? functions
//
var userGuess = " ";
var totWins =  0;
var guessRemain = 0;
var guessRemaining = 0;
var newGame = true; //this is for the very first word
var nextGame = false; // this is for each new word after the first word until i >= wordList.length
var winGame = false; // only set to true if correctLetters = gameWord AND guessRemain !== 0
var userKey; // this will hold the value of the key the user pressed
var correctWord = []; // an array to build the string that will be sent to ID correctLetters 
var wrongWord = []; // an array to build the string that will be sent to ID wrongLetters

// totWords is the maximum number of games the player can guess without repeating words - may not need
var totWords = wordList.length;
console.log(totWords);

// function for starting a new game - I think I need to pass two boolean variables into it - newGame and nextGame 
// function startGame(boolean, boolean) { // the end curly braces must go at the end of the function - but not sure where that is yet
// Beginning of a new Game - word 1 - reset all variables, set to first word in array: wordList[0] 
if (newGame === true && nextGame === false) {
  
    //for each newGame:
   // set gameWord to wordList[0], for each nextGame increase index by 1 (i++), at last array element no words left = endGame
   // put the letters of the word into an array ?
    var gameWord = wordList[0]; // by doing this, have I made gameWord an array? it is acting like an array?
    console.log(gameWord);
    console.log(gameWord.length);
    console.log(gameWord[3]); // test to see if could get specific character in the string - I did
    
    // set remaining guesses value to length of word plus 1, update screen - this is before user presses any key
    var guessRemain  = document.getElementById("guessRemain");
    guessRemain.textContent = gameWord.length +1;
    guessRemaining = guessRemain.textContent;
    
    // set initial correctLetters value to underscore for each letter in the first word
    var screenLetters = document.getElementById("correctLetters");
    screenLetters.textContent = " ";
    console.log(screenLetters);
    
    for (var i = 0; i < gameWord.length; i++) {
       screenLetters.textContent = "_" + screenLetters.textContent;
    }
    console.log(screenLetters.textContent);
    console.log(correctLetters);
    console.log(correctLetters.textContent);

    // set "Letters Already Guessed" to blank
    var badLetters = document.getElementById("wrongLetters");
    badLetters.textContent = " ";

   // get the key the user pressed
   
   document.onkeyup = function(event) {
    userKey = event.key;  
    console.log(userKey); // is it okay to put this inside the function? or should it go after the curly braces?
   };

//!!!!why is the code below executing BEFORE the user presses a key????? And NOT executing after pressing key???   
// at this point I have the userKey and the gameWord for newGame, but need to loop to compare each new letter try
// I will make this a function eventually (function compareLetter())
// compare Letter by Letter
   for (var i = 0; i < gameWord.length; i++) {
        if (userKey === gameWord[i]) {
            console.log(gameWord[i]);
            correctWord[i] = gameWord[i];
            console.log(correctWord[i]);
        } else {
           // put user's guessed letter into the wrongWord array at that index
            wrongWord[i] = gameWord[i];
            console.log(wrongWord);
           // convert the letter to Upper Case for proper display 
            wrongWord[i].toUpperCase();
            console.log(wrongWord);
           // put an underscore at that index in the correct word because they did not guees the correct letter
            correctWord[i] = "_";
            console.log(correctWord);
            // decrement the number of remaining guesses by 1 ** issue here is guessRemaining is not a number??
            guessRemaining - 1;
            console.log(guessRemaining);
        }
    } //end of for loop

// at this point I have:
// - compared the userKey to all letters in gameWord
// - built the strings for wrongWord and correctWord based on their first letter guess
// - NEXT TASK
// - need to update the screen with results - use .innerHTML so don't wipe out all HTML code below 
// - somehow I need to repeat the compareLetter until guessRemaining is 0 or correctWord = gameWord
// - (make it a function compareLetter() and recall it for every time a new key is pressed)
// - when guessRemaining = 0 or correctWord = gameWord and guessRemaining is >0
// - if corretWord === gameWord and guessRemaining !== 0, winGame = true
// -   if winGame = true, then increase totWin by 1,
// -   display the wordList, winImage, winText by using masterArray
// -   masterArray[0] = wordList[], masterArray[1] = winImage[], etc. need correct index for subarray
// -   also need onclick event so when user clicks on image the sound is played - add onclick to img in HTML


} // end of the Beginning IF statement for newGame
   
    //?? at correct point? need to update these flags so know if it is first game or new round   
    // var newGame = false;
    // var nextRound = true;
    // next letter guess, in newGame - don't zero out totWins -  IF winGame = true then totWins++
else if (newGame === false && nextGame === true) {
 // this is the next word guess - the user either lost or won the first word guess game 
//     //for each nextGame:
//     // do these steps each time a new word is given, until no new words
//     for (var i = 0; i < wordList.length; i++) {
//  set counter to start with the second word [1],      
//     }          
     }
//         //2. get new word
//         //3. update correctLetters for new word and send to screen
//         //4. blank out wrongLetters and send to screen
//         //5. set guessRemaining to length of new word plus 1 and send to screen
//         //6. update winTot if winGame is true

else {
//   // for endGame - reset all including winWord, winImage, winText  
    
//     // var newGame = false;
//     // var nextRound = false;
}

//  Error checking to add once game is working
//  1. what to do if user presses the same key twice - don't run anything
//  2. if user presses a key that is not a letter ( number or other key) - send message "Press a letter key"
//  3. probably need a check user key function to check valid key and change to lower case
//     var validUserKey = {
        if (userGuess)
alert("you pressed: " + userGuess);
    //     if (userGuess !== "a through z") {
    //         //send error message - a letter key was not selected
    //     }





// Run the following function whenever a key is pressed/released
             // get the name of the key and put in var userKey.
             // then be sure the key name is in lower case for accurate comparison to computer guess

            
            //  document.onkeyup = function(event) {
            //     userGuess.textContent = event.key;
            //     userGuess = userKey.textContent.toLowerCase();
            //     console.log(userGuess);
            //  }; 
            //     
 
                