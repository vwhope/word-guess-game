# word-guess-game

### theme: Farmer's Market
Deployed Link: [word-guess-game](https://vwhope.github.io/word-guess-game/)

**Problems to solve**
* manipulate the DOM without refreshing the HTML page
* retrieve the name of the key the user presses for validation and game play
* keep track of letters guessed and if they were correct or not
* display "-" for each letter of the new word to guess
* randomly select word to guess
* track guesses and wins

**Solution**

Using the window.document object properties to retrieve and update values on the HTML page directly prevents the need to refresh the page, except to start a new game. Use of event.keycode when a keyboard event fires captures the key pressed. For this game, only letters are valid keyboard entries so if value is between 65 and 90 inclusive, the key is valid. The event normalizes the value so can also retrieve the letter name, such as "a" or "A". Arrays are used to store letters guessed as well as words available to guess and also to determine the length of the word to guess. The math.random function is used to randomly select a word to guess from an array of possible words. Simple math was used to total guesses and wins.    

**Technical Skills demonstrated in project:**
* application of JavaScript language
* application of CSS and reset files
* responsive web design
* use of custom fonts
* basic understanding of SCOPE (global vs local)
* register and respond to event listeners
* manipulation of the HTML page (get user input, evaluate input, update HTML page)
* use a random generator function
* use of website as an educational vehicle for basic nutrition education
    
**Goal of game:**
* guess all letters in the hidden word before running out of guesses
* player has 1 more guess than there are letters in the word
    * for example, if word is 6 characters long, player gets 7 guesses
* words are randomly selected from an array of words that are related to a Farmer's Market

**To play game:**
* open the index.html file in the browser
* press any letter key to guess a letter
* if player guesses all letters in the word before running out of guesses, player wins
* after a win or loss, a new word will be presented and game will continue until player stops pressing keys

**Resource Contributors:**
* Custom font "Satisfy" from [Google fonts](https://fonts.google.com/)
* Images used were from: [unsplash](https://unsplash.com/)

* The following photographers contributed photos:

Photographer Name | Photo used  
----------------- | ----------
Jeremy Ricketts | blueberries 
Caroline Attwood | lemons
Alison Stevens | strawberries - main background 
Nicole Wilcox | wood texture - background - header
Christian Walker | Public Market sign
ja ma | color market (alt photo for public market sign)
Thomas Quaritsch | cherries

**Future Enhancement Ideas:**    
* Add audio files that contribute additional information about the word
* Play the audio file upon guessing the word
* Save the entire game and properties in an object

