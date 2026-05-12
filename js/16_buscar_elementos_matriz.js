// Tema 16: Buscar elementos en una matriz

let inventario = [
  ["Mouse", 25, 10],
  ["Teclado", 50, 5],
  ["Monitor", 450, 3],
  ["Laptop", 2500, 2]
];

let productoBuscado = "Monitor";
let encontrado = false;

console.log("Tema 16:");

for (let i = 0; i < inventario.length; i++) {
  if (inventario[i][0] === productoBuscado) {
    console.log("Producto encontrado:");
    console.log("Nombre:", inventario[i][0]);
    console.log("Precio:", inventario[i][1]);
    console.log("Stock:", inventario[i][2]);
    encontrado = true;
    break;
  }
}

if (!encontrado) {
  console.log("Producto no encontrado");
}
