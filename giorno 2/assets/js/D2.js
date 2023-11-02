/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 12;
const b = 4;
if (a > b ){
  document.getElementById('maggiore').innerHTML= (a + ' è maggiore di ' + b);
}
else if (a == b){
  document.getElementById('maggiore').innerHTML= (a + 'è uguale a ' + b );
}
else{
  document.getElementById('maggiore').innerHTML = (b +' è maggiore di ' + a );
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (a == 5){
console.log ( 'sono uguali');
}
else {
  console.log ('not equal' );
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 10;

if ( c % 5 == 0 ){
console.log (' è divisibile per 5');
}
else{
  console.log (' non è divisibile per 5');
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (( c == 8 ) || (a == 8) || ( c + a === 8 ) || (c - a === 8 ) || ( a - c === 8)){
  console.log('Verifica');
}
else{
  console.log ('Non verificato');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 70;
let spedizione = 10;
let totale = totalShoppingCart;
if ( totalShoppingCart < 50){
  console.log ( totale + spedizione + ' devi pagare la spedizione');
}
else{
  console.log ( totale + ' non devi pagare la spedizione');
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = (totalShoppingCart / 100 ) *20;

if( totalShoppingCart - y <= 50){
  console.log (totalShoppingCart - y + ' devi pagare la spedizione');
}
else{
  console.log ( totalShoppingCart - y +' non devi pagare la spedizione');
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12;
let numero2 = 44;
let numero3 = 5;
if(numero1 >= numero2) {
  if ( numero3 >= numero1){
    console.log (numero3 , numero1, numero2);
  }else {
    if ( numero3 >= numero2){
      console.log (numero1 , numero3 , numero2);
    }
      else{
        console.log( numero1 , numero2,  numero3);
      }
    }
  }
 else{
  if( numero3 >= numero2){
    console.log ( numero3 , numero2 , numero1);

  }else{
    if( numero3 >= numero1){
      console.log(numero2 , numero3 ,numero1);
    } else {
      console.log(numero2 , numero1 , numero3)
    };
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if ( typeof a ==="number"){
console.log(a + ' è un numero');
}
else{
  console.log ( a + ' non è un numero');
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let z = (a % 2);
console.log (z);
if ( z  === 0){
  console.log (a +' è un numero pari');
}
else{
  console.log (a+ ' è un numero dispari');
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
 

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 5) {
    console.log( val + ' è minore di 5');
  } else if (val < 10) {
    console.log( val + ' è minore di 10');
  } else {
    console.log( val + ' è maggiore o ugale a 10');
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.city='Toronto';
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log( me );

/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)
console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9] = 100
console.log(myArray)
