console.log ('JS OK')

// chiedi un numero di 4 cifre all'utente
// calcola la somma di tutte le cifre che compongono il numero


// utilizzo il ciclo While

let numeroUtente;

while(isNaN(parseInt(numeroUtente)) || numeroUtente.length !== 4) { //se lunghezza diversa da continua a chiedere all'utente 
    numeroUtente = prompt('Inserisci numero di 4 cifre');
}

let sommaCifre = 0;

for(let i=0; i < numeroUtente.length; i++) {
    const carattere = numeroUtente [i];
    sommaCifre += parseInt(carattere);
}
console.log(`La somma del numero ${numeroUtente} è: ${sommaCifre}`);