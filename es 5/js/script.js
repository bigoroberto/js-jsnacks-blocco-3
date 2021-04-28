var alfabeto =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

var min = parseInt(prompt('inserisci un numero compreso fra 0 e '+(alfabeto.length-2)));
var max = parseInt(prompt('inserisci un numero compreso fra ' +(min+1)+' e ' +(alfabeto.length-2)));

function filterArray

function filterArray(array, min, max){
  var arrReturn = [];

  for(var i in alfabeto){
    if(i >= min && i <= max ) {
      arrReturn.push(arr[i]);
    }
  }

  return arrReturn;
}