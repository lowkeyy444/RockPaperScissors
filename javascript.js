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
let gameEnded = false;

//individual rounds

function playRound(humanSelection, computerSelection) {
  if (humanSelection == computerSelection) {
    const eachResult = document.querySelector("#result");
    const resulText = document.createElement("h5");
    const scoreText = document.createElement("div");
    let draw = `You Chose: ${humanSelection} and AI chose: ${computerSelection} = It's a Draw`;
    let score = `Your Score: ${humanScore} | AI Score: ${ComputerScore}`;
    resulText.textContent = draw;
    scoreText.textContent = score;
    eachResult.appendChild(resulText);
    resulText.appendChild(scoreText);
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
    //for score
    const scoreText = document.createElement("div");
    let score = `Your Score: ${humanScore} | AI Score: ${ComputerScore}`;
    scoreText.textContent = score;
    resulText.appendChild(scoreText);
  } else {
    humanScore++;
    const eachReault = document.querySelector("#result");
    const resulText = document.createElement("h5");
    let YouWin = `You Chose:${humanSelection} and AI chose:${computerSelection} = You Won this round`;
    resulText.textContent = YouWin;
    eachReault.appendChild(resulText);
    //for score
    const scoreText = document.createElement("div");
    let score = `Your Score: ${humanScore} | AI Score: ${ComputerScore}`;
    scoreText.textContent = score;
    resulText.appendChild(scoreText);
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
    if (
      (humanScore === 5 || ComputerScore === 5) &&
      humanScore > ComputerScore
    ) {
      gameEnded = true;

      const finalResult = document.querySelector("#finalResult");
      const result = document.createElement("div");
      result.textContent = "----You Won----";
      finalResult.appendChild(result);
    } else if (
      (humanScore === 5 || ComputerScore === 5) &&
      humanScore < ComputerScore
    ) {
      gameEnded = true;

      const finalResult = document.querySelector("#finalResult");
      const result = document.createElement("div");
      result.textContent = "----AI Won----";
      finalResult.appendChild(result);
    }
    if(gameEnded==false){
    playRound(humanSelection, computerSelection);}else{
      return;
      
    }


  
  });
});
