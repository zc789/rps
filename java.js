//Create function named getComputerChoice
/*
Write code so function will randomly return one of the following string values
"rock", "paper", "scissors".
*/
//Create constant with the options of rock, paper, scissors

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]; //create const choice so that computer can make a choice while using the options const. use Math.random() to return randome number between 0 and 1 but bc we have 3 elements. multiply it by options.length. then use Math.floor() since we might get 1.5 but we don't have that so we need to round it down 
    console.log(choice);
    return choice; //return is like console.log that shows what's result
}



//Create function that returns human player choice using loop to get player input if doenst, it will keep asking

function getHumanChoice() {
    let humanInput = false;
    
    while(humanInput == false){         //start of loop, so while humanInput is still false it will keep looping
        const choice = prompt("Choose Rock, Paper, or Scissors"); //use prompt to get user input
        if(choice == null){         //to check if the prompt is empty
            continue;           //if it's empty it will continue(loops again)
        }
        const choiceLowerCase = choice.toLowerCase();           //have everything the same but forcing lowercase(using toLowerCase()) to whatever the user inputs
        if(options.includes(choiceLowerCase)){          //use .includes() to validate that the users input is within the choices available
            humanInput = true;      //if it exist it will be true
            return choiceLowerCase;     //returns choice in lowercase
        }
    }
}

//create variable that tracks scores

var humanScore = 0
var computerScore = 0

//write function that checks who's the winner

function checkWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){ 
        return "tie"; //return "tie" if humanChoice and computerChoice is the same
    } 
    else if ( 
        (humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "scissors" && computerChoice == "rock") || 
        (humanChoice == "paper" && computerChoice == "scissors")
    ){
        computerScore++; //adds point
        return "computer"; //return "computer" if the scenario above happens
    } 
    else {
        humanScore++;
        return "human"; //if none of the above it will return "human" (don't do the same as above
    }
    console.log(humanScore, computerScore);
}

//Write logic to play single round

function playRound(humanChoice, computerChoice) {
    const result = checkWinner(humanChoice, computerChoice);  //create const with previous function and use that to determine what words will show
    if(result == "tie"){
        console.log("It's a tie!");
    } 
    else if (result == "computer"){
        console.log(`You lose, ${computerChoice} beats ${humanChoice} :(`); //use backticks when doing this way
    } 
    else{
        console.log(`You win, ${humanChoice} beats ${computerChoice} :)`);
    }
  }

  
//Write logic to play game with 5 rounds

function playGame(humanChoice, computerChoice){
    for (i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();       //attach human input to const so both checkWinner and playRound function work
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log("-------")
    if(humanScore > computerScore){
        console.log("Player Wins!");
    }
    else if(computerScore > humanScore){
        console.log("Computer Wins...");
    }
    else{
        console.log("Somehow it's a tie?")
    }
    
}

playGame()
