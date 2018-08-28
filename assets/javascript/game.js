// Javascript for Word-Guess-Game
//
// This is just a test to be sure I have .js file linked correctly
// note to self - remove this before submission
var  myHeading = document.querySelector("h1");
myHeading.textContent = "Word-Guess Game";

// start real code here!
// create individual arrays and then link to a master array so can use the same index number
// start with a bank of Farmers Market words
var wordList = ["lemons", "blueberries", "cherries" ];
var winImage = ["../images/lemons.jpg", "../images/blueberries.jpg", "../images/cherries.jpg"];
var winText = ["text about lemons", "text about blueberries", "text about cherries"];
var winSound = ["../audio/lemon.mp3"]
console.log (wordList);
// totWords is the maximum number of games the player can guess without repeating  words
var totWords = wordList.length;
console.log(totWords);
// for each new game, increment the wordList[index] by 1, to go to a new word to guess
if (newGame = "true") {
    // pick the next array element from wordList
    //put the letters of the word into an array
    // compare the user key to letters in the array
    // if any match, update corrrectLetter array for that position on the screen with the user key
    // else if no match, update the wrongLetter array (append wrong letter to array and re-dsp updated array)
}

else () {

}

//put each lett 

//get the letter name of the key the user pressed, if not a letter, send error  - resend 
var userKey = document.getElementById("userPressed");
console.log(userKey);

// Run the following function whenever a key is pressed/released
             // get the name of the key and put in var userKey.
             // then be sure the key name is in lower case for accurate comparison to computer guess

            
             document.onkeyup = function(event) {
                userKey.textContent = event.key;
                userGuess = userKey.textContent.toLowerCase();
                console.log(userGuess);
             }; 
                alert("you pressed: " + userGuess);
                if (userGuess !== "a through z") {
                    //send error message - a letter key was not selected
                }
 
                