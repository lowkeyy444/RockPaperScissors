//  Computer choice

function getComputerChoice() {
  const randomNum = Math.random();
  const choiceAI = Math.floor(randomNum * 3);

  switch (choiceAI) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

//Human choice

function getHumanChoice() {
  let choiceHuman = prompt("Choose: Rock ,Paper ,Scissors");
  return choiceHuman.toLowerCase();
}

let humanScore = 0;
let ComputerScore = 0;

//individual rounds

function playRound(humanSelection, computerSelection) {
  if (humanSelection == computerSelection) {
    let draw = `You Chose:${humanSelection} and AI chose:${computerSelection} = It's a Draw`;
    return draw;
  }

  if (
    (humanSelection == "rock" && computerSelection == "paper") ||
    (humanSelection == "paper" && computerSelection == "scissors") ||
    (humanSelection == "scissors" && computerSelection == "rock")
  ) {
    ComputerScore++;
    let AiWin = `You Chose:${humanSelection} and AI chose:${computerSelection} = AI Won this round`;
    return AiWin;
  } else {
    humanScore++;
    let YouWin = `You Chose:${humanSelection} and AI chose:${computerSelection} = You Won this round`;
    return YouWin;
  }
}

// game start function

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(`Round ${i} ${result}`);
  }
  if (ComputerScore > humanScore) {
    console.log(`AI Won the game with a score of ${ComputerScore}`);
  } else if (ComputerScore < humanScore) {
    console.log(`You Won the game with a score of ${ComputerScore}`);
  } else {
    console.log("It's a draw, Rematch?");
  }
}

playGame();
