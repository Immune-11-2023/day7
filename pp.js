// Ejercicio 1

// Parte 1: Crear una función que devuelva un array de longitud nueve donde cada valor sea un número aleatoria entre el 1 al 100

const getRandomNumber = () => Math.floor(Math.random() * 100 - 1);

const getRandomArray = () => {
  const newArray = [];
  const MAX_LENGTH = 9;
  do {
    const randomNumber = getRandomNumber();
    newArray.push(randomNumber);
  } while (newArray.length < MAX_LENGTH);
  return newArray;
};

const randomArray = getRandomArray();
console.log('Ejercicio 1, parte 1 --> ', randomArray);
// Parte 2: Crear una función que ejecute la función anteriormente creada y que devulva del array solo las posiciones impares (1, 3, 5, 7, 9)

const getOddPositions = (array) => {
  const oddPositions = [];
  for (let index = 0; index < array.length; index++) {
    if (index % 2 !== 0) {
      oddPositions.push(array[index]);
    }
  }
  return oddPositions;
};

const oddPositions = getOddPositions(randomArray);
console.log('Ejercicio 1, parte 2 --> ', oddPositions);

// Ejercicio 2

// Parte 1: Crear un array de todos los días de la semana

const x = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
];

console.log('Ejercicio 2, parte 1 --> ', x);

// Parte 2: Imprimir por pantalla todos los días hasta el "Viernes".

let lessThanViernes = true;

for (let i = 0; i < x.length; i++) {
  const day = x[i];
  if (lessThanViernes) {
    console.log('Ejercicio 2, parte 2 --> ', day);
  }
  if (day === 'Viernes') {
    lessThanViernes = false;
  }
}

// Ejercicio 3

// Crea una arrow function que devuelva el factorial de un número.

const getFactorial = (number) => {
  let result = 1;
  for (let x = number; x > 1; x--) {
    result *= x;
  }
  return result;
};

console.log('Ejercicio 3 --> número 5', getFactorial(5));

// Ejercicio 4

// Crea una arrow fuction que devuelva si un número es primo (tendrá que devolver true o false)

/**
 *
 *
 */
const getIsPrime = (number) => {
  let isPrime = true;
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  }

  for (let div = 2; div < Math.floor(number / 2); div++) {
    if (number % div === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};



console.log('Ejercicio 4 --> número 27', getIsPrime(22));
console.log('Ejercicio 4 --> número 7', getIsPrime(7));
for (let i = 0; i < 100; i++) {
  const randomNumber = getRandomNumber();
  console.log(
    `Ejercicio 4 --> número ${randomNumber}`,
    getIsPrime(randomNumber)
  );
}

// Ejercicio 5

// Crea una arrow fuction que destructurando el parámetro del objeto escrito a continuación devuelva la frase:
// "Hola, mi nombre es NOMBRE y estoy aprendiendo LENGUAJE. Además tengo tres gatos que se llamas: GATO_1, GATO_2, ..."

const say = ({ nombre, lenguaje, gatos }) => {
  const [cat1, cat2, cat3] = gatos;

  return `Hola, mi nombre es ${nombre} y estoy aprendiendo ${lenguaje}. Además tengo tres gatos que se llaman: ${cat1}, ${cat2} y ${cat3}.`;
};

const persona = {
  nombre: 'Pepe',
  lenguaje: 'javascript',
  gatos: ['Ideafix', 'Garfield', 'Blanquita'],
};

console.log('Ejercicio 5 --> ', say(persona));

// Ejercicio 6

// Crear una función que recibe como parámetro un array de números y nos devuelva el mayor y el menor: --> Tiene que devolver un obj {min: , max: }

const getMaxAndMin = (array) => {
  let maxNumber = array[0];
  let minNumber = array[0];

  for (let index = 1; index < array.length; index++) {
    const number = array[index];
    if (number < minNumber) {
      minNumber = number;
    }
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return {
    maxNumber,
    minNumber,
  };
};

const arrayMaxAndMin = [1, 3, 19, 20, -4];

console.log('Ejercicio 6 --> ', getMaxAndMin(arrayMaxAndMin));

