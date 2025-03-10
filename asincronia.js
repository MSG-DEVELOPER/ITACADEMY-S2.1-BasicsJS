{
  let promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hola, mon");
    }, 2000);
  });

  console.log("desde el nivel 1 ej 1 te saludo");
}

{
  let promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("hola, mon desde el nivel 1 ej 2");
    }, 2000);
  });

  promesa.then((msg) => console.log(msg));
}

{
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
  function resuelvePromesa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hola, mon desde el nivel 2 ej 5");
      }, 2000);
    });
  }

  async function printea() {
    try {
      let msg = await resuelvePromesa();
      console.log(msg);
    } catch (error) {
      console.log(error);
    }
  }

  printea();
}

{
  async function promesa1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Desde el nivel 3 ej 6"), 2000);
    });
  }

  async function promesa2() {
    return new Promise((resolve) => {
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
