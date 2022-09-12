# Output questions

> Guess output for below❓

```javascript
var p1 = Promise.resolve(1);
var p2 = Promise.reject(2);
var p3 = Promise.resolve(3);

let pro = Promise.all([p1, p2, p3])
  .then((val) => console.log(val))
  .catch((err) => console.log('error', err));
```

> Guess output for below❓

```javascript
function test() {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}
test()
  .then((val) => {
    console.log('the first one', val);
    return 2;
  })
  .then((val) => {
    console.log('the second one', val);
    throw new Error('bad error');
  })
  .catch((e) => console.log(e))
  .then((val) => {
    console.log('the third one', val);
  })
  .then((val) => {
    console.log('the forth one', val);
  })
  .catch((e) => console.log('the last error'));
```

> Guess output for below❓

```javascript
function test() {
  return new Promise((resolve, reject) => {
    reject(1);
  });
}
test()
  .finally(() => console.log('in finally'))
  .then((val) => console.log(val))
  .finally(() => console.log('in finally 2'))
  .catch((e) => console.log(e));
```

> Guess output for below❓

```javascript
Promise.then(f1).catch(f2);
vs;
Promise.then(f1, f2);
```

> Guess output for below❓

```javascript
var p = new Promise((resolve, reject) => {
  reject(Error('The Fails!'));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));
```

> Guess output for below❓

```javascript
var p = new Promise((resolve, reject) => {
  return Promise.reject(Error('The Fails!'));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));
```

> Guess output for below❓

```javascript
new Promise((resolve, reject) => {
  resolve('Success!');
})
  .then(() => {
    throw Error('Oh noes!');
  })
  .catch((error) => {
    return 'actually, that worked';
  })
  .catch((error) => console.log(error.message));
```

> Guess output for below❓

```javascript
var p = new Promise(function () {
  return 'OK';
});
console.log(p);
var p2 = p.then(function (data) {
  return data;
});
console.log(p2);
var p3 = p2.then(function (data) {
  console.log(data + ' Bye');
});
```

> Guess output for below❓

```javascript
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('OK');
  }, 2000);
});

p.then().then(function (data) {
  console.log(data);
});
```

> Guess output for below❓

```javascript
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('OK');
  }, 2000);
}).then();

var p2 = p.then(function (data) {
  console.log(data + ' Good');
});
```

> Guess output for below❓

```javascript
var p = new Promise(function (resolve, reject) {
  throw 'Sorry';
}).then(
  (data) => console.log(data),
  (data) => console.log(data)
);
```

> Guess output for below❓

```javascript
var p = new Promise(function (resolve, reject) {
  resolve('OK');
});

var p2 = p.then(function (data) {
  return data;
});

var p3 = p.then(function (data) {
  return data;
});

console.log(p2 === p3);
```

> Guess output for below❓

```javascript
var p = new Promise(function (resolve, reject) {
  resolve('OK');
});

var p2 = p.then(function (data) {
  return new Promise(function (resolve, reject) {
    resolve(`data is ${data}`);
  });
});

p2.then(function (data) {
  console.log(data);
});
```

> Guess output for below❓

```javascript
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then((res) => console.log('first' + res));
  console.log('second');
}
async function secondFunction() {
  setTimeout(() => {
    console.log('timeout');
  });
  console.log(await myPromise());
  console.log('second');
}
firstFunction();
secondFunction();
```

> Guess output for below❓

```javascript

const promise = new Promise(res => res(2));
promise.then(v => {
console.log('first', v);
return v _ 2;
})
.then(v => {
console.log('second', v);
return v _ 2;
})
.then(v => {
console.log('last', v);
 return v*2;
})
.finally(v => {
console.log('finally', v);
return v * 2;
})

```

> Guess output for below❓

```javascript
function test() {
  console.log('first');
  setTimeout(() => {
    console.log('the longer one...');
  }, 10);
  console.log('last');
}
for (let index = 0; index < 3; index++) {
  test();
}

var promise = Promise.resolve('hi there');
console.log('first');
setTimeout(() => {
  console.log('some log');
}, 1000);
promise.then((val) => console.log(val));
console.log('one more');
```

> Guess output for below❓

```javascript
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success');
});
const promise2 = new Promise((resolve, reject) => {
  console.log(5);
  setTimeout(() => resolve('success'), 200);
});
promise1.then(() => {
  console.log(3);
});
promise2.then(() => {
  console.log(11);
});
setTimeout(() => console.log(4), 200);
console.log(100);
```
