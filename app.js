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

function start(e) {
    buttons[0].disabled = true;
    buttons[1].disabled = false;
    resultElement.textContent = 'Make a choise'
    options.forEach(option => {
        option.style.visibility = 'visible';
        option.style.opacity = '1';
    });
}

function play() {
    buttons[0].disabled = false;
    buttons[1].disabled = true;
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
    }, 1)

}

function compare() {
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