"use strict";
//esempio semplice di una funzione somma:
//a differenza di JS definisco :number i parametri della funzione
//cosi posso evitare di scrivere IF perchè se un numero è stringa mi da erore senza doverlo far notare io
//percchè "5" è stringa e non number come invece io ho specificato
function somma(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return 100;
    }
}
console.log(somma(3, 5));
//2) TS è statico! non come JS, le cose definite in un modo vengono lette in quel modo oppure errore:
let prova = 5;
prova = "eccomi"; //la stringa la legge errore perchè non è numero coe il 5
//esempi di TIPI per le variabili:
let prova1 = 5;
let prova2 = "ciao";
let prova3 = true;
let prova4 = 12; //dato non conosciuto
let prova5; //per i metodi senza tipi
let prova6; //un dato che non avrà return!
