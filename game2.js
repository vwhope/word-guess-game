
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
         //do something;
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
