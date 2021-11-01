'use strict';

let secretNumber = document.querySelector('.number').value = Math.trunc(Math.random()*20) +1;
let actualScore = document.querySelector('.score').textContent;
let highscore = 0;

//CHECK BUTTON LOGIC
document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);

    //no value provided
    if(!guessNumber){
        document.querySelector('.message').textContent = 'No number!';
    
    //number guessed
    } else if(actualScore > 1 && guessNumber === secretNumber){
        document.querySelector('.message').textContent = 'You guess!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(actualScore > highscore){
            highscore = actualScore;
            document.querySelector('.highscore').innerHTML = actualScore;
        }
    //not correct - too high
    } else if(actualScore > 1 && guessNumber > secretNumber){
        document.querySelector('.message').textContent = 'Too high!';
        actualScore--;
        document.querySelector('.score').textContent = actualScore;

    //not correct - too low
    }else if(actualScore > 1 && guessNumber < secretNumber){
        document.querySelector('.message').textContent = 'Too low!';
        actualScore--;
        document.querySelector('.score').textContent = actualScore;
    
    //score equals zero
    }else{
        document.querySelector('.message').textContent = 'You lost the game!';
        actualScore = 0;
        document.querySelector('.score').textContent = actualScore;
        document.querySelector('body').style.backgroundColor = '#c91c44';
    }
});

//AGAIN BUTTON LOGIC

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    actualScore = 20;
    document.querySelector('.score').textContent = actualScore;
    document.querySelector('.guess').value = ' ';
    secretNumber = document.querySelector('.number').value = Math.trunc(Math.random()*20) +1;
});