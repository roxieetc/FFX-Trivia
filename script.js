/* WELCOME SCREEN MODAL */
//declared modal variables for modal content and closing modal.
const modal = document.getElementById('modal');
const close = document.getElementById('close');

//Function to change modal display to block.
const openModal = () => {
    modal.style.display = 'block';
}

//Function to close modal display
const closeModal = () => {
    modal.style.display = 'none';
}

//Adding event listeners to open and close modal
close.addEventListener('click', closeModal)

//set timeout to have modal pop-up after 1 second
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
  options: ['Rikku', 'Lulu', 'Kimahri', 'Yuna'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/f/f9/FFX_Artwork_Yuna.png',
  answer: 'Yuna'
},
{ question: "Which character uses a Katana as their weapon?",
  options: ['Tidus', 'Kimahri', 'Auron', 'Seymour'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/f/f3/Auron_Art.png',
  answer: 'Auron'
},
{ question: "Who has the overdrive of 'Ronso Rage'?",
  options: ['Lulu', 'Auron', 'Kimahri', 'Wakka'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/e/e8/FFX_Kimahri_Art.png',
  answer: 'Kimahri'
},
{ question: "Which character is an Al Bhed and has a home on Bikanel Island?",
  options: ['Rikku', 'Yuna', 'Donna', 'Lulu'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/5/55/FFX_Artwork_Rikku.png',
  answer: 'Rikku'
},
{ question: "Where is Tidus from?",
  options: ['Besaid Island', 'Luca', 'Zanarkand', 'Bevelle'],
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
  image: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/bf/bfac145f171e01c2ee7d9e4b70f1df1b66c2d974_full.jpg',
  answer: 'Bevelle'
},
{ question: "What weapon does Lulu use in battle?",
  options: ['Dolls', 'Staff', 'Spear', 'Bow & Arrow'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/5/5b/FFX_Lulu_Art.png',
  answer: 'Dolls'
},
{ question: "Which character is not one of Yuna's guardians?",
  options: ['Kimahri', 'Tidus', 'Auron', 'Seymour'],
  image: 'https://static.wikia.nocookie.net/finalfantasy/images/a/ae/FFX_Seymour_Art.png',
  answer: 'Seymour'
}];

//Hard coding the button answers so that we can work on creating onclick events that work.
const q1 = () => {
questionContainer.innerText = `${levelQuestions[0].question}`;

    button1.innerText = `${levelQuestions[0].options[0]}`;
    button2.innerText = `${levelQuestions[0].options[1]}`;
    button3.innerText = `${levelQuestions[0].options[2]}`;
    button4.innerText = `${levelQuestions[0].options[3]}`;
    characterImg.src = `${levelQuestions[0].image}`;
}

q1 ()



