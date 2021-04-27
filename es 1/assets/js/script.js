 var arrZucchine = [{
    varietà : 'nero di Milano',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'romanesco',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'ortolano di Faenza',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'lunga fiorentina',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'siciliano',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'striata di Napoli',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'bianca triestina',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'rigata pugliese',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'tonda di Piacenza',
    peso : 100,
    colore : '12cm'
  },
  {
    varietà : 'trombetta di Albenga',
    peso : 100,
    colore : '12cm'
  }];


 //for vuole una varinate i( var tipo = arr [i])
 //for of  var i of arr


 var somma = 0;

 for(var zucchina of arrZucchine){
   for(var key in zucchina){
     console.log(key + ": "+zucchina[key]);
   }
   console.log("-----------------------");
   somma += zucchina['peso'];
 }

console.log("La somma del peso delle zucchine è: " + somma);


















































