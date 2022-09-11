# Playground

> write a method which prints from 1 to 5 every second

```javascript
function withprint() {
  console.log(i);
}
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
```

> Guess output for below❓

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
```

> Guess output for below❓

```javascript
function withprint() {
  console.log(i);
}
for (var i = 0; i < 5; i++) {
  setTimeout(withprint, 100);
}
```

> Guess output for below❓

```javascript
let obj = {
name: 'hi',
getName: () => {
console.log(this.name);
}

obj.getName();
```

> Guess output for below❓

```javascript
}
let obj = {
name: 'hi',
getName: function() {
console.log(this.name);
}
}
obj.getName()
```

> Guess output for below❓

```javascript
async function test() {
  console.log('hi');
  Promise.resolve((v) => console.log(val));
  setTimeout(() => {
    console.log('me too');
  }, 0);
  console.log('there');
}

test();
```

> Guess output for below❓

```javascript
console.log('the one');
setTimeout(() => {
  console.log(' the other one');
}, 0);
console.log(' the big one');
```

> Guess output for below❓

```javascript
function test() {
  let i = 9;
  setTimeout(() => {
    i = i + 1;
  }, 0);
  while (1 != 10) {
    continue;
  }
  return i;
}

console.log(test());
```

> Guess output for below❓

```javascript
function test() {
  console.log(name);
  console.log(age);
  var name = 'ak';
  let age = 27;
}
test();
```

## Coding problem

> write a methods printNumbers (from, to) that outputs a number every second between from & to. (Don't use setInterval)

> write a caching function (memoize) which either calculates or returns from cache
