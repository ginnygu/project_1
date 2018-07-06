const holes = document.querySelectorAll('.holes .faceholder');
let instructors = document.querySelectorAll('#faces>img');
let playerScore = 0;
let currentHole = chooseRandom(holes);
let currentFace = chooseRandom(instructors);
// @author Jason Seminara <js@ga.co>
function chooseRandom(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function chooseRandomHole(collection) {
    let newChoice;
    do {
        newChoice = chooseRandom(holes);
    } while (newChoice === currentHole);
    return newChoice;   
}

//random faces

function chooseRandomFace(collection){
    let newFace;
    do {
        newFace = chooseRandom(instructors);
    } while (newFace === currentFace);
    return newFace;
}
// collecting point function
document.querySelector('#gameholes').addEventListener('click', (event)=> {
  const goodHitFace = event.path.includes(currentFace);
  const goodHitHole = event.path.includes(currentHole);     
    console.log(goodHitHole, goodHitFace);
  if(goodHitFace && goodHitHole) {
      playerScore += 10;
      document.querySelector('.numberScore').innerText = playerScore;
  }

});

function randomTime(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
//starting game function
let timed;
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
// start button
document.querySelector(".startButton").addEventListener('click', (event) => {
    event.preventDefault();
    playGame();
    startTimer();
});

//timer

document.querySelector('.timer').innerHTML =
  00 + ":" + 10;


function startTimer() {
  var presentTime = document.querySelector('.timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
      clearTimeout(timed);
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