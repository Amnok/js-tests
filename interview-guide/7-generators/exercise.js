// problem 1
// yield numbers from 1 to 50

function* range() {
    for (let i = 1; i <= 50; i++) {
    yield i; 
    }
}

const itr = range();

for (const iterator of itr) {
    console.log(iterator);
}