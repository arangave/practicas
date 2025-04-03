/*Primer código
Tenemos una función que saca el nombre completo del usuario 
con el nombre y apellido.

var usuario = {
    nombre: "Pedro",
    apellido: "Sánchez",
    edad: 45,
    profesion: "Barro man",
  };
  
  console.log(nombreUsuario(usuario));
  
  function nombreUsuario(user) {
    const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;
  
    return nombrCompleto;
  }*/

    const usuario = { //cambio var por const para que no pueda ser reasignado el nombre
        nombre: "Pedro",
        apellido: "Sánchez",
        edad: 45,
        profesion: "Barro man",
      };
      
      // nueva estructura de la función, la desetructuramos
      function nombreUsuario({ nombre, apellido }) {
        return `Me llamo ${nombre} ${apellido}`;//quitamos la cadena y pongo las comillas invertidas para leerlo mejor
      }
      
      
      console.log(nombreUsuario(usuario));



/*Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));*/

const user = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
  };

//separo cada parte en su propia funcion
  function getFullName({ name, last }) { 
    return `${name} ${last}`;
  }
  
  function calculateAnnualSalary(salary) {
    return salary * 12;
  }
  //hago una funcion para el nombre completo y el salario anual
  function userData(user) {
    const fullName = getFullName(user);
    const annualSalary = calculateAnnualSalary(user.salary);
  
    return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
  }



console.log(userData(user));




/*Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€
const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  if (user.nationality != "España") {
    if (user.age == "30") {
      return "Apto para la ayuda del gobierno";
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(user));*/

const user = {
    name: "Álvaro",
    last: "Morón",
    age: 30,
    nationality: "Morocco",
  };

//creamos la función para cuando no es español y cuando no tiene 30 años
function esExtranjero(user) {
  const esNoEspañol = user.nationality === "España";
  const tiene30Años = user.age === 30;

//función para que sea más sencilla porque previamente he definido la función para ver si es español y si tiene 30 años
  if (esNoEspañol && tiene30Años) {
    return "Apto para obtener la ayuda de gobierno"

  }
return "No es apto para obtener la ayuda del gobierno"
  
}

console.log(esExtranjero(user));
