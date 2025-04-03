/*Ejercicio 2, typescript: types e interfaces
Partiendo del ejercicio 1, haz que la raza (race), solo pueda ser Husky, Labrador, Chucho*/



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