

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



let playerScore=0;

let rock= document.getElementById("rock");
let paper= document.getElementById("paper");
let scissors= document.getElementById("scissors");

let displayPlayerScore= document.getElementById("playerScore");
let gameStatus= document.getElementById("status");

let displayPlayerSelection= document.getElementById("playerSelection");
let displayComputerSelection= document.getElementById("computerSelection");

let displayPlayerSelectionTxt= document.getElementById("playerSelectionTxt");
let displayComputerSelectionTxt= document.getElementById("computerSelectionTxt");

let playAgain = document.getElementById("playagain");
let reset = document.getElementById("reset");

let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");


page2.style.display = "none";
page1.style.display = "block";


//function to calculate marks and get the game status 
play = (playerSelection,computerSelection) => 
{
    if(playerSelection === computerSelection)
    {
        gameStatus.textContent="It's a draw !!!";
    }
    else if (playerSelection === 'scissors') 
    {
        if(computerSelection === 'paper') 
        {
            playerScore ++;
            gameStatus.textContent=`YOU WIN, ${playerSelection} beats ${computerSelection} !!`;
        }
        else
        {
            gameStatus.textContent=`YOU LOSE, ${computerSelection} beats ${playerSelection} !!`;
        }
    }
    else if (playerSelection === 'rock')
    {
        if(computerSelection === 'scissors')
        {
            playerScore ++;
            gameStatus.textContent=`YOU WIN, ${playerSelection} beats ${computerSelection} !!`;
        }
        else
        {
            gameStatus.textContent=`YOU LOSE, ${computerSelection} beats ${playerSelection} !!`;
        }
    }
    else if (playerSelection === 'paper')
    {
        if(computerSelection === 'rock')
        {
            playerScore ++;
            gameStatus.textContent=`YOU WIN, ${playerSelection} beats ${computerSelection} !!`;
        }
        else
        {
            gameStatus.textContent=`YOU LOSE, ${computerSelection} beats ${playerSelection} !!`;
        }
    }
}



random = () => 
{
    return (Math.floor(Math.random() *(3)));
}

let value=["rock","paper","scissors"];

//computerPlay() returns random value from array value[] using random function

computerPlay = () =>
{
    return value[random()];
}  




rock.addEventListener("click",function(){
    page1.style.display = "none";
    page2.style.display = "block";

    let playerSelection= "rock";
    displayPlayerSelection.src="icon-" + playerSelection + ".svg";
    displayPlayerSelectionTxt.textContent= playerSelection;

    let computerSelection= computerPlay();
    displayComputerSelection.src="icon-" + computerSelection + ".svg";
    displayComputerSelectionTxt.textContent= computerSelection;
    
    play(playerSelection,computerSelection);

    displayPlayerScore.textContent= playerScore;
    
});


paper.addEventListener("click",function(){
    page1.style.display = "none";
    page2.style.display = "block";

    let playerSelection= "paper";
    displayPlayerSelection.src="icon-" + playerSelection + ".svg";
    displayPlayerSelectionTxt.textContent= playerSelection;
    
    let computerSelection= computerPlay();
    displayComputerSelection.src="icon-" + computerSelection + ".svg";
    displayComputerSelectionTxt.textContent= computerSelection;

    play(playerSelection,computerSelection);

    displayPlayerScore.textContent= playerScore;
    
});

scissors.addEventListener("click",function(){
    page1.style.display = "none";
    page2.style.display = "block";

    let playerSelection= "scissors";
    displayPlayerSelection.src="icon-" + playerSelection + ".svg";
    displayPlayerSelectionTxt.textContent= playerSelection;

    let computerSelection= computerPlay();
    displayComputerSelection.src="icon-" + computerSelection + ".svg";
    displayComputerSelectionTxt.textContent= computerSelection;

    play(playerSelection,computerSelection);

    displayPlayerScore.textContent= playerScore;
    
});


playAgain.addEventListener("click",function(){
    page2.style.display = "none";
    page1.style.display = "block";
});


reset.addEventListener("click",function(){
    page2.style.display = "none";
    page1.style.display = "block";

    playerScore=0;
    playerScore.textContent= playerScore;
    
    displayPlayerScore.textContent= 0;
    gameStatus.textContent= "Choose an option !";
});


