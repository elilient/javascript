const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const uusMang = document.querySelector('#uusMang');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const korduv = document.querySelector('.korduv');

let guessCount = 1;
let randomNumber = Math.floor(Math.random()*100)+1;
var kordused = 0;
uusMang.style.visibility='hidden';
const checkGuess = () => {
    kordused++;
    if (kordused > 9) {
        guessSubmit.disabled=true;
        guessField.disabled=true;
        uusMang.style.visibility='visible';
    }
    
    let userGuess = Number(guessField.value);

    
    
    if (guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised: ';
    }
    if (guessField.value == guesses){
        korduv.textContent = 'Selline number juba oli';
        }
    guesses.textContent += `${userGuess} `;
    //Kui kasutaja pakub õigesti
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Õige vastus';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        uusMang.style.visibility='visible';
        // Kui kasutaja pakub 10 korda valesti
    } else if (guessCount === 10) {
        lastResult.textContent = 'Mäng läbi';
        lowOrHigh.textContent = '';
    } else {
        lastResult.textContent = 'Vale vastus';
        lastResult.style.backgroundColor = 'red';
        //kui number on liiga kõrge

        const lowOrHighText = 'Viimane pakkumine oli liiga ';

        if (userGuess < randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'madal';

        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'kõrge';
        }
        //Kui number on liiga kõrge               
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);