// FUNCTION
function isPalindrome(wordToCheck){
    let palindromeWord = '';
    let theWordIsPalindrome= false
    for (let i= (wordToCheck.length - 1); i>=0 ; i--){
       palindromeWord += wordToCheck[i];
    }
    if (wordToCheck === palindromeWord){
        theWordIsPalindrome = true;
    } else{
        theWordIsPalindrome = false;
    }
    return theWordIsPalindrome;
}

// MAIN
let userWord = prompt('inserisci una parola');

const palindrome = isPalindrome(userWord);

if (palindrome){
    alert('La parola inserita è palindroma')
} else{
    alert('La parola inserita non è palindroma')
}