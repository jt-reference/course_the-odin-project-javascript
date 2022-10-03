// Write a function that plays a single round of Rock Paper Scissors.

// Declare initial scores and round number
// let computerScore = 0
// let playerScore = 0
// let roundNumber = 1

// Generate Random Computer Entry
function getComputerChoice() {
  // create array with rock, paper, and scissors
  const rockPaperScissors = ['rock', 'paper', 'scissors']
  // generate random computer choice from array - return Rock Paper or Scissors
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
}

// Game Function
function playRound(playerSelection) {
  // Make playerSelection parameter case -insensitive
  playerSelection.toLowerCase()
  // take the computer random choice function and store as variable
  const computerSelection = getComputerChoice()

  // compare computerSelection and playerSelection - return a string that declares the winner of the round
  if (computerSelection == playerSelection) {
    // if it is a draw
    return "It's a tie!"
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    return 'You Lose! Paper beats Rock'
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    return 'You Lose! Scissors beats Paper'
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    return 'You Lose! Rock beas Scissors'
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
    return 'You Win! Paper beats Rock'
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    return 'You win! Scissors beats Paper'
  } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    return 'You win! Rock beats Scissors'
  } else {
    return "Choose 'Rock,' 'Paper,' or 'Scissors' To Play."
  }
  // end if statement
}

const playerSelection = 'rock'
console.log(playRound(playerSelection, computerSelection))
