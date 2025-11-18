// Data Types

let x=10;
let y=x;
x=20;
console.log(y); //10
console.log(x); //20

//reference to same object in memory
let o={value:10};
let p=o;
o.value=20;
console.log(p.value); //20
console.log(o.value); //20

//--------------------------------

// 2. Reference Types : values are copied by reference
// a. Object - a collection of properties
let person={
    name: 'pravallika',
    age: 20
};
typeof person; // object
//Dot Notation
person.name = 'John';
//Bracket Notation
let selection = 'name';
person[selection] = 'Jane';
console.log(person.name);

// b. Array - a collection of items of different data types 
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors.push('yellow')); // 2
selectedColors.pop(); // removes the last item
selectedColors[2] = 'green';


// c. Function - a collection of statements that perform a task or calculate a value
function greet(name) {  //declaration
    console.log('Hello ' + name);
}
greet('prava'); //call

function square(number) {
    return number * number;
}
console.log(square(2));

// i. Factory Function - a function that returns an object
function createCircle(radius) { //camel notation
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}
const myCircle = createCircle(1);
console.log(myCircle);

// ii. Constructor Function - a function that returns an object
function Circle(radius) { //Pascal notation
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(1);
console.log(circle);


//--------------------------------

// Getters and Setters - a way to get and set the value of an object
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
console.log(person2.fullName); //getter
person2.fullName = 'Jane Doe';
console.log(person2.fullName); //setter


