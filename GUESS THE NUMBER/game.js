const form = document.querySelector('form');
const userGusses = document.querySelector("#guessNum");//UserInput
const userno = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi')
const sumBtn = document.getElementById('submit');
const plays = document.getElementById('restart');

let randomNo = parseInt(Math.random() * 100 + 1);

let play = true;
let pguess = [];
let turn = 1;
if (play) {
    sumBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const num = parseInt(userGusses.value);
        validGuess(num);
    })
}
function validGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter the number')
    }
    else if (guess < 1) {
        alert('please enter more than 1')
    }
    else if (guess > 100) {
        alert('please enter less than 100')
    }
    else {
        pguess.push(guess)
        if (turn > 6) {
            displayGuess(guess);
            displayMassege(`GAMEOVER😏Random Number Was ${randomNo}😝`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
};

function checkGuess(guess) {
    if (guess === randomNo) {
        displayMassege(`You guessed it RIGHT👍`)
        endGame()
    }
    else if (guess < randomNo) {
        displayMassege(`Number is TOO Low ⬇️`)
    }
    else if (guess > randomNo) {
        displayMassege(`Number is TOO High ⬆️`)
    }
};

function displayGuess(guess) {
    userGusses.value = '';
    userno.innerHTML += `${guess}, `;
    turn++;
};

function displayMassege(mass) {
    lowOrHi.innerHTML = mass;
    if (mass.includes("GAMEOVER")) {
        lowOrHi.style.color = "red"; // Set red color only for GAME OVER message
    } else {
        lowOrHi.style.color = ""; // Reset to default for other messages
    }
    
};

function endGame() {
    play = false;
    userGusses.value = '';
    sumBtn.setAttribute('disabled', '')
    userGusses.setAttribute('disabled', '');
    plays.style.display='block';
    playAgain()
};

function playAgain() {
    plays.addEventListener('click', function (e) {
        e.preventDefault()
        randomNo = parseInt(Math.random() * 100 + 1);
        lowOrHi.innerHTML = ''
        userGusses.removeAttribute('disabled');
        sumBtn.removeAttribute('disabled');
        play = true;
        pguess = [];
        userno.innerHTML = '';
        turn = 1;
    })
};