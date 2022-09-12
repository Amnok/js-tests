# Output questions

> basic generator example

```javascript
function* generatorFunction() {
  yield 'hello';
  yield 'world';
}

const genratorObject = generatorFunction();

for (const iterator of genratorObject) {
  console.log(iterator);
}
```

> yield numbers from 1 to 50

```javascript
function* range() {
  for (let i = 1; i <= 50; i++) {
    yield i;
  }
}

const itr = range();

for (const iterator of itr) {
  console.log(iterator);
}
```
