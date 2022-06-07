const obj = {
    [Symbol.iterator]: function() {
        let step = 0;
        const iterator = {
            next: function() {
                step++;
               if(step===1) {
                   return { value: 'Hello', done: false};
               } else if (step ===2) {
                   return { value: 'world', done: false};
               }
               return {value: undefined, done: true}
            }
        }
        return iterator;
    }
}
const iterator = obj[Symbol.iterator](); // calling iterator dynamically

for (const iterator of obj) {
    console.log(iterator);
}