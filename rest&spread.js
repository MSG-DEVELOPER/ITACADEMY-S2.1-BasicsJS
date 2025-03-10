{
  const array1 = ["IT"];
  const array2 = ["ACADEMY"];
  const array3 = [...array1, ...array2];
  console.log("desde el nivel 1 ej 1 , te digo...." + array3);
}

{
  let res = suma(1, 2, 3, 4);
  console.log("desde el nivel1 resultado:" + res);

  function suma(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }

    return total;
  }
}

{
  let objecte1 = { cargo: "programador React", salario: 50000 };
  let objecte2 = { ...objecte1, salario: 45000 };
  console.log(
    "desde nivel 2 ej 3 , te aviso que sigo cobrando " + objecte1.salario
  );
}

{
  const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let [primero, segundo, ...losOtros] = arrayNum;
  console.log(
    "desde el nivel 2 ej 4 te presento el primer elemento " +
      primero +
      " el segundo " +
      segundo +
      " y los que faltan " +
      losOtros
  );
}

{
  function aceptaTres(a, b, c) {
    console.log(
      `desde el nivel 3 ej 5 , por aqui han pasado ${a} , ${b} y ${c} `
    );
  }

  const arrayTres = [10, 20, 30];

  aceptaTres(...arrayTres);
}

{
  let obj1 = { nom: "ItAcademy", alumnos: 1200 };
  let obj2 = { dependencia: "bcn activa", especialidad: "IT" };

  let obj3 = { ...obj1, ...obj2 };

  console.log(
    "te presento la suma de los objetos desde el nivel 3 ej 6: ",
    obj3
  );
}
