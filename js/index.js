// alert('Hello JavaScript!');

let name;// = 'John';
alert(name);
name = 'James';
alert(name);

const greetings = 'Hello ' + name;
alert(greetings);

const userAge = Number(prompt('Enter your age'));
alert('Your age is ' + userAge);

// Завдання:
// Зробити константу nextAge, де буде вік,
// збільшений на 1, вивести її на екран
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);

// String
// Number
// Boolean
// undefined
// null
// Object
// ES2015:
// Symbol

if (userAge >= 18) { // > < >= <= !== === && ||
    alert('You are adult');
} else {
    alert('You are not adult');
}
