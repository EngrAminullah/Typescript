// // console.log('Hello its ma birthday')
// let age: number = 20;
// if (age < 50)
//     age += 10

// let sales: number = 123_456_789;
// let course: string = 'typescript';
// let is_published = true;
// let level;
// level = 1;
// level = 'a';

// function render(document) {
//     console.log(document)
// }

// let names = ['daiza', 'maiza', 'faiza'];
// names.push('baiza')
// // names.push(3)
// // names[0]=3

// let numbers = [10, 20, 30, 40];
// numbers.push(25)
// // numbers.push('shaun');
// // numbers[1]='shaun'

// let mixed = ['ken', 4, 'chun-li', 8, 9, true]
// mixed.push('ryu')
// mixed.push(10)
// mixed[0] = 3;


// //---------------objects--------------

// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }
// console.log(ninja)
// ninja.age = 40;
// ninja.name = 'ryu';


///---------------explicit Types--------------------------

let character: string;
let age: number;
let is_published: boolean;

// age='luigi';
age = 30;

// is_published=25;
is_published = true;

//-----arrays--------
let ninjas: string[] = [];
ninjas.push('shaun')

// ---------------Union types---------------
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(12);
mixed.push(false)

//-------------objects---------------------
let ninjaOne: object;
ninjaOne = { name: 'youshi', age: 30 };

let nijaTwo: {
    name: string,
    age: number,
    beltcolor: string
}
nijaTwo = { name: 'mario', age: 20, beltcolor: 'black' }
