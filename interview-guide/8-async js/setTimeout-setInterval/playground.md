# output questions

> Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

```javascript
// with setTimeout

function printNumbers(from, to) {
  let delay = 1000;
  let t1;
  let t2;
  t1 = setTimeout(function timer() {
    if (from > to) {
      clearTimeout(t1);
      clearTimeout(t2);
      return;
    }
    console.log(from);
    from++;
    t2 = setTimeout(timer, delay);
  }, delay);
}

printNumbers(1, 10);

// with setInterval

function printNumbers(from, to) {
  let delay = 1000;
  let t1;

  t1 = setInterval(() => {
    if (from > to) {
      clearInterval(t1);
      return;
    }
    console.log(from);
    from++;
  }, delay);
}

printNumbers(1, 10);
```

> Guess output for below❓

```javascript
let obj = {
  name: 'ankit',
  printName: function () {
    console.log(this.name);
  },
};

setTimeout(obj.printName, 0);
```
