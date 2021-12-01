
// multiple promises test

// var p1 = Promise.resolve(1);
// var p2 = Promise.reject(2);
// var p3 = Promise.resolve(3);

// let pro = Promise.all([p1, p2, p3])
// .then(val => console.log(val))
// .catch(err => console.log('error', err));


function test () {
    return new Promise((resolve, reject) => {
        reject(1);
    })
}
test().then(val => {
    console.log('the first one', val);
    return 2;
}).then(val => {
    console.log('the second one', val);
    throw new Error('bad error');
}).catch(e => console.log('the error'))
.then(val => {
    console.log('the third one', val);
}).then(val => {
    console.log('the forth one', val);
}).catch(e => console.log('the last error'));