//Create rock paper scissors game
//Step 1
//create variable of the choices using arrays

const choices = ["rock", "paper", "scissors"];

//Get computer choice
    //create function
        //use Math.random -> returns a random number between 0 and 1
        //use Math.floor -> rounds down and returns largest integer less than or equal to a given number
        //use .lenght -> returns length of a string or in this case with arrays, the number of elements in an array
    
function getComputerChoice() {
    const options = choices[Math.floor(Math.random() * choices.length)];
    return options;
}
    //test function using console.log

console.log(getComputerChoice());

//Step 2
//get human choice
    //create function
        //use prompt -> displays box that prompts user for input
        //use .toLowerCase() -> lower cases the whole string
        //use .includes() -> returns true if an array contains a specified value

function getHumanChoice() {
    let humanInput = false;
    while(humanInput == false){
        const select = prompt("Enter Rock, Paper or Scissors");
        if(select == null){
            continue;
        }
        const humanInputLower = select.toLowerCase();
        if(choices.includes(humanInputLower)){
            humanInput = true;
            return humanInputLower;
        }
    }

}
    //test function with console.log

console.log(getHumanChoice())

//Step 3
//Keep track of score for human and computer
    //create variables with values of 0

let humanScore = 0;
let computerScore = 0;

