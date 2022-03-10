console.log ('JS 2 OK')


// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array.


const validNumber = []; //creao array vuoto


//utlizzo il while

while(validNumber.lenght < 6) {


    //chiedo numero all'utente finché la lunghezza dell'array è 6
    const numberUtente = parseInt(prompt('Inserisci un numero'));


    //se l'input è un numero
    if(!isNaN(numberUtente)) {
        validNumber.push(numberUtente);
        //se questo numero è divisibile per 2
        if (numberUtente % 2 === 0);

        // lo stampo
        console.log('il numero è pari');
        
        //altrimenti lo inserisco nell'array
        } else {
        numberUtente.push(numberUtente); 
    }
}

//ho un array con 6 numeri

