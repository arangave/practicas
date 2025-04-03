
const myMap = new Map();


const user = {
  name: "Pedro",
  age: 35,
  status: "active",
};

const user2 = {
  name: "Juan",
  age: 40,
  status: "inactive",
};

function findAnimal(animal) {
  return `Buscando el animal: ${animal}`;
}

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", "azul");


console.log("Contenido del mapa:");
console.log(myMap);

console.log("Valor de la clave 'moroso':", myMap.get("moroso"));

console.log("¿Existe la clave 'hola'?:", myMap.has("hola"));

console.log("Tamaño del mapa:", myMap.size);


console.log("Recorro el mapa:");
myMap.forEach((value, key) => {
  console.log(`Clave: ${key}, Valor:`, value);
});

myMap.delete("agarrado");
console.log("Mapa después de eliminar 'agarrado':");
console.log(myMap);

myMap.clear();
console.log("Mapa después de limpiar:");
console.log(myMap);
