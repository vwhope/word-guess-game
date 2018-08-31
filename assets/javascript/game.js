// Javascript for Word-Guess-Game
//
// TODO: do this without jQuery first, then later try with jQuery to understand the difference
//
// First two lines below are just a test to be sure I have .js file linked correctly
// TODO: remove these 2 lines before submission and type the correct heading in the HTML file
var  myHeading = document.querySelector("h1");
myHeading.textContent = "Word-Guess Game";

// set GLOBAL variables - available to all functions

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
// alternatively and more generically I could create an object named "word" with properties (name, image, text, sound)
// those values would have to be passed into the object as variables?
// below the object is hard-coded for each word in list - not as generic as above idea - is more generic best?
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

// BONUS: only if time permits   if I can make the game itself be an object - do last if time
//
var userGuess = " ";
var totWins =  0;
var guessRemain = 0;
var guessRemaining = 0;
var newGame = true; //this is for the very first word
var nextGame = false; // this is for each new word after the first word until i >= wordList.length
var winGame = false; // only set to true if correctLetters = gameWord AND guessRemain !== 0
var userKey; // this will hold the value of the key the user pressed
var correctWord = []; // an array to build the string that will be sent to ID correctLetters .innerHTML
var wrongWord = []; // an array to build the string that will be sent to ID wrongLetters .innerHTML
var totWords = wordList.length; // max # words the player can guess without repeating words - may not need

// ================================ END OF GLOBAL VARIABLE DEFINITIONS =========================================================

// ================================ Begin functions that will be called to execute the game ====================================
   // for each newGame:
   // get random word from array wordList
   // put the letters of the word into an array gameWordArr
   // put underscores in holding array for each letter of the randomly selected word
   // reset remaining guesses to new word length + 1

function gameSetup() {
   
    var gameWord = wordList[Math.floor(Math.random() * wordList.length)]; // get a random word from list of words
    var gameWordArr = gameWord.split(""); //by not having any spaces between the quotes - an array of letters is created from random word
    var spaceholdArr = [];
    
    for (var i = 0; i < gameWordArr.length; i++) { // write underscores for each letter of the randomly selected word
        spaceholdArr[i] = "_"; // now has an underscore for each letter of the randomly selected word
    }
    document.getElementById("correctLetters").innerHTML = spaceholdArr.join(""); // join makes array into a string, this sets screen to correct number of letters for random word
    
    // set guessRemain to length of word plus 1, update DOM - all done BEFORE user presses any key
    var guessRemain  = document.getElementById("guessRemain");
    guessRemain.textContent = gameWord.length +1;
    guessRemaining = guessRemain.textContent;

  } 
   // User is now playing game - pressing a letter key 
   // get user letter
   // compare user letterput the letters of the word into an array gameWordArr
   // put underscores in holding array for each letter of the randomly selected word
   // reset remaining guesses to new word length + 1

  function gamePlay() {

 // 1. get the key the user pressed, using its keyCode verify that it is a LETTER key, change to lower case
    document.onkeyup = function(event) {
        
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userKey = event.key;
            userKey = userKey.toLowerCase();
          
        } else {
            // i probably need to add code here to create a new div in the HTML to display the error message
            // not sure if can continue game at this point or not?
            alert("please click a letter");
               }
    }; 
    
 // 2. the user has NOW pressed a key - so decrement the guesses remaining by one, update DOM with new value   
    guessRemaining--;
    document.getElementById("guessRemain").textContent = guessRemaining;
    
 // 3. compare the letter key pressed to each letter of the the randomly selected game word to see if a match   
        for (var i = 0; i < gameWord.length; i++) {
            if (userKey === gameWord[i]) {
                
                correctWord[i] = gameWord[i];
                
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
               
            }
        }; //end of for loop
    }

 
  
// ================================ End define functions to be called in the game =====================================================

// ================================ Begin (what could be an object if you make it one) execution of all the game functions ============


if (newGame === true && nextGame === false) { // this is global - may not need this if statement if the game just continues on and on
  gameSetup();
  gamePlay();
  
     
} // end of the Beginning IF statement for newGame


  
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
//  
//  

               