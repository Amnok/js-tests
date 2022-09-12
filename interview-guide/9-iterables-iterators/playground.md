# iterables example

```javascript
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'world', done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};
const iterator = obj[Symbol.iterator](); // calling iterator dynamically

for (const iterator of obj) {
  console.log(iterator);
}
```

> print from 1 to 50 using iterable

```javascript
let object = {
  [Symbol.iterator]: function () {
    let i = 0;
    let iterator = {
      next: function () {
        i++;
        if (i <= 50) {
          return {
            value: i,
            done: false,
          };
        } else {
          return { value: null, done: true };
        }
      },
    };
    return iterator;
  },
};

for (const iterator of object) {
  console.log(iterator);
}
```

> print from 1 to 50 using iterable but use start, end, interval as input

```javascript
let object1 = {
  [Symbol.iterator]: function (start = 1, end = 50, interval = 2) {
    let i = start;
    let iterator = {
      next: function () {
        const res = { value: i, done: false };
        if (i <= end) {
          i += interval;
          return res;
        } else {
          return { value: null, done: true };
        }
      },
    };
    return iterator;
  },
};

let itr = object1[Symbol.iterator](10, 20, 2);

let result = itr.next();

while (!result.done) {
  console.log(result.value);
  result = itr.next();
}
```
