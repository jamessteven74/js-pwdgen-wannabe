/*
chiedi all'utente il suo nome.
chiedi il suo cognome
chiedi il suo colore preferito
infine scrivi sulla pagina il risultato in questo formato: nomecognomecolorepreferito22
*/


//alert
alert('Ciao! fornisci nome cognome colore preferito');

const full_name = prompt("scrivi il tuo nome")
console.log(full_name)

document.getElementById("first_name").innerHTML = 'Fabio'

const surname = prompt("scrivi tuo cognome")
console.log(surname)

document.getElementById("surname").innerHTML = 'Pacifici'

const color = prompt("quale è il tuo colore preferito")
console.log(color)
document.getElementById("fav_color").innerHTML = 'rosso'

const password = prompt ("scrivi la tua password")
console.log(password)

document.getElementById("password").innerHTML = '80'

