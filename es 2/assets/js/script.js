var zucchineGrandi = [];
var zucchinePiccole = [];


 var arrZucchine = [{
    varietà : 'nero di Milano',
    peso : 100,
    dimensione : 17
  },
  {
    varietà : 'romanesco',
    peso : 100,
    dimensione : 10
  },
  {
    varietà : 'ortolano di Faenza',
    peso : 100,
    dimensione : 12
  },
  {
    varietà : 'lunga fiorentina',
    peso : 100,
    dimensione : 11
  },
  {
    varietà : 'siciliano',
    peso : 100,
    dimensione : 20
  },
  {
    varietà : 'striata di Napoli',
    peso : 100,
    dimensione: 38
  },
  {
    varietà : 'bianca triestina',
    peso : 100,
    dimensione : 25
  },
  {
    varietà : 'rigata pugliese',
    peso : 100,
    dimensione : 9
  },
  {
    varietà : 'tonda di Piacenza',
    peso : 100,
    dimensione : 14
  },
  {
    varietà : 'trombetta di Albenga',
    peso : 100 ,
    dimensione : 17,
  }];

  console.log(arrZucchine);


  // ricorda come prendere i valori con for of 
  //condizioni (if..)
  //come chiamare ['peso']


  for(var zucchina of arrZucchine){
    if(zucchina['dimesione'] < 15){
      zucchinePiccole.push(zucchina);
    }else{
      zucchineGrandie.push(zucchina)
    }
  }


  console.log(zucchinePiccole)
  console.log(zucchineGrandi)

 
