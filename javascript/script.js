const holes = document.querySelectorAll('.holes');
let instructors= ["aaron.png", "jz.png", "jason.png", "john.png", "drake.png"];
let playerScore = 0;
function pickOne(holes){
    let x = Math.floor(Math.random() * holes.length);
    let random = holes[x];
    return random;
    let holey = holes;
    if (holey === holes){
        return pickOne(holes);
    }
    
}

function move(){
    let time = randomTime(100, 1000);
    let hole = pickOne(holes);
    
}

function clicking (event) {
    playerScore += 10;
    score.innerText= playerScore;

    }

addEventListener('click', clicking);

function randomFaces(pick){
    
      let randomize = Math.floor(Math.Random() * instructors.length);
      let pick= document.querySelectorAll(".faced");
      let choose = instructors[randomize];

      return choose;

}
