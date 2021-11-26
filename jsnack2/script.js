// jsnack2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo un array con i nomi degli invitati
const invitati = [
    "luca",
    "marco",
    "federico",
    "matteo",
    "giulia",
    "stefano",
    "francesco"
];

const nome = prompt('inserisci qui il tuo nome'); //creo il prompt per inserire il nome

let trovato = false; //di base il nome non è trovato

for (let i = 0; i < invitati.length; i++) {
    if (nome == invitati[i]) {
        trovato = true; //se trovo il nome la variabile diventa true
        console.log('sei nella lista');
    }
}



