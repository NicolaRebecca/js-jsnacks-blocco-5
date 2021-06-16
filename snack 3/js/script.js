// Snack 3 - 1^ parte.
// Creare un array con tre numeri, calcolare la media di questi tre numeri.

var numeriArray = [30, 50, 80];

var totale = 0;

for (var i = 0; i < numeriArray.length; i++){
   totale += numeriArray[i];
}

var media = totale / numeriArray.length;

console.log(media);


// Snack 3 - 2^ parte.
// Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
// nome
// cognome
// anno
// punteggio
// Calcolare il punteggio medio dei tre giocatori.


var giocatori = [
    {
        nome: 'Pippo',
        cognome: 'Baudo',
        anno: '20',
        punteggio: 10
    },
    {
        nome: 'Mimmo',
        cognome: 'Modem',
        anno: '21',
        punteggio: 20
    },
    {
        nome: 'luca',
        cognome: 'bianchi',
        anno: '19',
        punteggio: 10
    }
];


var totale2 = 0;

for (var x = 0; x < giocatori.length; x++){
   totale2 += giocatori[x].punteggio;
}

var media2 = totale2 / giocatori.length;

console.log(media2);




