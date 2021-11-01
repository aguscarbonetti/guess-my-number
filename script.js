'use strict';

let secretNumber = document.querySelector('.number').value = Math.trunc(Math.random()*20) +1;
let actualScore = document.querySelector('.score').textContent;
let highscore = 0;
const messageShown = function(message){
    document.querySelector('.message').textContent = message;
};

//CHECK BUTTON LOGIC
document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);

    //no value provided
    if(!guessNumber){
        messageShown('No number!');
    
    //number guessed
    } else if(actualScore > 1 && guessNumber === secretNumber){
        messageShown('You guess!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(actualScore > highscore){
            highscore = actualScore;
            document.querySelector('.highscore').innerHTML = actualScore;
        }
    //not correct
    } else if(actualScore > 1 && guessNumber !== secretNumber){
        actualScore--;
        document.querySelector('.score').textContent = actualScore;
        messageShown(guessNumber < secretNumber ? 'Too low!' : 'Too high');

    //score equals zero
    }else{
        messageShown('You lost the game!');
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
    messageShown('Start guessing...');
    actualScore = 20;
    document.querySelector('.score').textContent = actualScore;
    document.querySelector('.guess').value = ' ';
    secretNumber = document.querySelector('.number').value = Math.trunc(Math.random()*20) +1;
});