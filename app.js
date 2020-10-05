// Elements
const userChoise = document.querySelector('#userChoise');
const computerChoise = document.querySelector('#cumputerChoise');
const options = document.querySelectorAll('.option');
const resultElement = document.querySelector('p');
const buttons = document.querySelectorAll('button');

// Variables
let user = '';
let computer = '';

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

function start(e) {
    changeDisplay(true, false, 'visible', 1);
    resultElement.textContent = 'Make a choise'
}

function changeDisplay() {
    buttons[0].disabled = arguments[0];
    buttons[1].disabled = arguments[1];
    options.forEach(option => {
        option.style.visibility = `${arguments[2]}`;
        option.style.opacity = `${arguments[3]}`;
    });
    // user = '';
    // computer = '';
}

function play() {
   if(user === '') return;
    setTimeout(() => {
        const random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0:
                computer = 'rock';
                break;
            case 1:
                computer = 'paper';
                break;
            case 2:
                computer = 'scissors';                
                break;
                default:
                    break;
                }                
        computerChoise.src = `img/${computer}.png`;
        compare();
    }, 1);

    changeDisplay(false, true, 'hidden', 0);
}

function compare() {
    alert('Burda')
    if (user === computer) {
        resultElement.textContent = 'You are tie';
    }
    else if (user == 'rock' && computer == 'paper')
        resultElement.textContent = 'You lost';
    else if (user == 'rock' && computer == 'scissors')
        resultElement.textContent = 'You won';
    else if (user == 'paper' && computer == 'rock')
        resultElement.textContent = 'You won';
    else if (user == 'paper' && computer == 'scissors')
        resultElement.textContent = 'You lost';
    else if (user == 'scissors' && computer == 'rock')
        resultElement.textContent = 'You lost';
    else if (user == 'scissors' && computer == 'paper')
        resultElement.textContent = 'You won';
}