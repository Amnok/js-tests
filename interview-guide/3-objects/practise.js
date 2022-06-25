// output for below

// const obj = {
//     a: 'a',
//     b: 'b',
//     a: 'c'
// }

// output for below

// const a = {}
// const b = { key :'1'};
// const c = {key : 'c'};
// a[b] = '123';
// a[c] = '145';
// console.log(a[b]);


// output for below

// let p = {
//     name: 'ak'
// }

// let arr = [p];
// p= null;
// console.log(arr);


// output for below 

// let a = {
//     name: 'ak'
// }

// let arra = [p];
// p.name = 'ts';
// console.log(arr);


// const obj1 = {
//     name: 'ak',
//     printName() {
//         console.log('5', this.name);
//     }
// }

// setTimeout(obj1.printName.bind(obj1), 1000);

// output for below

var bar =1;
foo = {};
foo: {
    bar: 2;
    baz: ++bar;
}
console.log(foo);