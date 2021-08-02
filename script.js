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


//created an array of objects for questions, options, and answers.
const levelQuestions = [{
    question: "Which character has an overdrive of 'Swordplay'?",
    options: ['Auron', 'Tidus', 'Wakka', 'Rikku'],
    answer: 'Tidus'
},
{ question: "This character is able to summon aeons:",
  options: ['Rikku', 'Lulu', 'Kimahri', 'Yuna'],
  answer: 'Yuna'
},
{ question: "Which character uses a Katana as their weapon?",
  options: ['Tidus', 'Kimahri', 'Auron', 'Seymour'],
  answer: 'Auron'
},
{ question: "Who has the overdrive of 'Ronso Rage'?",
  options: ['Lulu', 'Auron', 'Kimahri', 'Wakka'],
  answer: 'Kimahri'
},
{ question: "Which character is an Al Bhed and has a home on Bikanel Island?",
  options: ['Rikku', 'Yuna', 'Donna', 'Lulu'],
  answer: 'Rikku'
},
{ question: "Where is Tidus from?",
  options: ['Besaid Island', 'Luca', 'Zanarkand', 'Bevelle'],
  answer: 'Zanarkand'
},
{ question: "What is Wakka's overdrive?",
  options: ['Bushido', 'Reels', 'Fury', 'Mix'],
  answer: 'Reels'
},
{ question: "Where is Yuna originally from?",
  options: ['Zanarkand', 'Bevelle', 'Kilika Island', 'Besaid Island'],
  answer: 'Bevelle'
},
{ question: "What weapon does Lulu use in battle?",
  options: ['Dolls', 'Staff', 'Spear', 'Bow & Arrow'],
  answer: 'Dolls'
},
{ question: "Which character is not one of Yuna's guardians?",
  options: ['Kimahri', 'Tidus', 'Auron', 'Seymour'],
  answer: 'Seymour'
}];

//Hard coding the button answers so that we can work on creating onclick events that work.
const q1 = () => {
questionContainer.innerText = `${levelQuestions[0].question}`;

    button1.innerText = `${levelQuestions[0].options[0]}`;
    button2.innerText = `${levelQuestions[0].options[1]}`;
    button3.innerText = `${levelQuestions[0].options[2]}`;
    button4.innerText = `${levelQuestions[0].options[3]}`;

    characterImg.src = 'https://static.wikia.nocookie.net/finalfantasy/images/e/e7/FFX_Artwork_Tidus.png'

    button1.addEventListener('click', function() {
        button1.style.backgroundColor = 'red';
    });
    button2.addEventListener('click', function() {
        button2.style.backgroundColor = 'green';
    });
    button3.addEventListener('click', function() {
        button3.style.backgroundColor = 'red';
    });
    button4.addEventListener('click', function() {
        button4.style.backgroundColor = 'red';
    });
}
q1 ()

