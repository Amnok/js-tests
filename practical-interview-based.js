// write a method which prints from 1 to 5 every second

function withprint() {
    console.log(i);
}
for (var i = 0; i <5; i++) {
    setTimeout(()=> console.log(i), 100);
}


// for (let i = 0; i <5; i++) {
//     setTimeout(()=> console.log(i), 100);
// }


// for (var i = 0; i <5; i++) {
//     setTimeout(withprint, 100);
// }


// let obj = {
//     name: 'hi',
//     getName: () => {
//         console.log(this.name);
//     }
// }
// let obj = {
//     name: 'hi',
//     getName: function() {
//         console.log(this.name);
//     }
// }

async function test() {
 console.log('hi');
 Promise.resolve(v  => console.log(val))
 setTimeout(() => {
     console.log('me too');
 }, 0);
 console.log('there');
}

console.log('the one');
setTimeout(() => {
    console.log(' the other one');
}, 0);
console.log(' the big one');
// ------> guess the output for below

// function test() {
//     let i = 9;
//     setTimeout(() => {
//         i = i+1;
//     }, 0);
//     while(1!= 10) {
//         continue;
//     }
//     return i;
// }
// console.log(test());

// --------> guess the output for below 

// function test() {
//     console.log(name);
//     console.log(age);
//     var name = 'ak';
//     let age = 27;
// }
// test();

// misscelanout sum problem
// write a methods printNumbers (from, to) that outputs a number every second between from & to. (Don't use setInterval)
// write a caching function (memoize) which either calculates or returns from cache
// custom bind
// for (var i = 0; i <5; i++) {
//     setTimeout(()=> console.log(i), 100);
// }
// promises based outputs