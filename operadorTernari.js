ejecutar_f1();
ejecutar_f2();
ejecutar_f3();
ejecutar_f4();


function ejecutar_f1(){
  let mns = potConduir(18);
  console.log(mns);

  function potConduir(years) {
    return years > 17
      ? "desde el nivel 1 ej 1 te digo que pots conduir"
      : "desde el nivel 1 ej 1 te digo que no puots";
  }
}

function ejecutar_f2(){
  comparador(3, 4);

  function comparador(a, b) {
    console.log(
      a > b
        ? "desde el nivel 1 ej 2 , que sepas que el primer numero es mas grande"
        : "desde el nivel 1 ej 2 , que sepas que el segundo numero es mas grande"
    );
  }
}

function ejecutar_f3(){
  let num = -2;
  let category;

  category = num == 0 ? "zero" : num > 0 ? "positiu" : "negatiu";

  console.log(
    "desde el primer apartado del nivel 2 ejercico 3 ,la naturaleza del signo es " +
      category
  );

  let num1 = 16;
  let num2 = 15;
  let num3 = 50;
  let numMax = trobarMaxim(num1, num2, num3);
  console.log(numMax);

  function trobarMaxim(a, b, c) {
    return a > b
      ? a > c
        ? "el numero mas grande es el primero"
        : "el mas grande es el tercero"
      : b > c
      ? "el mas grande es el segundo"
      : "el mas grande es el tercero";
  }
}


function ejecutar_f4(){
const arrayNum= [1,2,3,4,5,7,14];
parOImpar(arrayNum);

function parOImpar(array){
    
    for(let i = 0 ; i<array.length;i++){
        console.log(array[i]%2 == 0 ? "par" : "impar");
    }
}


}
