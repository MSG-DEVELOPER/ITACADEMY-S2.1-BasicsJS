//Nivell 1
// Exercici 1
//Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i
// una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

{
  processar(255, print);

  function processar(num, callback) {
    callback(num);
  }

  function print(num) {
    console.log("Desde el nivel 1 ejercicio 1 , el numero es " + num);
  }
}

{
  //Exercici 2
  //Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres:
  // dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb
  // els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

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

{
  //Nivell 2
  //Exercici 3
  //Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres:
  // un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback,
  // passant el nom com a paràmetre.

  esperarISaludar("marcos", saluda);

  function esperarISaludar(nom, callback) {
    setTimeout(() => callback(nom), 2000);
  }

  function saluda(nom) {
    console.log("desde el nivel 2 ej 3 , hola " + nom);
  }
}

{
  //Exercici 4
  //Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i
  // una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element
  // de l'array.

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

{
  //Nivell 3
  //Exercici 5
  //Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i
  // una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors
  // invocar la funció de callback amb la cadena transformada.

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
