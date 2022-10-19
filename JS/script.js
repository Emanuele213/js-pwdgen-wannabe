const year = 22;
let name = prompt ('Inserisci il tuo nome: ');
let lastName = prompt ('Inserisci il tuo cognome: ');
let color = prompt ('Inserisci il tuo colore preferito: ');
document.getElementById('password').innerHTML = (`${name}${lastName}${color}${year}`);