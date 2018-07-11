# Whack - the - Instructor

## What is Whack - the - Instructor?
A simple game that brings back the inner child. While learning a new language, there's time of frustration and a need to let off some steam. Take this time to get some points while hitting the instructors' with a hammer. Based on the instructor, they each have different points.


## Screenshot-
![alt text](https://github.com/ginnygu/project_1/blob/master/images/wireframe_project4.png "game play2")


## Technical Discussion

### HTML
The game is built with many divs, manipulated with JavaScript and CSS.

### CSS
There's usage of CSS to help with setting the gameboard and hiding some HTML properties.

### JavaScript
Use of JavaScript for the display, interaction and logic of the game.

## Notes on Game Structure

I really like the idea of a retro feel games and through some research, I saw the possibilities that whack-a-mole gave. I took this oportunity to create a game with humorous properties. I decided to add faces of the instructors to replace the moles. Math.floor and Math.random helps with the randomization to every hole and instructor's motion. Unlike the traditional game, this game will collect different amount of points based on the instructor you hit using dataset. When the game ends through the timer, there's a win window that gives the player their score and an oportunity to play again.


## The Making of Whack - the - Instructor

### Author

Ginny Gu Tang

- Game board-
Using more retro pictures and font, the board was created with using flexbox and multiple divs. Each hole was split in two to create the illusion of the instructors coming out of the hole. There's a reset button, and a start button to begin the game. The timer and score is also on the board.

- Randomize-
Using math floor and math random, each of the holes and instructors are cycled through with a set random time. Originally I planned to put the images in an array and push them through a function. However, it was more practical to put the images in the html and use visibility and math functions to shuffle through them.

- Scoring-
Using and understading how path worked during an event listener, made the clicks and point adding system more accurate. Using dataset, each instructor will be different points. Also added some sound effects for each hit.

- Timer-
With cleartime interval, the timer was able to stop the animations to end the game. Originally had trouble with game end, so used clear time out to help end the game.

```javascript
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
```
- Modal-
Using modal pop-ups the information gained through the game will still be there for the winning/game over condition.

### Credits
- https://css-tricks.com/almanac/properties/c/cursor/ - provided information on how to change the cursor to a hammer.
- https://medium.com/@peterchic/design-to-development-f4087b97ade0 - provided help with understanding how whack- a - mole works through code.
- https://sabe.io/tutorials/how-to-create-modal-popup-box- provide instructions to making a modal, the winning section of the game.

- Jason Seminara- provided help with making the randomize function more effective and for it to be used globally.


### Opportunities for Further Growth

While the game works from the beginning to the end. There are different conditions that can be added to make the game harder

