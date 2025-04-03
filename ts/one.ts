
/*Ejercicio 1, typescript: types e intefaces
Crea un objeto bird que tenga los siguientes datos: name, canEat, canDrink, canSleep, canFly
Crea un objero dog que tenga los mismos datos que pájaro, pero que a demás tenga: race, age
Crea los tipos/interfaces necesarios para poder trabajar con estos datos en TypeScript.*/

// tipos del objeto bird

type BirdType = {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
    canFly: boolean;
};

//objeto
const bird: BirdType = {
    name: "Francisco",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: true,
};

console.log("Bird:", bird);
type DogBase = Omit<BirdType, "canFly">; //quito canFly porque los perros no pueden volar Y CREO EL PERRO SIN QUE PUEDA VOLAR

type DogType = DogBase & {
    canFly: boolean; 
    race: string;
    age: number;
};

const dog: DogType = {
    name: "Toby",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false, // Los perros no vuelan
    race: "Husky",
    age: 2,
};
console.log("Dog:", dog);



