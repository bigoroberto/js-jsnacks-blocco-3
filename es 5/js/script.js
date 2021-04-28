//scrivi una funzione che accetti 3 argomenti:
// un array e due numeri ( "a" più picolo di "b"e "b" grande al massimo quanto il numero di elementi dell'array)
//La funzione ritornerà un nuovo array con i valore che hanno la posizione compresa tra "a" e "b"



var alfabeto =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

var min = parseInt
var max = 10;

console.log(filterArray(alfabeto,min,max));

function filterArray(array, min, max){
  var arrReturn = [];

  for(var i in alfabeto){
    if(i >= min && i <= max ) arrReturn.push(arr[i]);

  }

  return arrReturn;
}