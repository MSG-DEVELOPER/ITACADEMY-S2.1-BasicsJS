
{
    
    //Nivell 1
    //Exercici 1
    //Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear
    //  una tercera array que contingui tots els elements de array1 i array2.

const array1=["IT"];
const array2=["ACADEMY"];
const array3= [...array1,...array2] ;
console.log("desde el nivel 1 ej 1 , te digo...." + array3);

}



{
//Exercici 2
//Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a 
// acceptar un nombre indeterminat d'arguments i retornar la seva suma.

let res = suma(1,2,3,4);
console.log("desde el nivel1 resultado:" + res);

function suma(...args){
    let total=0;
    for(let i=0;i<args.length;i++){
        total += args[i];
    }

    return total;
}
}

{
//nivell 2
//ej 3 
//Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte,
//  'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una
//  propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.



let objecte1 = {cargo:"programador React" ,salario:50000 };
let objecte2 = {...objecte1,salario:45000};
console.log("desde nivel 2 ej 3 , te aviso que sigo cobrando " + objecte1.salario);

}




{
//nivel 3
//ej 5
//Spread en Funcions: Crea una funció que accepti tres arguments. Després, 
// crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

function aceptaTres(a,b,c){
    console.log(`desde el nivel 3 ej 5 , por aqui han pasado ${a} , ${b} y ${c} `)
}

const arrayTres = [10,20,30];

aceptaTres(...arrayTres);

}


{
//nivel 3 
// ej 6

//Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador
//  spread per a fusionar aquests dos objectes en un de nou.

let obj1= {nom:"ItAcademy" , alumnos:1200 };
let obj2= {dependencia : "bcn activa" , especialidad:"IT"};

let obj3={...obj1 , ...obj2};

console.log("te presento la suma de los objetos desde el nivel 3 ej 6: " , obj3);


}







