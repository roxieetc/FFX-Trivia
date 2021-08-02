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

//set variables for all characters that will be asked about in level 1 (will try to adjust later, if time permits)
const characterTidus = ['Tidus', 'Swordplay', 'Sword', 'Zanarkand']
const characterYuna = ['Yuna', 'Summoner', 'Staff', 'Bevelle']
const characterAuron = ['Auron', 'Bushido', 'Katana', 'Bevelle']
const characterWakka = ['Wakka', 'Slots', 'Blitzball', 'Besaid']
const characterRikku = ['Rikku', 'Mix', 'Claws', 'Bikanel Island']
const characterLulu = ['Lulu', 'Fury', 'Dolls', 'Besaid']
const characterKimahri = ['Kimahri', 'Ronso Rage', 'Spear', 'Mt. Gagazet']
const characterSeymour = ['Seymour', 'Requiem', 'Staff', 'Guadosalam']
