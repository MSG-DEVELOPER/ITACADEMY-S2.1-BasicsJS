{
  //nivel 1
  //ej 1
  //Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text
  // 'Hola, món'.
  let promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hola, mon");
    }, 2000);
  });

  console.log("desde el nivel 1 ej 1 te saludo");
}

{
  //Exercici 2
  //Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior.
  // Crea un .then que imprimeixi el resultat a la consola.
  let promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hola, mon desde el nivel 1 ej 2");
    }, 2000);
  });

  promesa.then((msg) => console.log(msg));
}

{
  //nive 1
  //ej 3
  //Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola',
  //  i que la rebutgi si l'input és qualsevol altra cosa.

  let promesa = new Promise(function (resolve, reject) {
    let input = "hola4";

    setTimeout(() => {
      if (input == "hola") resolve("desde el nivel 1 ej 3 , enlace conseguido");
      else reject("desde el nivel 1 ej 3 , cambia el input, error");
    }, 2000);
  });

  promesa.then((msg) => console.log(msg)).catch((error) => console.log(error));
}

{
  //nivel 1
  //ej 4
  //Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat
  // de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

  function resuelvePromesa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hola, mon desde el nivel 1 ej 4");
      }, 2000);
    });
  }

  async function printea() {
    let msg = await resuelvePromesa();
    console.log(msg);
  }

  printea();
}




{
//nivel 2
//ej 5
//Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible
//  error utilitzant un bloc try/catch.
function resuelvePromesa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hola, mon desde el nivel 2 ej 5");
      }, 2000);
    });
  }

  async function printea() {
    try{
    let msg = await resuelvePromesa();
    console.log(msg);
    }
    catch(error){
        console.log(error);
    }
  }

  printea();
}

{
    // Funciones que devuelven promesas con async/await
async function promesa1() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Desde el nivel 3 ej 6"), 2000);
    });
  }
  
  async function promesa2() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Promesas resueltas con promise.all"), 3000);
    });
  }
  
  async function ejecutar() {
    try {
      let resultados = await Promise.all([promesa1(), promesa2()]);
      console.log(resultados);
    } catch (error) {
      console.log(error);
    }
  }
  
  ejecutar();
  
}



