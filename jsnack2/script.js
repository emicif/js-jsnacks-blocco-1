console.log ('JS 2 OK')


// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array.


const validNumber = []; //creao array vuoto


//utlizzo il while


for(let i=0; i < 6; i++) {
    let nuovoNumero; // variabile vuota
    while(isNaN(nuovoNumero)) { //finché quello che hai inserito non è un numero
        nuovoNumero = parseInt(prompt(`${i+1} 'Inserisci un numero'`)); //continuo a chiedere all'utente un numero
    }

    if(nuovoNumero % 2 !== 0) {
        validNumber.push(nuovoNumero);
    }

}

//stampo il mio array
console.log('I numeri dispari sono: ' + validNumber);
