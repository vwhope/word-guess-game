
      // VARIABLES - create your game object, add all variables, functions related to it here
      // ====================================================================================
      var game = {
        newGame: true,
        nextGame: false,
        

        getUserKey: function() {
         //verify it is a letter;
         //if not a letter call error function (is error function internal or external to game object?)
         //change toLowerCase();
        },

        getWord: function() {
         //select a random word from array wordList
         gameWord = wordList[Math.floor(Math.random() * wordList.length)];
        },

        compareLetters: function() {
         // for both match or no match;
        },

        endGame: function() {
          // check to see if win or lose;
        }
      };

            
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

      // FUNCTIONS - log any external functions (not part of Game object)
      // =============================================================================

      // maybe error checking function goes here?

      // MAIN PROCESS
      // ==============================================================================

      // Get keyboard input. 
      document.onkeyup = function(event) {
        
        // verify user key pressed is a letter 
        errorCheck();

        // convert user key pressed to lowercase, save to a variable
        var letter = event.key.toLowerCase();

        // get first word
        getNewWord();
          

        // compare user key pressed to each letter of the new word
        
        compareLetters();
        

        // check guesses remaining
        guessRemain();
        

        // check for win or lose
        gameStatus();

        // depending on status, get new word or end game
        if(gamestatus()) {
            getNewWord();
        }
        else {
            endGame();
        }
        
      };
//=======================stuff you probably don't need 
// keep in case I need - but I should be able to get these programmatically!
// var char1 = ["l", "e", "m", "o", "n", "s"];
// var char2 = ["b", "l", "u", "e", "b", "e", "r", "r", "i", "e", "s"];
// var char3 = ["c", "h", "e", "r", "r", "i", "e", "s"];
// var word1 = ["lemons"]

// or could create an object for each word in the list, but I will have to know what words are in the game instead of using a random generator
// access like this: lemon[name] - holds the string "lemon" 
// can also access with dot notation if property has no spaces:  lemon.name
// which way? quotes or no quotes around property name - saw it both ways in class examples????

var screenLetters = document.getElementById("correctLetters");
    screenLetters.textContent = " ";
    console.log(screenLetters);
    
    for (var i = 0; i < gameWord.length; i++) {
       screenLetters.textContent = "_" + screenLetters.textContent;
    }
    
    // set "Letters Already Guessed" to blank
    var badLetters = document.getElementById("wrongLetters");
    badLetters.textContent = " ";
