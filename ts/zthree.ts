//con UNIONS

type AnimalBase = {
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
};


type BirdType = AnimalBase & {
    name: string;
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


type DogRace = "Husky" | "Labrador" | "Chucho";


type DogType = AnimalBase & {
    name: string;
    canFly: false;
    race: DogRace;
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


type CatType = {
    name: string;
    color: string;
    canSleep: boolean;
};


const cat: CatType = {
    name: "Firulai",
    color: "Black",
    canSleep: true,
};

console.log("Cat:", cat);


type SnakeType = AnimalBase;


const snake: SnakeType = {
    canEat: true,
    canDrink: true,
    canSleep: true,
};

console.log("Snake:", snake);




