'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number !';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 100;
let hightScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    //when there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ NO number !';
      //when player wins
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉Correct Number !';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > hightScore) {
        hightScore = score;
        document.querySelector('.highscore').textContent = hightScore;
      }
      //whe, guess is high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
      //when guess is low
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = ' Game Over!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#f54316';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '';
});
