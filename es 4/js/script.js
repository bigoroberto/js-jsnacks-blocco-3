/**
 * Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

var team = [{name:'Ugo'},{name:'Giuseppe'},{name:'Mario'},{name:'Marco'},{name:'Filippo'}]

for(var player of team){
  player.code = codeGenerator();
  player.points = getRandomNumber(0, 50);
  player.perc = getRandomNumber(0, 100);
}
console.log(team)


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