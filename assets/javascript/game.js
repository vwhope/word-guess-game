// Javascript for Word-Guess-Game
//
// TODO: do this without jQuery first, then later try with jQuery to understand the difference
//
// First two lines below are just a test to be sure I have .js file linked correctly
// TODO: remove these 2 lines before submission and type the correct heading in the HTML file
var  myHeading = document.querySelector("h1");
myHeading.textContent = "Word-Guess Game";

// ================================ BEGIN GLOBAL VARIABLE DEFINITIONS =========================================================
// set GLOBAL variables - available to all functions - (generally don't want global- is better to make an encapsulated object

// for winWordArea - for now, crt individual arrays, then link to master array so can use the same index number, later crt object
// to access sub array element: masterArray[# of subArray ex. 0 is wordList] [index of element in subArray ex. 0 is lemons]
var wordList = ["lemons", "blueberries", "cherries"];
var winImage = ["assets/images/lemons-caroline-attwood-574690-unsplash_200.jpg", "assets/images/blueberries-jeremy-ricketts-11154-unsplash_edt.jpg", "assets/images/cherries-thomas-quaritsch-700308-unsplash.jpg"];
var winText = ["Lemons contain a high amount of vitamin C, citric acid, and soluble fiber which may help prevent kidney stones as well as increase absorption of iron from plant foods.", "Blueberries are a good source of vitamin C, vitamin K and fiber. Fiber is important in reducing cholesterol, which may reduce the risk of heart disease.", "Cherries are a good source of potassium, which may help lower blood pressure. They also contain beta-carotine, vitamin C, anthocyanins and quercetin which may help prevent/fight cancer."];
var winSound = ["../audio/lemons.mp3","../audio/blueberries.mp3","../audio/cherries.mp3"];
var masterArray = new Array ();
masterArray[0] = wordList;
masterArray[1] = winImage;
masterArray[2] = winText;
masterArray[3] = winSound;
// alternatively and more generically I could create an object named "word" with properties (name, image, text, sound)
// named values in an object are called properties, each property can be assigned a value (property:value) ex. name:"lemon"
// methods are functions that are performed on objects
// an object method is an object property that contains a function definition (name:function())
// js objects are containers for properties and methods
// ???which is best - generic wordObj or object for each word in wordList (lemon)?????
// var wordObj = {name, image, text, sound} - this creates the object wordObj with 4 properties, any of which can be a var or function??

var wordObj = {
    name: "",
    image: "",
    text: "",
    sound: "",
}

// below are "hard-coded" objects as opposed to generic wordObj - if time, will try to understand which to use????? 
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
    "sound": "../sound.blueberries.mp3",
}

var cherries = {
    "name": "cherries",
    "image": "../images.cherries.jpg",
    "text": "text about cherries goes here",
    "sound": "../sound.cherries.mp3",
}

// BONUS: only if time permits   if I can make the game itself be an object - not sure how to invoke? an object???
//
// var userGuess = " "; // may not need
// var newGame = true; //this is for the very first word, may not need
// var nextGame = false; // this is for each new word after the first word until i >= wordList.length, may not need
var winGame = false; // only set to true if correctLetters = gameWord AND guessRemain !== 0
var totWins =  0;
var guessRemain = 0;
var guessRemaining = 0;
var userKey; // this will hold the value of the key the user pressed
var correctWordArr = []; // an array to build the string that will be sent to ID correctLetters .innerHTML
var wrongWordArr = []; // an array to build the string that will be sent to ID wrongLetters .innerHTML
var gameWord;
var gameWordArr = [];

// ================================ END OF GLOBAL VARIABLE DEFINITIONS =========================================================

// ================================ BEGIN FUNCTIONS that will be invoked to execute the game ===================================
// Do ONCE after HTML page loads (later if time, add button to start new game and then on.click invoke this function)
// randomly select a word from global array: wordList
// put the letters of the selected random word into array: gameWordArr
// put underscores into array correctWordArr - this is where the correctly guessed letter will replace the underscore
// set remaining guesses equal to the gameWord length + 1
// now game is ready to be played

