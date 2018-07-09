Whack - the - Instructor

What is this game about?
- A simple game that brings back the inner child. 
- While learning a new language, there's time of frustration and a need to let off steam.
- Take this time to get some points while clicking on the instructors' faces.
- Based on the instructor's position, they each give a different point system.


Wireframe-
![alt text](https://github.com/ginnygu/project_1/blob/master/images/wireframe_project1.png "First page")
![alt text](https://github.com/ginnygu/project_1/blob/master/images/wireframe_project2.png "First page")
![alt text](https://github.com/ginnygu/project_1/blob/master/images/wireframe_project3.png "First page")
![alt text](https://github.com/ginnygu/project_1/blob/master/images/wireframe_project4.png "First page")
![alt text](https://github.com/ginnygu/project_1/blob/master/images/wireframe_project5.png "First page")


Initial thought on Game Building

-Originally, I wanted a game that is easy to play and funny. I really liked the idea of a retro feel game and through some research I saw the possibilities that whack-a-mole gave. I took this oportunity to create a game with humorous properties. I decided to add faces of the instructors to replace the moles.

-Holes and Instructors-
I knew that I had to use some type of math floor and math random to help with deciding on the randomness of holes and which hole the 'intructors' were going to pop up.

- Points and Timer- 
Unlike the traditional game, this game will collect different amount of points based on the instructor but game will end on a set time.

-Win-
When the game ends through the timer, there's a win window that gives the players an oportunity to play again.


Phases of completion

-Game board-
Using more retro pictures and font, the board was created with using flexbox and multiple divs. Each hole was split in two to create the illusion of the instructors coming out of the hole. There's a reset button, and a start button to begin the game. The timer and score is also on the board.

- Randomize-
Using math floor and math random, each of the holes and instructors are cycled through with a set random time. Originally I planned to put the images in an array and push them through a function. However, it was more practical to put the images in the html and use visibility and math functions to shuffle through them.

- Scoring-
Using and understading how path worked during an event listener, made the clicks and point adding system more accurate. Using dataset, each instructor will be different points. Also added some sound effects for each hit.

- Timer-
With cleartime interval, the timer was able to stop the animations to end the game. 

-Modal-
Using modal pop-ups the information gained through the game will still be there for the winning/game over condition.

Links and Resources
- https://css-tricks.com/almanac/properties/c/cursor/
- https://medium.com/@peterchic/design-to-development-f4087b97ade0

