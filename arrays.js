//nivel 1
//ej 1
{
const arrayNum = [1, 2, 3, 4];
const quadrat = arrayNum.map(n=>n*n);
console.log("desde el nivel1 ej1 te presento el nuevo array: " + quadrat);
}



{
//nivel 1
//ej 2
const arrayNum=[1,2,3,4];
const arrayPar=arrayNum.filter(n=>n%2==0);
console.log("desde el nivel1 ej2 te presento el nuevo array "+ arrayPar);
}



{
//nivel 1 
//ej 3
//trata de find que creo que no lo he visto
}


{
//nivel1
//ej 4 reduce
const arrayNum=[13,7,8,21];
const suma=arrayNum.reduce((acumulador,n)=>acumulador+n , 0);
console.log("desde el nivel1 ej 4 te doy la suma del array: " + suma );
}


{
//Nivell 2
//Exercici 5
//Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia 
// que faci el següent:

//- Filtra els nombres majors o iguals a 10.

//- Multiplica cada nombre filtrat per 2.

//- Calcula la suma dels nombres filtrats i multiplicats per 2.

//- La funció ha de retornar el resultat de la suma.

let array=[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
let res=array.filter(n=>n>10).map(n=>n*2).reduce((acumulador,n)=>acumulador + n , 0);

console.log("desde el nivel 2 ej 5 ...te digo ... " + res);
}



