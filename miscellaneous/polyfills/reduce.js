let ar = [1,2,3,4,5];

// let k = ar.reduce((acc, ele)=> acc+ele, 0);
// console.log(k);

Array.prototype.myReduce = function (cb, initValue) {
    let accumulator = initValue;
    
    for (let i = 0; i < this.length; i++) {
        accumulator =   accumulator? cb(accumulator, this[i]) : this[i];
    }
    return accumulator;
}

let k = ar.myReduce((acc, ele)=> acc+ele);
console.log(k);