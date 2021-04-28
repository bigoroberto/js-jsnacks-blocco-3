/**
 * Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
 */

var arr2 = ['a','b','c'];
var arr1 = [1,2,3,4,5,6,7,8];
var minor = arr1;
var major = arr2;
if(arr1.length > arr2.length) {
  minor = arr2;
  major = arr1;
}

if(arr1.length === arr2.length){
  console.log('sono uguali')
}else{
  while(minor.length < major.length){
    minor.push(codeGenerator());
  }
  console.log(minor)
}









function codeGenerator(){
  var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
  var code = "";
  while(code.length < 3){
    code += alfabeto[getRandomNumber(0, alfabeto.length - 1)];
  }

  while(code.length < 6){
    code += getRandomNumber(1, 9);
  }

  return code;
}

function getRandomNumber(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
