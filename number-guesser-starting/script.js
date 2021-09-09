let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random(9))
}
function compareGuesses(human, comp, secret_no){
    if (Math.abs(human - secret_no)<+ Math.abs(comp-secret_no)){
        return true
    }
    else{
        return false
    }
}
human_score = 0
computer_score = 0
currentRoundNumber = 0
const updateScore = score => {
    if(score == 'human'){
        human_score+=1
    }
    else{
        computer_score+=1
    }
}

const advanceRound = currentRoundNumber =>{
    currentRoundNumber+=1
}