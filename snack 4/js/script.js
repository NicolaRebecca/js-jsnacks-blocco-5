// Snack 4 - 
// Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
// nome
// cognome
// age
// descrizione

// Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
// ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

// {
//   nome: 'Pippo',
//   cognome: 'Baudo',
//   age: 80,
//   descrizione: ''
// } 

// Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 

// Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

// Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

// Bonus
// Visualizzare nell’html questi dati in una forma tabellare.

var students = [{
    nome: "Pippo",
    cognome: "Baudo",
    age: 80,
    descrizione: ""
}, 

{
    nome: "Andrea",
    cognome: "Pellegrino",
    age: 20,
    descrizione: ""
},

{
    nome: "Roberto",
    cognome: "Pedone",
    age: 25,
    descrizione: ""
}];

for (var i = 0; i < students.length; i++) {
    var description = students[i].descrizione = prompt('Inserisci descrizione per ' + students[i].nome + ' ' + students[i].cognome);
    students[i].descrizione = description;
  }


   for (var x = 0; x < students.length; x++) {
  
    for ( var key in students[x]) {
      console.log(key, students[x][key]);
    }
    
}