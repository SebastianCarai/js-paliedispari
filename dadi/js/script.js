// FUNCTIONS
function computerRandomNumber (min, max){
     return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function sum (firstNumber, secondNumber, choice){
    let numbersSum = firstNumber + secondNumber;
    let winner = '';
    if (numbersSum % 2 === 0 && choice === 'pari' ){
        winner = 'utente';
    } else if (numbersSum % 2 === 1 && choice === 'dispari'){
        winner = 'utente';
    } else {
        winner = 'computer';
    }

    return winner
}

// MAIN
let userChoice = prompt('Pari o dispari?');
while (userChoice.toLowerCase() !=='pari' && userChoice.toLowerCase() !=='dispari'){
    userChoice = prompt('ERRORE: Pari o Dispari?');
};
let userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5'));
while (userNumber<1 || userNumber>5){
    userNumber = parseInt(prompt('ERRORE: Inserisci un numero tra 1 e 5'));
};
const computerNumber = computerRandomNumber(1,5);
console.log(computerNumber);

const matchWinner = sum(userNumber, computerNumber,userChoice);
alert('Il vincitore è: ' + matchWinner);