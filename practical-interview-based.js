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


let obj = {
    name: 'hi',
    getName: () => {
        console.log(this.name);
    }
}
let obj = {
    name: 'hi',
    getName: function() {
        console.log(this.name);
    }
}
``

async function test() {
 console.log('hi');
 Promise.resolve(v  => console.log(val))
 console.log('there');
}