console.log ('JS OK')


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome 
// comunicagli se può partecipare o no alla festa.



//utilizzo for perché ho un ciclo finito nell'array
const invitati = ['emi', 'maria', 'luca', 'antonio']; //creo array con nomi invitati alla festa

const utente = prompt('Inserisci il tuo nome'); //chiedo all'utente un nome

let invitatiFound = false;

// invitati.length && invitatiFound === false -> quando il mio indice è ancora minore del numer total degli elementi e allo stesso temop controllo che la mia variabile sia ancora falsa!
for(let i = 0; i < invitati.length && invitatiFound === false; i++) { //invitati.lenght ci dici quanti elementi ha l'array
    const validInvitati = invitati[i];
    if (utente.trim().toLowerCase() === validInvitati) {

            invitatiFound = true;
    }
}


if (invitatiFound) { //come se scrivressi === true
    console.log('Puoi partecipare alla festa del grande Gatsby')
} else {
    console.log('Mi dispiace, non puoi partecipare alla festa del grande Gatsby')
}