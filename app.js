const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id; 
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

const generateComputerChoice=()=>{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1;
    console.log(randomNumber);

    if(randomNumber===1){
        computerChoice = 'Rock';
    }
    else if(randomNumber===2){
        computerChoice = 'Paper';
    }
    else if(randomNumber===3){
        computerChoice = 'Scissors';
    };

    computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
    if(computerChoice===userChoice){
        result = 'Draw!!!';
    }
    else if(computerChoice==='Rock' && userChoice==='Paper'){
        result = 'You WIN!!!';
    }
    else if(computerChoice==='Rock' && userChoice==='Scissors'){
        result = 'You LOST!!!';
    }
    else if(computerChoice==='Paper' && userChoice==='Rock'){
        result = 'You LOST!!!';
    }
    else if(computerChoice==='Paper' && userChoice==='Scissors'){
        result = 'You WIN!!!';
    }
    else if(computerChoice==='Scissors' && userChoice==='Rock'){
        result = 'You WIN!!!';
    }
    else if(computerChoice==='Scissors' && userChoice==='Paper'){
        result = 'You LOST!!!';
    };

    resultDisplay.innerHTML = result;
}


