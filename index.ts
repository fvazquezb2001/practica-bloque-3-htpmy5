// En esta práctica debéis crear una interfaz con el nombre "UserData" en el archivo "user-data.ts". En esta interfaz, debéis añadir las propiedades "name", "age" y "phone" con los tipos cadena de texto, número y número respectivamente. Tenéis que exportar esta interfaz.
// En el documento "index.ts" debéis importar la interfaz que habéis creado en el punto anterior. Cread una variable llamada "user" que sea del tipo de la interfaz que habéis importado.
// Luego, debéis crear una función llamada "getData" que reciba un tipo genérico, un parámetro del tipo genérico y que saque por consola ese dato.
// Para terminar, asignad un objeto literal (sin clase) a la variable "user" (con los datos que queráis pero que no dé erroes de tipo) y luego realizad dos llamadas a "getData". La primera llamada debe recibir por parámetros el valor de la propiedad "name" del usuario y la segunda el valor de "phone".
// OPCIONAL: Dentro de "getData" añadid un condicional con una guarda para diferenciar cuando reciba un tipo "number" y sacar por consola mensajes distintos para las dos llamadas anteriormente mencionadas.
// Ánimo que ya lo tenéis!

import { UserData } from "./user-data";

//usarmos la interfaz que importamos
let user: UserData;
user = {
  name: "Fernando Vazquez Boza",
  age: 19,
  phone: 685830856
};


function getData<T>(data: T): void {
  if (itIsNumber(data)) {
    console.log("Mi numero de teléfono es: " + data);
  } else {
    console.log("Mi nombre es: " + data);
  }
}


getData<string>(user.name);
getData<number>(user.phone);


function itIsNumber<T>(data: T) {
  return typeof data === "number";
}