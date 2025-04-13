ejecutar_f1();
ejecutar_f2();
ejecutar_f3();
ejecutar_f4();
ejecutar_f5();
ejecutar_f6();



function ejecutar_f1() {
  let noms = ["Anna", "Bernat", "Clara"];
  noms.forEach((value) => console.log(value));
}

function ejecutar_f2() {
  let noms = ["Anna", "Bernat", "Clara"];
  console.log("desde el nivel 1 ej 2 recorro el array con for of ");
  for (let value of noms) {
    console.log(value);
  }
}

function ejecutar_f3() {
  let numeros = [1, 2, 3, 4, 5, 6];
  let pares = numeros.filter((value) => value % 2 == 0);
  console.log(
    "te presento un array con solo los pares " + pares + " desde nivel 1 ej 3"
  );
}

function ejecutar_f4() {
  let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
  for (let clau in obj) {
    console.log(clau + " : " + obj[clau]);
  }
}

function ejecutar_f5() {
  let numeros = [1, 2, 3, 4, 5, 6];
  console.log("desde el nivel 2 ej 5 solo imprimirá hasta el 4 y hará break");
  for (let numero of numeros) {
    if (numero == 5) break;
    console.log(numero);
  }
}

function ejecutar_f6() {
  let noms = ["Anna", "Bernat", "Clara"];
  console.log("desde el nivel 3 ej 6 te digo...");
  for (let nom of noms) {
    let indice = buscaIndex(nom, noms);
    console.log("el indice es " + indice + " y el valor " + nom);
  }

  function buscaIndex(n, array) {
    return array.indexOf(n);
  }
}
