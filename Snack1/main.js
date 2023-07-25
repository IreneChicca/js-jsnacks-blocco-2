



// - Attraverso un prompt chiedo un numero all'utente 

let userNumber = prompt("Inserisci un numero")

// seleziono elemento di interesse

const showNumber = document.getElementById("show-number")

// - Imposto una condizione dove *SE* - il numero è pari viene stampato sulla pagina - se il numero è dispari aggiungerò un incremento di +1 per stampare il numero successivo

if (userNumber % 2 == 0) {

    showNumber.innerHTML += userNumber


}

else {
    userNumber++;


    showNumber.innerHTML += userNumber
}

