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
function playGame(){
    
    let time = randomTime(500, 2000);
    currentHole = chooseRandomHole();
    currentFace = chooseRandomFace();

    currentHole.appendChild(currentFace);
    setTimeout(() => {
        currentHole.removeChild(currentFace);
        playGame();

    }, time);
}

document.querySelector(".startButton").addEventListener('click', (event) => {
    event.preventDefault();
    playGame();
});
