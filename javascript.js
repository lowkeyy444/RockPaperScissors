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
}

let humanScore = 0;
let ComputerScore = 0;
let humanScoreInses = humanScore.toLowerCase();
