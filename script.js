/* WELCOME/END SCREEN MODAL INFORMATION */
//declared modal variables for modal content and closing modal.
const welcome = document.getElementById('welcomeScreen');
const startIt = document.getElementById('start');
//variables for end screen.
const endScreen = document.getElementById('endScreen');
const restart = document.getElementById('restart');

//Function to change modal display to block.
const openModal = () => {
    welcome.style.display = 'block';
}
//Function to close modal display
const closeModal = () => {
    welcome.style.display = 'none';
}
//Adding event listeners to open and close modal
startIt.addEventListener('click', closeModal)
//set timeout to have modal pop-up immediately
setTimeout(openModal, 0)

//------------------------------------------------------------------------------------------

/* CHARACTER QUESTIONS -- LVL1 */
//set variable for all answer buttons to establish eventlisteners for each.
const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');
const button3 = document.getElementById('answer3');
const button4 = document.getElementById('answer4');
//set variable for h2 element
const questionContainer = document.getElementById('theQuestion');
//set variable for image element
const characterImg = document.querySelector('img');
//add variable for buttons
const allButtons = document.querySelectorAll('button');

//created an array of objects for questions, options, and answers.
const levelQuestions = [{
    question: "Which character has an overdrive of 'Swordplay'?",
    options: ['Auron', 'Tidus', 'Wakka', 'Rikku'],
    image: 'https://static.wikia.nocookie.net/finalfantasy/images/e/e7/FFX_Artwork_Tidus.png',
    answer: 'Tidus'
},
{ question: "This character is able to summon aeons:",
  options: ['Rikku', 'Lulu', 'Shiva', 'Yuna'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/f/f9/FFX_Artwork_Yuna.png',
  answer: 'Yuna'
},
{ question: "Which character uses a Katana as their weapon?",
  options: ['Seymour', 'Kimahri', 'Auron', 'Tidus'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/f/f3/Auron_Art.png',
  answer: 'Auron'
},
{ question: "Who has the overdrive of 'Ronso Rage'?",
  options: ['Lulu', 'Auron', 'Kimahri', 'Wakka'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/e/e8/FFX_Kimahri_Art.png',
  answer: 'Kimahri'
},
{ question: "Which character is an Al Bhed from Bikanel Island?",
  options: ['Rikku', 'Yuna', 'Donna', 'Lulu'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/5/55/FFX_Artwork_Rikku.png',
  answer: 'Rikku'
},
{ question: "Where is Tidus from?",
  options: ['Bevelle', 'Luca', 'Zanarkand', 'Besaid Island'],
  image: 'https://www.logolynx.com/images/logolynx/dd/dd7009470e758bad8d03aad3816d4abb.png',
  answer: 'Zanarkand'
},
{ question: "What is Wakka's overdrive?",
  options: ['Bushido', 'Reels', 'Fury', 'Mix'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/a/ad/FFX_Wakka_Art.png',
  answer: 'Reels'
},
{ question: "Where is Yuna originally from?",
  options: ['Zanarkand', 'Bevelle', 'Kilika Island', 'Besaid Island'],
  image: 'https://i.pinimg.com/originals/b1/6b/8f/b16b8fd049515112fbfe908eabae97cd.jpg',
  answer: 'Bevelle'
},
{ question: "What weapon does Lulu use in battle?",
  options: ['Dolls', 'Staff', 'Blitzball', 'Bow & Arrow'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/5/5b/FFX_Lulu_Art.png',
  answer: 'Dolls'
},
{ question: "Which character is not one of Yuna's guardians?",
  options: ['Kimahri', 'Tidus', 'Auron', 'Seymour'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/a/ae/FFX_Seymour_Art.png',
  answer: 'Seymour'
}];

//set values for question indices
const finalQuestion = levelQuestions.length -1;
let currentQuestion = 0;
//set value for score
let currentScore = 0;


//Created function to pull question from levelQuestions array.
function newQuestions () {
questionContainer.innerText = levelQuestions[currentQuestion].question;
//populate each button from levelQuestions array.
    button1.innerText = levelQuestions[currentQuestion].options[0];
    button2.innerText = levelQuestions[currentQuestion].options[1];
    button3.innerText = levelQuestions[currentQuestion].options[2];
    button4.innerText = levelQuestions[currentQuestion].options[3];
//add images for each question
    characterImg.src = levelQuestions[currentQuestion].image;
}

newQuestions ()

//------------------------------------------------------------------------------------------

/* BUTTON EVENT LISTENERS */

//Add eventListeners for each button. Using console.log to show result.
//Add end screen as modal for else function at end of each event listener.

button1.addEventListener('click', function checkAnswer () {

    function colorChange () {   
    if (button1.innerHTML == levelQuestions[currentQuestion].answer) {
        button1.style.backgroundColor = 'lightgreen'
        setTimeout(() => {
            button1.style.backgroundColor= '#38b6ff'
        }, 300)
    } else {
        button1.style.backgroundColor = 'lightcoral'
        setTimeout(() => {
            button1.style.backgroundColor = "#38b6ff"
        }, 300)
    }} 

    let newColor = setTimeout(colorChange, 0)

    function nextQ () {
    if (currentQuestion < finalQuestion) {
        currentQuestion++;
        
        newQuestions();
    } else {
        function displayEnd () {
            endScreen.style.display = 'block';
            }
        }
        const startGame = () => {
            location.reload();
        }
        
        restart.addEventListener ('click', startGame);
        setTimeout(displayEnd, 0);
}
    setTimeout(nextQ, 300)
})


button2.addEventListener('click', function checkAnswer () {
    let userAnswer = "incorrect"
    if (button2.innerHTML == levelQuestions[currentQuestion].answer) {
        userAnswer = "correct"
    } 

    button2.classList.add(userAnswer)
    setTimeout (() => {
        button2.classList.remove(userAnswer)
    if (currentQuestion < finalQuestion) {
        currentQuestion++;
        newQuestions();
    } else {
        function displayEnd () {
            endScreen.style.display = 'block';
            }
        }
        const startGame = () => {
            location.reload();
        }
        
        restart.addEventListener ('click', startGame);
        setTimeout(displayEnd, 0);
})}, 3000)


button3.addEventListener('click', function checkAnswer () {
    let userAnswer = "incorrect"
    if (button3.innerHTML == levelQuestions[currentQuestion].answer) {
        userAnswer = "correct"
    } 

    button3.classList.add(userAnswer)
    setTimeout (() => {
        button3.classList.remove(userAnswer)
    if (currentQuestion < finalQuestion) {
        currentQuestion++;
        newQuestions();
    } else {
        function displayEnd () {
            endScreen.style.display = 'block';
            }
        }
        const startGame = () => {
            location.reload();
        }
        
        restart.addEventListener ('click', startGame);
        setTimeout(displayEnd, 0);
})}, 3000)


button4.addEventListener('click', function checkAnswer () {
    let userAnswer = "incorrect"
    if (button4.innerHTML == levelQuestions[currentQuestion].answer) {
        userAnswer = "correct"
    } 

    button4.classList.add(userAnswer)
    setTimeout (() => {
        button4.classList.remove(userAnswer)
    if (currentQuestion < finalQuestion) {
        currentQuestion++;
        newQuestions();
    } else {
        function displayEnd () {
            endScreen.style.display = 'block';
            }
        }
        const startGame = () => {
            location.reload();
        }
        
        restart.addEventListener ('click', startGame);
        setTimeout(displayEnd, 0);
})}, 3000)