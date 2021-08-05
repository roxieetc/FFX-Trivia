# FFX-Trivia

![winter gif](https://media.giphy.com/media/lH99Q3q4sTHIA/giphy.gif)

---

## The Game

A fun and interactive trivia game that tests your knowledge of the inhabitants of Spira and their roles in this fan-favorite franchise RPG. Work your way through a 10-question character quiz that will prove whether you're a true fan of the beloved Final Fantasy series or not.
Your final score will be displayed at the end with question indicators that will let you know if the answer you chose was wrong or right.

![title screen](/images/titlescreen.png)
![question example](/images/questionexample.png)
![end screen](/images/endcard.png)

How did I create this? See below!

> #### Technologies Used
>
> - **HTML5** to create container for all text and elements on the page.
> - **CSS** to style all of the buttons, titles, and text. This was also used to manipulate the position of the button elements, and helped to create interactive hover effects.
> - **JavaScript** provided all of the functionality of the pages, such as: button click event listeners, incremented scores, and looping through the questions and answers to provide for a more interesting and interactive environment.

---

## Install Instructions

You can easily access the **Final Fantasy X Trivia Game** by clicking this link: [FFX-Trivia](https://roxieetc.github.io/FFX-Trivia/).

If you would like the work through this code yourself, it is a public project that is available for you to fork and clone for your own personal use or enlightenment.

---

## User Stories

The main users for this trivia game will be Final Fantasy enthusiasts who enjoy the makeup of the FFX characters and story and would like to have something interactive to show off their knowledge and love for this game:

- As a player, I would like an attractive title screen that immediately pulls me in and gets me excited to play this game.
- As a player, I would like multiple choice questions so that I have an easier time working thorugh the questions, instead of typing in every answer.
- As a player, I would like images with my questions so that the questions appear more appealing instead of it being more of a reading assignment.
- As a player, I would like to know whether the answer I selected is wrong so that I can know where I went wrong in the game.
- As a player, I would like the game to keep score for me so that I don't have to keep track of that myself and can focus on the game elements throughout the trivia course.

---

## Wireframes

![wireframe answer card](/images/wfquestioncard.png)

This shows that basic card layout that includes user story elements like: making questions multiple choice layed out in a 2x2 pattern to make them more appealing to the eyes, as well as an image included with each question/answers to make selecting the right answer a little easier. This could also be seen as providing a "hint" for a first level (as other, more advanced levels are likely to come in future updates).

![wireframe anwser correct](/images/wfcorrectanswer.png)

This displays the question card with the correct answer chosen by the user. As seen in the example above, the button pressed highlights green when the user selects the correct choice. The button will turn red if the chosen answer is incorrect. Score is updated with each answer selected.
Final game will include 10 questions about the main characters in the game.

---

## Major Hurdles

> - The functionality in JavaScript provided challenges, such as correcting the syntax to have each button click loop through the questions and correct answers. Oftentimes, this would result in only displaying the first or last question and nothing in between.
> - Creating an eventListener that would change color when selecting the correct/incorrect answer. Also, with that, making sure the button would only apply the question that was being answered and not continue to the next question.

---

## References and Assistance

Though most of this code was created through the methods and techniques I learned in the **General Assembly Software Engineering Immersive** program, I did reference some information from **The Web Developer Bootcamp 2021** by Colt Steele on udemy.com.

I also received assistance from fellow students in the GA course, as well as instructors from the same.
More specifically, this help was provided with correcting the timeouts for changing the button color on correct/incorrect answers, as well as placement of the code to calculate the total at the end of the game.
