{
  let a = 10;
  let b = 3;
  const res = (a, b) => a + b;
  console.log("nivel 1 ej 1: " + res(a, b));
}

{
  const randomNum = () => Math.floor(Math.random() * 101);
  console.log("nivel 1 ej 2: " + randomNum());
}

{
  class Persona {
    constructor(name) {
      this.name = name;
    }

    greet = () =>
      console.log(`Desde el nivel 1 ej3 te saludo: Hola ${this.name}`);
  }

  const persona1 = new Persona("It academy");
  persona1.greet();
}

{
  let arrayNumbers = [1, 2, 3, 40, 5];

  printNumbers(arrayNumbers);

  function printNumbers(array) {
    console.log("Desde el nivel 2 ej 4: ");
    for (let i = 0; i < array.length; i++) {
      const muestra = (index) => console.log(array[index]);
      muestra(i);
    }
  }
}

{
  let mesage = "desde el nivel 3 ej 5 te doy las gracias por corregirme";

  setTimeout(() => console.log(mesage), 3000);
}
