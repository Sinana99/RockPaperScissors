var pcScore = 0
var playerScore = 0


if (pcScore >= 5) {
    console.log("end!!!!")
    
  }
    


function getComputerChoice() {
    let choice =  Math.round(Math.random()*2)
    if (choice === 0) {
     choice = "rock"
    } else if (choice === 1) {
     choice = "paper"
    } else {
     choice = "scissors"
    }
    
    return choice
 }

 const buttons = document.querySelectorAll("button");


 buttons.forEach((button) => {

    button.addEventListener("click", () => {
        playRound(button.id)
        ending()
    })
 })

 function ending() {
    if (playerScore === 5 || pcScore === 5) {
        console.log("END")
        const score = document.querySelector(".score")
        score.remove()
        buttons.forEach((button) => {
        button.remove()
        })
        const result = document.createElement("div");
        if (playerScore === 5) {
            result.textContent = "You won!"
            result.classList.add("win");
        } else {
            result.textContent = "You lost:("
            result.classList.add("lose");
            console.log(pcScore, "pc score")
            

        }
        document.body.appendChild(result);

 }}

 
const container = document.querySelector(".score")
const round = document.createElement("h5")


const score = document.createElement("div")
score.classList.add("score")



const content = document.createElement("div")
content.classList.add("content");
round.classList.add("round");
container.appendChild(round);
container.appendChild(score)
content.textContent = `${playerScore} - ${pcScore}` 

container.appendChild(content)

 
 function playRound(playerSelection) {
    content.textContent = `${pcScore} - ${playerScore}` 
     computerSelection = getComputerChoice();
     console.log(computerSelection, "this is pc")
     
     if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
        
      { pcScore += 1;
        round.textContent = `You lost! Computer picked ${computerSelection}`;

     } else if (playerSelection === computerSelection) {
        
        round.textContent = `Draw! Computer picked ${computerSelection}` ;
         
     } else {
        playerScore += 1;
        round.textContent = `You won! Computer picked ${computerSelection}`
     }
     content.textContent = `${playerScore} - ${pcScore}`
     
  }

  

