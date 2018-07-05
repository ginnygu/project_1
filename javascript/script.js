const holes = document.querySelectorAll('.holes');
let instructors= ["aaron.png", "jz.png", "jason.png", "john.png", "drake.png"];
let playerScore = 0;
let currentHole;
function pickOne(){
    let x = Math.floor(Math.random() * holes.length);
    let random = holes[x];
    debugger;
    return (random === currentHole) ? pickOne() : random;

    
}


function move(){
    let time = randomTime(100, 1000);
    currentHole = pickOne();
    
}

function clicking (event) {
    playerScore += 10;
    score.innerText= playerScore;

    }

addEventListener('click', clicking);

function randomFaces(instructors){
    
      let randomize = Math.floor(Math.random() * instructors.length);
      let choose = instructors[randomize];

      return choose;

}
