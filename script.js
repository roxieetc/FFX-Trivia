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

/* CORRECT/INCORRECT ANSWER */
//set variable for all answer buttons to establish eventlisteners for each.
const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');
const button3 = document.getElementById('answer3');
const button4 = document.getElementById('answer4');