function gameSetup() {
    // I had to set VALUES INSIDE function, but declared var OUTSIDE function in global space so var can be accessed by all functions, not just this one 
    gameWord = wordList[Math.floor(Math.random() * wordList.length)]; // generate a random game word from my array of words
    gameWordArr = gameWord.split(""); //by not having any spaces between the quotes - an array of letters is created from random gameWord
    correctWordArr = [];
    
    for (var i = 0; i < gameWordArr.length; i++) { // write underscores for each letter of the randomly selected word so user knows how many letters in word
        correctWordArr[i] = "_"; // after all interations, will have an underscore for each letter of the randomly selected word
    }
    // output the correct number of underscores for the new word to the HTML doc 
    document.getElementById("correctLetters").innerHTML = correctWordArr.join(""); // join makes array into a string, this sets screen to correct number of letters for random word
    
    // output blanks to Letters Already Guessed (remove letters after you know this works)
    document.getElementById("wrongLetters").innerHTML = " ";
    wrongWordArr = [];
    
    // set guessRemain to length of word plus 1, update DOM - all done AFTER HTML page loads and BEFORE user presses any key
    guessRemain  = document.getElementById("guessRemain");
    guessRemain.textContent = gameWord.length +1;
    guessRemaining = guessRemain.textContent;
    // the guessRemain and guessRemaning values disappear each time the user presses a key
    console.log(guessRemaining); // this holds the correct number without p tag stuff
    console.log(guessRemain); //this is the whole p tag element
    console.log(gameWord);
    console.log(gameWordArr);
    console.log(correctWordArr);
    console.log(correctWordArr.join(""));
    
    
} // END gameSetup function


// perform gamePlay() ANYTIME the registered event handler receives an onkeyup event - user has pressed/released a key
// pass input from that event to gamePlay function 
// keyCode from event input has value of letter pressed. Store keyCode variable userKey, verify it is a letter, change to lower case
// compare userKey to each letter in array gameWordArr
// put underscores in holding array for each letter of the randomly selected word
// reset remaining guesses to new word length + 1
// function gamePlay ONLY runs when user has pressed/released a key!

function gamePlay(event) { // here am passing the input from event which includes ".key" (js engine handler has this info)
console.log(guessRemain); // has correct INITIAL value gameWord.length - 1, from gameSetup() and is already displayed on the screen - somewhere somehow it gets set to 0! WHERE?
console.log(guessRemaining); // this is the nbr I want and it is correct the first time through after gameSetup() as well
// every time you run this function guessRemaining is a 0
// be sure key pressed is a letter key before continuing (https://css-tricks.com/snippets/javascript/javascript-keycodes/)
if (event.keyCode >= 65 && event.keyCode <= 90) {
    userKey = event.key;
    userKey = userKey.toLowerCase();
    console.log(userKey);
    
    // reset error message in case user previously selected a non-letter key
    document.getElementById("message").innerHTML = "Press a letter key to guess again."; 
    
    // if userKey IN gameWord array, add the letter to correctWord arr at that index
    for (var i = 0; i < gameWord.length; i++) {
        if (userKey === gameWord[i]) {
            correctWordArr[i] = gameWord[i];
        } 
    };   
    
    // if userKey NOT in gameWord array, AND not already in the wrongWordArr
    //    add the UPPERCASE letter to wrongLetterArr, decrement guessRemaining               
    var inWord = gameWord.includes(userKey);
    var wrongWord = wrongWordArr.join("");
    wrongWord = wrongWord.toLowerCase();
    var inWrong = wrongWord.includes(userKey);
    if (inWord === false && inWrong === false) {
        userKey = userKey.toUpperCase(); // change userKey to uppercase and add to wrongWordArr
        console.log(userKey);
        wrongWordArr.push(userKey); // 
        console.log(wrongWordArr);
        userKey = userKey.toLowerCase(); // change userKey back to lowercase
        console.log(userKey);
        
        // having problem with decrementing guessRemaining from guessRemain.textContent again because - setup only runs ONCE at load of HTML page so have to get it again
        // lose value each time gamePlay is run  - value is not held anywhere - HTML 
        guessRemain  = document.getElementById("guessRemain"); 
        guessRemain = parseInt(guessRemain.textContent);
        guessRemaining = guessRemain -1;
        console.log(guessRemaining);
        document.getElementById("guessRemain").innerHTML = guessRemaining;
        document.getElementById("wrongLetters").innerHTML = wrongWordArr.join("");
    };               
    
    // display correct letters and wrong letters to viewport (HTML page)  
    document.getElementById("correctLetters").innerHTML = correctWordArr.join("");
    
    
    
    // ???? do I need to store userKey in a variable previousKey to check if user pressed the same key again?
    // if key pressed is NOT a letter key - send error message  
} else {
    document.getElementById("message").innerHTML = "Sorry, you must press a letter key.";
}

// may include this in gamePlay - instead of separate functions - unless code gets too big and need to separate out for readability

// check status - WIN, LOSE or still playing?
if (guessRemaining >= 0 && correctWordArr.join("") === gameWord) {
    console.log("WIN!")
    totWins++; // add 1 to Win Total
    document.getElementById("totWins").innerHTML = totWins;
    document.getElementById("message").innerHTML = "<p>You WIN!</p>Press any letter key to start new game";
    console.log("WINNER!"); // if time permits display winning word, image, text, and play sound if click image
    winGame = true;
    // display winning word, image and text
    gameWin();
    // setTimeout(gameSetup, 30000); did not need it
    gameSetup();
    
} else  if (guessRemaining === 0 && correctWordArr.join("") !== gameWord) {
    console.log("LOSE!")
    document.getElementById("message").innerHTML = "<p>Sorry, you lose.</P>Try again, press any letter key to start";
    winGame = false;
    // reset game, but not Win total
    gameSetup();
}
else { // you are still playing the game
    console.log("still playing");
}   

console.log("gamePlay function complete for this letter pressed");

} // END gamePlay function


