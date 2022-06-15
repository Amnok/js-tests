const arr = [1,2,3,4,5,6];

// const res = arr.filter(v => v > 4);

// console.log(res);

Array.prototype.myFilter = function(cb) {
    const res = [];
    this.forEach(v => {
        if(cb(v)) {
            res.push(v);
        }
    });
    return res;

}

const res = arr.myFilter(v => v > 4);

console.log(res);