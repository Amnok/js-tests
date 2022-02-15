// write a function that takes any function and returns a curried verison of the function

// function sum(a,b,c) {
//     return a+b+c;
// }

// function genericCurry(func){
// console.log(func.length);
// // const length = func.length;
// let length = 0;
// if(!func.length) return;
//     return function inner(a) {
//         if(a) length++;
//         if(length > func.length) return console.log('more then required');
//         if(length === func.length) {
//             // return sum here
//         } else {
//             return function(b) {
//                 return a+b;
//             }
//         }
//     }
// }
//  genericCurry(sum);


// Write a generic currying function


function sum() {
    let calc = 0;
return function inner(a) {
    if(a) return  calc + inner(a);
    else return calc;
}
}

const curriedSum = sum();

curriedSum(1)(2)(3)()