
var computerChoice = ["R", "P", "S"];

var rockPaperScissors = function() {
    console.log("Hello!");
    var userChoice = prompt("What's your choice? Pick R, P, or S");
    console.log(userChoice);
    var option = Math.floor(Math.random() * computerChoice.length);
    var computerChoice = computerChoice[index];
    console.log(option)
    console.log(computerChoice)
    


    if(userChoice===computerChoice) {
        ties++;
       window.alert("Oh, no, a tie!")
    }

    else if(
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice ==="P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
    ) {
    wins++;
    window.alert("Winner, winner!"); 
    } else {
        losses++;
        window.alert("It's a Loss!");
    }

var playAgain = window.confirm("Wanna play again?")
console.log(playAgain)
if(playAgain) {
    rockPaperScissors();
}

window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + "\nTies: " + ties
);

}

rockPaperScissors()
