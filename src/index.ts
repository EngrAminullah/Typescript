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


// ///---------------explicit Types--------------------------

// let character: string;
// let age: number;
// let is_published: boolean;

// // age='luigi';
// age = 30;

// // is_published=25;
// is_published = true;

// //-----arrays--------
// let ninjas: string[] = [];
// ninjas.push('shaun')

// // ---------------Union types---------------
// let mixed: (string | number | boolean)[] = [];
// mixed.push('hello');
// mixed.push(12);
// mixed.push(false)
// console.log(mixed)

// //-------------objects---------------------
// let ninjaOne: object;
// ninjaOne = { name: 'youshi', age: 30 };

// let nijaTwo: {
//     name: string,
//     age: number,
//     beltcolor: string
// }
// nijaTwo = { name: 'mario', age: 20, beltcolor: 'black' }
// console.log(nijaTwo)

// ///-----------Dynamic (any) types------------------


// let age: any = 25;

// age = true;
// console.log(age)
// age = 'hello'
// console.log(age)
// age = 25;
// console.log(age)
// age = {
//     name: 'amin'
// }
// console.log(age)

// let mixed: any[] = [];
// mixed.push(5)
// mixed.push('amin')
// mixed.push(true)
// console.log(mixed)



// let ninja: { name: any, age: any }

// ninja = { name: 'youshi', age: 25 };
// console.log(ninja)
// ninja = { name: 25, age: 'youshi' };
// console.log(ninja)
// ninja = { name: 25, age: 25 };
// console.log(ninja)
// ninja = { name: 'youshi', age: true };
// console.log(ninja)

// console.log('test')

// let a = 123


// let greet: Function;
// greet = () => {
//     console.log('hello a,amir')
// }
// const add = (a: number, b: number, c: number | string = 10) => {
//     console.log(a + b)
//     console.log(c)
// }
// add(5, 10, '10')

// const minus = (a: number, b: number) => {
//     return a - b
// }

// let result = minus(10, 7)

// ///-----------------type aliases---------------
// type stringOrNum = string | number;
// type objWithNAME = { name: string, uid: stringOrNum }
// const logDetails = (uid: stringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }

// const greet = (user: objWithNAME) => {
//     console.log(`${user.name} says hello`)
// }

///////////------------- function signature--------------
//-----exmpl 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

//--------------exmp2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

//----------exmpl 3--------

let logDetails: (obj: { name: string, age: number }) => void;
type person = { name: string, age: number }

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

