// problem 1
// print from 1 to 50 using iterable
let object = {
    [Symbol.iterator]: function() {
        let i = 0;
        let iterator = {
            next: function() {
                i++;
                if(i <=50) {
                    return {
                        value: i,
                        done: false
                    }
                } else {
                    return {value: null, done: true,}
                }
            }
        }
        return iterator;
    }
}

// for (const iterator of object) {
//     console.log(iterator);
// }

// problem 2 
// use start, end, interval

let object1 = {
    [Symbol.iterator]: function(start = 1, end = 50, interval = 2) {
        let i = start;
        let iterator = {
            next: function() {
                const res = {value: i, done: false};
                if(i <=end) {
                    i+=interval;
                    return res;
                } else {
                    return {value: null, done: true,}
                }
            }
        }
        return iterator;
    }
}

let itr = object1[Symbol.iterator](10, 20, 2);

let result = itr.next();

while(!result.done) {
    console.log(result.value);
    result = itr.next();
}