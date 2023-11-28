// Arrow function

function test(name) {
  return `hola ${name}`;
}

// console.log(test('pepe'));

const test2 = (name) => {
  return `hola ${name}`;
};

// console.log(test2('pepe'));

// Destructuración

// Obj

const animal = {
  type: 'cat',
  name: 'Ideafix',
};

// const name = animal.name;
// const type = animal.type;
const { name, type } = animal;

// if (name === 'Ideafix' && type === 'cat') {
//   console.log(`name = ${name}, type = ${type}`);
// }

// Arrays

// const pos0 = arrays[0];
//...

// Params
const arrays = [1, 2, 3, 4];
const [pos0, pos1, , pos3] = arrays;
// console.log(pos0, pos1, pos3);

// const fnArrays = (x) => {
//   const [, a] = x; // [1, 2, 3]
//   return a
// };

const fnArrays = ([, a]) => a;

// function fnArrays(loQueSea) {
//   console.log();
// }

console.log(fnArrays([1, 2, 3])); // array = [1, 2, 3]
console.log(fnArrays([1, 4, 5])); // array = [1, 4, 5]

const fnObj = (obj) => { // const obj = { animal: 'dog', age: 2, color: 'yellow' };
  // => {age:2, color: "yellow"};
  const { color, age } = obj;
  return {
    color: color, // color
    age: age, // age
  };
};

// Para devolver un obj con una arrow function tenemos que englobar el obj entre paréntesis
// const fnObj = ({ color, age }) => ({
//   color: color, // color
//   age: age, // age
// });

console.log(fnObj({ animal: 'dog', age: 2, color: 'yellow' }));

// Referencias

// Copias
