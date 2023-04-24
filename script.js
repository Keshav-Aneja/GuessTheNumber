'use strict';

let num = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(num);
document.querySelector('.check').addEventListener('click', function () {
  let x = Number(document.querySelector('.ipt').value);
  if (!x) {
    document.querySelector('#message').textContent =
      '🤬 Please Enter a Correct Number';
  } else {
    document.querySelector('#message').textContent = `⚡ Your Number Is ${x}`;
  }
  if (x === num) {
    document.querySelector('#message').textContent = `⭐ Correct Answer!`;
    document.querySelector('.number').textContent = `${num}`;
    document.querySelector('body').style.backgroundImage = 'url("bg4.jpg")';
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector('.high_score').textContent = highScore;
  } else if (x < num) {
    document.querySelector('#message').textContent = '📈 too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('#message').textContent = `😕 You Lost!`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('#message').textContent = '📉 too High!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('#message').textContent = `😕 You Lost!`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.floor(Math.random() * 20) + 1;
  console.log(num);
  document.querySelector('body').style.backgroundImage = 'url("bg2.jpg")';
  document.querySelector('.score').textContent = score;
  document.querySelector('.ipt').value = ' ';
});
