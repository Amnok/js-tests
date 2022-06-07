let ar = [1,2,3,4,5];

// let k = ar.map(v => v *2);

Array.prototype.myMap = function (cb) {
    let p = []
    this.forEach(v => {
        p.push(cb(v))
    });
    return p;
}

let p = ar.myMap(v => v *2);
console.log(p);