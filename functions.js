function user(greetingPrefix, userName= 'user') {
    // console.log(greetingPrefix + ' ' + userName + '!');
    console.log(`${greetingPrefix} ${userName}!`)
}

user(); /*undefined si pas de value definie dans la fonction, sinon value de la fonction par défaut = undefined user !*/
user('Hi ', 'Max'); /*Max, ici max est prioritaire sur user = Hi Max !*/
user('Hello'); /* = Hello user !*/

function sumUp(...numbers) { /*numbers = array et les ... permet a JS d accepter behind the scene les param sans limite de nombre dans une definition de fonction*/
    let result = 0;

    for (const number of numbers) {
        result += number; /* = à result = result + number*/
    }

    return result
};


const inputNumbers = [2, 5, 10, 45, 56];
console.log(sumUp(...inputNumbers)); /*si la value dans l execution d'une fonction est une array, les ... permettent de spread chaque valeur de l array en une value a part entiere, sinon le resultat afficherait une suite*/


console.log(sumUp); /*functions are objects*/