// function addMe() {
//     if(true) {
//         var x = 2;
//         //  change the above line with let or const & see the difference
//         console.log(x);
//     }
//     console.log(x);
// }
// addMe();

// function hoist() {
//     console.log(name);
//     var name = 'test';
// }
// hoist();

// var a = 20;
// function test() {
//     a = 10;
//     console.log(a);
// }
// test();
// console.log(a);

// // shadowing

// function test() {
//     var a = 'hi';

//     if(true) {
//         let a = 'there';
//         console.log(a);
//     }
// }


// output for below

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    });
    
}