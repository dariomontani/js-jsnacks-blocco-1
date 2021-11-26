// jsnack1
// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

// creo un ciclo dove chiedo per 10 volte un numero
let sum = 0; //punto di partenza per fare la somma
for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt('inserisci un numero'));
    sum += number; //sommo a sum i numeri scritti dall'utente
}

console.log(sum); //stampo la somma finale

