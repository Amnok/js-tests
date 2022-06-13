console.log('first');
const promise = fetch('www.github.com/1');
promise.then(val => {
    console.log(val);
});
console.log('last');