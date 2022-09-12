# Output questions

> Guess output for below❓

```javascript
const a = {};
const b = { key: '1' };
const c = { key: 'c' };
a[b] = '123';
a[c] = '145';
console.log(a[b]);
```

> Guess output for below❓

```javascript
let p = {
  name: 'ak',
};

let arr = [p];
p = null;
console.log(arr);
```

> Guess output for below❓

```javascript
let p = {
  name: 'ak',
};
let a = {
  name: 'ak',
};

let arra = [p];
p.name = 'ts';
console.log(arr);

const obj1 = {
  name: 'ak',
  printName() {
    console.log('5', this.name);
  },
};

setTimeout(obj1.printName.bind(obj1), 1000);
```

> Guess output for below❓

```javascript
var bar = 1;
foo = {};
foo: {
  bar: 2;
  baz: ++bar;
}
console.log(foo);
```

> Guess output for below❓

```javascript
function greet(person) {
  if (person === { name: 'amy' }) {
    return 'hey amy';
  } else {
    return 'hey user';
  }
}
console.log(greet({ name: 'amy' }));
```

> Guess output for below❓

```javascript
const user = { name: 'amy' };
function greet(person) {
  if (person === user) {
    return 'hey amy';
  } else {
    return 'hey user';
  }
}
console.log(greet(user));
```

> Guess output for below❓

```javascript
let human = {
  name: 'manav',
  sayName() {
    console.log(this.name);
  },
};
let sayName = human.sayName;
sayName();
```

> Guess output for below❓

```javascript
let human = {
  name: 'manav',
  sayName() {
    console.log(this.name);
  },
};
human.sayName();
```

> Guess output for below❓

```javascript
let AB = {
  x: 10,
  printX: function () {
    console.log(x);
  },
};
AB.printX();
```

> factory function

```javascript
function circle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}
```

> constructor function

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const cir = new Circle();
```
