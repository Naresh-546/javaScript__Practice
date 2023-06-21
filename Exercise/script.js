const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');

const possibleChoice = document.querySelectorAll('button');

let userSelected;
let computerSelected;
let finalResult

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userSelected = e.target.id
    userChoice.innerHTML = userSelected;

generateComputerChoice()
getResult()

}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or can use possibleChoice.length
    if(randomNumber === 1){
        computerSelected = "rock"
    }
    if(randomNumber === 2) {
        computerSelected = "paper"
    }
    if(randomNumber === 3) {
        computerSelected = "scissors"
    }
    computerChoice.innerHTML = computerSelected;
}

function getResult (){
    if ( computerSelected === userSelected ){
        finalResult = "it's a draw!"
    }
    if ( computerSelected === 'rock' && userSelected ==='paper' ){
        finalResult = "you lost!"
    }
    if ( computerSelected === 'paper' && userSelected ==='rock' ){
        finalResult = "you won!"
    }
    if ( computerSelected === 'paper' && userSelected ==='scissors' ){
        finalResult = "you won!"
    }
    if ( computerSelected === 'scissors' && userSelected ==='paper' ){
        finalResult = "you lost!"
    }
    if ( computerSelected === 'scissors' && userSelected ==='rock' ){
        finalResult = "you lost!"
    }
    if ( computerSelected === 'rock' && userSelected ==='scissors' ){
        finalResult = "you won!"
    }
    result.innerHTML = finalResult;
}