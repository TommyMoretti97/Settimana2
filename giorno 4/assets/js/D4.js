/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  calcoloArea = l1 * l2;
  return calcoloArea;
}
console.log(area(5, 5));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
crazySum(4, 4);

function crazySum(a, b) {
  if (a != b) {
    somma = a + b;
    return somma;
  } else {
    somma = (a + b) * 3;
    return somma;
  }
}
console.log(somma);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
crazyDiff(25);
function crazyDiff(c) {
  if (19 > c) {
    calcola = 19 - c;
    Math.abs(calcola);
    return calcola;
  } else {
    calcola = c - 19;
    calcola = Math.abs(calcola) * 3;
    return calcola;
  }
}
console.log(calcola);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
boundary(5);
function boundary(n) {
  if ((n >= 20 && n <= 100) || n == 400) {
    console.log(true);
  } else {
    console.log(false);
  }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa = "Questa è una stringa ";
epify(stringa);
function epify(stringa) {
  if (stringa.startsWith("Epicode")) {
    console.log(stringa);
  } else {
    nuovastringa = "Epicode " + stringa;
    console.log(nuovastringa);
  }
}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numero) {
  numero = Math.abs(numero);
  if (x % 3 == 0) {
    if (x % 7 == 0) {
      console.log(x + " è un multiplo di 3 e 7");
    } else {
      console.log(x + " è un multiplo di 3");
    }
  } else if (x % 7 == 0) {
    console.log(x + " è un multiplo di 7");
  } else {
    console.log(x + " non e un multiplo di 3 o 7");
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let parole = "EPICODE";
reverseString(parole);
function reverseString(parole) {
  let array = parole.split("");
  let scambiatore = array.reverse();
  let valorescambiato = scambiatore.join("");
  // per scriverla meglio let valorescambiato = parole.spli('').reverse().join('');
  console.log(valorescambiato);
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const string = "devo mettere le prime lettere maiuscole";
function upperFirst(string) {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  return capitalizedWords.join("");
}


const result = upperFirst(string);
console.log(result);
/*oppure
function upperFirst(string) {
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
cutString(stringa);
function cutString(stringa) {
  stringa = stringa.slice(0, -1);
  stringa = stringa.substring(1);
  console.log(stringa);
}
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
giveMeRandom();
let n = 3;
function giveMeRandom(n) {
  arrayNumeri = [];
  for (let i = 0; i < n; i++) {
    arrayNumeri.push( Math.floor(Math.random() * 11)); // Genera numeri casuali da 0 a 10
    
  }
  return arrayNumeri;
}
const risultato = giveMeRandom(n);
console.log(risultato);
