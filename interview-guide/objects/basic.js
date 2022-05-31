// difference b/w shallow vs deep copy
// how is this calculated in JS
// how may types of bindings are there in JS
// what are constructor functions ? with example

// output for below :-

// let user = {
//     name: 'test',
//     getName = () => {
// console.log(this.name);
//     }
// }
// console.log(user.getName());

//  output for below

// function sayHi() {
//     console.log(this);
// }

// output for below :

// let user = {
//     firstName: 'test',
//     sayHi() {
//         let ar = () => console.log(this.firstName);
//         ar();
//     }
// }
// user.sayHi();

// output for below 

// function makeUser() {
//     return {
//         name: 'test',
//         ref: this
//     }
// }
// let user = makeUser();

