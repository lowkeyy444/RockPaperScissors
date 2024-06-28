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

//Human Choice
function getHumanChoice(selection) {
  return selection;
}

let humanScore = 0;
let ComputerScore = 0;

//individual rounds

function playRound(humanSelection, computerSelection) {
  if (humanSelection == computerSelection) {
    const eachReault = document.querySelector("#result");
    const resulText = document.createElement("h5");
    let draw = `You Chose:${humanSelection} and AI chose:${computerSelection} = It's a Draw`;
    resulText.textContent = draw;
    eachReault.appendChild(resulText);
  } else if (
    (humanSelection == "rock" && computerSelection == "paper") ||
    (humanSelection == "paper" && computerSelection == "scissors") ||
    (humanSelection == "scissors" && computerSelection == "rock")
  ) {
    ComputerScore++;
    const eachReault = document.querySelector("#result");
    const resulText = document.createElement("h5");
    let AiWin = `You Chose:${humanSelection} and AI chose:${computerSelection} = AI Won this round`;
    resulText.textContent = AiWin;
    eachReault.appendChild(resulText);
  } else {
    humanScore++;
    const eachReault = document.querySelector("#result");
    const resulText = document.createElement("h5");
    let YouWin = `You Chose:${humanSelection} and AI chose:${computerSelection} = You Won this round`;
    resulText.textContent = YouWin;
    eachReault.appendChild(resulText);
  }
}

// game start function

// function playGame() {
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();

//   if (ComputerScore > humanScore) {
//     console.log(`AI Won the game with a score of ${ComputerScore}`);
//   } else if (ComputerScore < humanScore) {
//     console.log(`You Won the game with a score of ${ComputerScore}`);
//   } else {
//     console.log("It's a draw, Rematch?");
//   }
// }

// playGame();

//event listner for each button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = getHumanChoice(button.id);
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);

    playRound(humanSelection, computerSelection);
  });
});
