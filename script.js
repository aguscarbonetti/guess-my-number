'use strict';

let secretNumber = document.querySelector('.number').innerHTML = Math.trunc(Math.random()*20) +1;
let actualScore = document.querySelector('.score').textContent;

document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);

    if(!guessNumber){
        document.querySelector('.message').textContent = "No number!";
    } else if(actualScore > 1 && guessNumber === secretNumber){
        document.querySelector('.message').textContent = "You guess!"
    } else if(actualScore > 1 && guessNumber > secretNumber){
        document.querySelector('.message').textContent = "Too high!";
        actualScore--;
        document.querySelector('.score').textContent = actualScore;
    }else if(actualScore > 1 && guessNumber < secretNumber){
        document.querySelector('.message').textContent = "Too low!"
        actualScore--;
        document.querySelector('.score').textContent = actualScore;
    }else{
        document.querySelector('.message').textContent = "You lost the game!"
        actualScore = 0;
        document.querySelector('.score').textContent = actualScore;
    }
});
