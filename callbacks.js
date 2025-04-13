ejecutar_f1();
ejecutar_f2();
ejecutar_f3();
ejecutar_f4();
ejecutar_f5();


function ejecutar_f1(){
  processar(255, print);

  function processar(num, callback) {
    callback(num);
  }

  function print(num) {
    console.log("Desde el nivel 1 ejercicio 1 , el numero es " + num);
  }
}

function ejecutar_f2(){
  let num1 = 10;
  let num2 = -2;

  calculadora(num1, num2, suma);

  function calculadora(a, b, callback) {
    callback(a, b);
  }

  function suma(a, b) {
    console.log("Desde el nivel1 ej 2 , la suma es " + (a + b));
  }
}

function ejecutar_f3(){
  esperarISaludar("marcos", saluda);

  function esperarISaludar(nom, callback) {
    setTimeout(() => callback(nom), 2000);
  }

  function saluda(nom) {
    console.log("desde el nivel 2 ej 3 , hola " + nom);
  }
}

function ejecutar_f4(){
  const array = [1, 2, 3, 4, 56, 7, 8];
  processarElements(array, multiplica);

  function processarElements(array, callback) {
    console.log("desdee el nivel 2 ej 4...");
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }

  function multiplica(num) {
    console.log(num * 2);
  }
}

function ejecutar_f5(){
  let stringMinus = "hola caracola";
  processarCadena(stringMinus, muestra);

  function processarCadena(minus, callback) {
    let mayus = minus.toUpperCase();
    callback(mayus);
  }

  function muestra(frase) {
    console.log(frase);
  }
}
