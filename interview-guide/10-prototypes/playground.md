# prototype related examples

> inheritance example

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.eat = function () {
  return 'eating';
};

Person.prototype.sleep = function () {
  return 'sleeping';
};

function Programmer(name, language) {
  Person.call(this, name);
  this.language = language;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
Programmer.prototype.coding = function () {
  return 'coding';
};

// const person = new Person('ankit');
const programmer = new Programmer('ankit', 'JAVA');
console.log(programmer);
```

> Stopwatch example

```javascript
class Stopwatch {
  duration = 0;
  start = null;
  end = null;
  starttime() {
    this.start = new Date();
    console.log('started...');
  }
  stoptime() {
    this.end = new Date();
    console.log('stopped...');
  }
  reset() {
    this.start = null;
    this.end = null;
    console.log('reset...');
  }
  getDuration() {
    this.duration = this.end - this.start;
    console.log(`${new Date(this.duration).getSeconds()} seconds`);
  }
}

const s = new Stopwatch();
```

> Calculator example

```javascript
class Calculator {
  constructor() {
    this.value = 0;
  }
  add(x) {
    this.value += x;
    console.log('inside add', this.value);
    return this;
  }
  subtract(x) {
    this.value -= x;
    console.log('inside subtract', this.value);
    return this;
  }
  print(x) {
    console.log('value is ', this.value);
  }
}

class ScientificCalculator extends Calculator {
  square() {
    this.value *= this.value;
    console.log('inside square', this.value);
    return this;
  }
}

const s = new ScientificCalculator();
s.add(10).subtract(5).square().print();
```
