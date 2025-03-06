{
  //nivel 1
  // ej 1

  //forEach: Teniu una array de noms. Utilitza forEach per a imprimir
  // cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

  let noms = ["Anna", "Bernat", "Clara"];
  noms.forEach((value) => console.log(value));
}

{
  //nivel 1
  //ej 2
  //for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola:

  let noms = ["Anna", "Bernat", "Clara"];
  console.log("desde el nivel 1 ej 2 recorro el array con for of ");
  for (let value of noms) {
    console.log(value);
  }
}

{
  //nivel 1
  //ej 3
  //filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui
  // els números parells.
  let numeros = [1, 2, 3, 4, 5, 6];
  let pares = numeros.filter((value) => value % 2 == 0);
  console.log(
    "te presento un array con solo los pares " + pares + " desde nivel 1 ej 3"
  );
}

{
  //nivel 2
  //ej 4
  //for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' };
  //  Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

  let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
  for (let clau in obj) {
    console.log(clau + " : " + obj[clau]);
  }
}

{
  //nivel 2
  //ej 5
  //for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola
  //  els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

  let numeros = [1, 2, 3, 4, 5, 6];
  console.log("desde el nivel 2 ej 5 solo imprimirá hasta el 4 y hará break");
  for (let numero of numeros) {
    if (numero == 5) break;

    // console.log(numero);
  }
}

{
  //nivel 3
  //ej 6
  //for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i
  // la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara'

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
