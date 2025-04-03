/*Ejercicio 3, Creando más tipos
Partiendo del ejercicio anterior, crea un nuevo objeto llamado cat que solamente tenga name, color, canSleep
Partiendo del ejercicio anterior, crea un nuevo objeto llamado Snake que solamente tenga canEat, canDrink, canSleep*/

type BirdType = {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
    canFly: boolean;
};


const bird: BirdType = {
    name: "Francisco",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: true,
};

console.log("Bird:", bird);


type DogType = Omit<BirdType, "canFly"> & {
    canFly: boolean;
    race: "Husky" | "Labrador" | "Chucho";
    age: number;
};

const dog: DogType = {
    name: "Toby",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Husky",
    age: 2,
};

console.log("Dog:", dog);


type CatType = Pick<BirdType, "name" | "canSleep"> & {
    color: string;
    canFly: boolean;
};


const cat: CatType = {
    name: "Firulai",
    color: "Black",
    canSleep: true,
    canFly: false,
};

console.log("Cat:", cat);

type SnakeType = Pick<BirdType, "canEat" | "canDrink" | "canSleep"> & {
    canFly: boolean;
};


const snake: SnakeType = {
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
};

console.log("Snake:", snake);
