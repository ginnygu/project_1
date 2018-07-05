const holes = document.querySelectorAll('.holes .faceholder');
let instructors = document.querySelectorAll('#faces>img');
let playerScore = 0;
let currentHole = chooseRandom(holes);
let currentFace = chooseRandom(instructors);
debugger;
// @author Jason Seminara <js@ga.co>
function chooseRandom(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function chooseRandomWithoutCollision(collection) {
    let newChoice;
    do {
        newChoice = chooseRandom(holes);
    } while (newChoice === currentHole);
    return newChoice;
}




function move(){
    let time = randomTime(100, 1000);
    // current one
    currentHole = chooseRandomWithoutCollision(holes);
}

function clicking (event) {
    playerScore += 10;
    score.innerText= playerScore;

    }

document.querySelector('#gameholes').addEventListener('click', (event)=> {
  const goodHitFace = event.path.includes(currentFace);
  const goodHitHole = event.path.includes(currentHole);     
    console.log(goodHitHole, goodHitFace);
  debugger
  if(goodHitFace && goodHitHole) {
      // score points;
  } else {
      // no point
  }

})

