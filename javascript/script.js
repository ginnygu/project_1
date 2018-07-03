const holes = document.querySelectorAll('.holes')
let instructors= ["aaron.png", "jz.png", "jason.png", "john.png", "drake.png"]

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

return instructors[0];
