// Elements
const userChoise = document.querySelector('#userChoise');
const computerChoise = document.querySelector('#cumputerChoise');
const options = document.querySelectorAll('.option');
const resultElement = document.querySelector('p');
const buttons = document.querySelectorAll('button');

// Variables
let user;
let computer;

buttons[1].disabled = true;

// EventListeners
options.forEach(option => {
    option.addEventListener('click', select)
    console.log(option);
});
buttons[0].addEventListener('click', start);
buttons[1].addEventListener('click', play);

// Functions
function select(e) {
    user = e.target.alt;
    switch (user) {
        case 'rock':
            userChoise.src = `img/rock.png`;
            break;
        case 'paper':
            userChoise.src = `img/paper.png`;
            break;
        case 'scissors':
            userChoise.src = `img/scissors.png`;
            break;
        default:
            break;
    }
}