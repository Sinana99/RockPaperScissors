function getComputerChoice() {
    let choice =  Math.round(Math.random()*2)
    if (choice === 0) {
     choice = "Rock"
    } else if (choice === 1) {
     choice = "Paper"
    } else {
     choice = "Scissors"
    }
    
    return choice
 }
 
 
 function playRound(playerSelection, computerSelection) {
     console.log(playerSelection)
     playerSelection = playerSelection.toLowerCase();
     computerSelection = computerSelection.toLowerCase();
     console.log(computerSelection)
     if (playerSelection === "rock" && computerSelection === "paper") {
         return "You Lose"
     } else if (playerSelection === "paper" && computerSelection === "scissors") {
         return "You Lose"
     } else if (playerSelection === "scissors" && computerSelection === "rock") {
         return "You Lose"
     } else if (playerSelection === computerSelection) {
         return "Its a Tie"
     } else {
         return "You Win!"
     }
     
  }
 
 var computerSelection = getComputerChoice();
 var playerSelection = ""
 
 function game(playerSelection, computerSelection) {
     alert("Let's play game of Rock Paper Scissors for 5 rounds! Good luck!")
     var yourScore = 0;
     var pcScore = 0;
     var result = "";
     
     for (i = 0; i < 5; i++) {
     playerSelection = prompt("Whats your pick?");
     computerSelection = getComputerChoice();
     result = playRound(playerSelection, computerSelection)
     if (result === "You Win!") {
         yourScore += 1
     } else if (result === "You Lose") {
         pcScore += 1
     } 
 
     }
     if (yourScore > pcScore) {
     alert('You won! ' + yourScore + ' - ' +pcScore)
     } else if (pcScore > yourScore) {
         alert('You lost! ' + yourScore + ' - ' +pcScore)
     } else {
         alert('Its a tie! ' + yourScore + ' - ' + pcScore)
     }
 };
 game(playerSelection, computerSelection)