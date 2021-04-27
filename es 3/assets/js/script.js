//crei due array abc e 123
//array vuoto
//pushare dentro l'array vuoto i valori deglia ltri due array alternati
//USARE CONSOLE.LOG
//CICLO for con variabuile all'interno var =arr[i]
//quando fai queste due varuiabili usa il CONSOL LOG ALLE VAR e vedi in console come te le stampa


var arrLettere = ["a","b","c","d"];
var arrNumber = [1,2,3,4];
var arrFuso = [];

for(var i =0; i < (arrLettere.length && arrNumber.length);i++ ){
  var lettere = arrLettere [i];
  var numeri = arrNumber [i];

  arrFuso.push(lettere + numeri);

}

console.log(arrFuso)