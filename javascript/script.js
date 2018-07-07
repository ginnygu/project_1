const holes = document.querySelectorAll('.holes .faceholder');
let instructors = document.querySelectorAll('#faces>img');
let playerScore = 0;
let currentHole = chooseRandom(holes);
let currentFace = chooseRandom(instructors);
let endFace = document.querySelector('#drake');
// @author Jason Seminara <js@ga.co>
function chooseRandom(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}
// using the chooseRandom function to randomly choose a hole
function chooseRandomHole(collection) {
    let newChoice;
    do {
        newChoice = chooseRandom(holes);
    } while (newChoice === currentHole);
    return newChoice;   
}

//using the chooseRandom function to randomly choose a face

function chooseRandomFace(collection){
    let newFace;
    do {
        newFace = chooseRandom(instructors);
    } while (newFace === currentFace);
    return newFace;
}

//adding sound to game
let mySound = new Audio('sound/ouch.mp3');
// collecting point function
document.querySelector('#gameholes').addEventListener('click', (event)=> {
  const goodHitFace = event.path.includes(currentFace);
  const goodHitHole = event.path.includes(currentHole);  
  if(goodHitFace && goodHitHole) {
      playerScore += parseInt(event.target.dataset.increment);
      document.querySelector('.numberScore').innerText = playerScore;
      mySound.play();
      end();
      
  }
});

// makes a random time for when the random head pops out of the random hole
function randomTime(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
//starting game function
let timed;

// combining the random head and random holes together
function playGame(){
    let time = randomTime(500, 2000);
    currentHole = chooseRandomHole();
    currentFace = chooseRandomFace();
    currentHole.appendChild(currentFace);
    timed = setTimeout(() => {
        currentHole.removeChild(currentFace);
        playGame();
    }, time); 

}

// start button event listener.
document.querySelector(".startButton").addEventListener('click', (event) => {
    event.preventDefault();
    playGame();
    startTimer();
});

//timer functions

document.querySelector('.timer').innerHTML =
  00 + ":" + 15;


function startTimer() {
  var presentTime = document.querySelector('.timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
      clearTimeout(timed);
      gameOver();
    return;
  }
  
  document.querySelector('.timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
 
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


//modal boxes

const modalOne = document.querySelector('.start_modal');
const closeBox = document.querySelector('.game_button');
const instruBox = document.querySelector('.info_box');
const info = document.querySelector('.instru_button');
const closeBox2 = document.querySelector('.game_button2');

//loads the first modal box when the page loads
window.addEventListener('load', (event) => {
    modalOne.classList.add('show_box');
});

// to close all modal boxes
function closeButton(){
      modalOne.classList.remove('show_box');
      instruBox.classList.remove('show_box');
}


//info modal box
function infoBox(){
    modalOne.classList.remove('show_box');
    instruBox.classList.add('show_box');
}

closeBox.addEventListener('click', closeButton);
closeBox2.addEventListener('click', closeButton);
info.addEventListener('click', infoBox);

//Game Over modal box
let finalScore = document.querySelector('.numberScore').innerText;
const gameBox = document.querySelector('.gameOver');

function gameOver(){
    gameBox.classList.add('show_box');
    document.querySelector('.final').innerText = playerScore;
}




