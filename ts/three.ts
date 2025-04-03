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

// Objeto bird
const bird: BirdType = {
    name: "Francisco",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: true,
};

console.log("Bird:", bird);

type DogBase = Omit<BirdType, "canFly">;

type DogRace = "Husky" | "Labrador" | "Chucho"; //añado para que solo puedan ser los tres tipos de raza

type DogType = DogBase & {
    canFly: boolean;
    race: DogRace;
    age: number;
};

// Objeto dog
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


type CatType = {
    name: string;
    color: string;
    canSleep: boolean;
    canFly: boolean; //Los gatos tampoco vuelan
};


const cat: CatType = {
    name: "Firulais",
    color: "Black",
    canSleep: true,
    canFly: false,
};

console.log("Cat:", cat);


type SnakeType = {
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
    canFly: boolean; //Las serpientes tampoco vuelan
};

const snake: SnakeType = {
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
};

console.log("Snake:", snake);