// BEGIN gameWin  function
function gameWin() { 
    
    // get the winning word and put on the HTML page
    document.getElementById("winWord").innerHTML = gameWord;
    
    // get index number of the winning word in the wordList array
    var iNumber = wordList.indexOf(gameWord);
    console.log(iNumber);
    
    // use that index number to get the additional data (image, text, sound) for the winning word
    
    document.getElementById("winImage").src = winImage[iNumber];
    
    console.log(winImage[iNumber]);   
    
    document.getElementById("winText").innerHTML = winText[iNumber];  
    
} // END gameWin function








// ================================ End function definitions  =========================================================================

// ================================ BEGIN GAME (GAME could be an object if you make it one) execution of all the game functions =======
// Once HTML page loads - perform these two steps! OMG it only ended up needing 2 steps! This part blows my mind and is not how I understood a program to function!

gameSetup();  // AFTER HTML page loads - this will run FIRST and ONLY ONCE, unless code invokes it somewhere else (when user wins/loses game to reset values/get new word)
// gameSetup does NOT reset the WINS total - only reset that counter if (in future version) user clicks RESTART button

// after function gameSetup() completes, the document.onkeyup statement runs ?? I don't think they run at the same time???
// this statement sets/registers? a handler so that IF an onkeyup event fires - it sends a ??pointer?reference?? to the gamePlay function
// if user does NOT press a key - NOTHING HAPPENS! - HOWEVER because the following line executes and a handler is set ...
// ANYTIME a user DOES press a key - a pointer or reference or something?? points back to the code in function gamePlay
// this line DOES NOT invoke the function gamePlay!!!! hard to wrap my mind around this one
// lots to understand in this simple line of code!! PLEASE let me know if I am wording or thinking about this incorrectly.
document.onkeyup = gamePlay; // registers/sets handler - doesn't run any code
// if there were any other lines of code after this, they would execute whether or not function gamePlay ever runs!!
// control passes to next line of code - the "program" is NOT "waiting" on anything - it will continue to next line of code


// END of program execution - HOWEVER document.onkeyup event is still registered handler and gamePlay will run if any key is pressed!





// -   display the wordList, winImage, winText by using masterArray - IF time allows
// -   masterArray[0] = wordList[], masterArray[1] = winImage[], etc. based on word, select correct index for subarray
// -   also need onclick event so when user clicks on image the sound is played - add onclick to img in HTML

// - don't forget to reset winWord, winImage, winText and winSound to dft for beg of game

