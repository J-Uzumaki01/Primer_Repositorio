// Tema 4: Variables locales y globales

let global = "Soy una variable global";

function mostrarVariable() {
  let local = "Soy una variable local";
  console.log("Tema 4:");
  console.log(global);
  console.log(local);
}

mostrarVariable();

// console.log(local); // Esto daría error porque local solo existe dentro de la función
