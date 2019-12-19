



//letter array that holds the whole alphabet
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var letter = ""


//when key is pressed it matches the pressed key to the letter that was randomly chosen.
document.onkeyup = function(event){
    letter = (letters[Math.floor(Math.random()*letters.length)]);
    console.log(letter);
    var guess = event.key.toLowerCase();
    if (guess === letter){
        wins= wins + 1;
        console.log("wins: " + wins);
        document.getElementById("wins").innerHTML = wins;
    }
    else { losses= losses + 1;
        console.log("losses: " + losses);
        document.getElementById("loss").innerHTML = losses;
    }
};

//if letter matches then it adds a point to wins. And adds a point to number of guesses.

//
