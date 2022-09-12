# Output questions

> Guess output for below❓

```javascript
console.log('first');
const promise = fetch('www.github.com/1');
promise.then((val) => {
  console.log(val);
});
console.log('last');

fetch('https://pokeapi.co/api/v2/pokemon/?offset=151&limit=151')
  .then((val) => val.json())
  .then((res) => console.log('res is', res));

console.log('last');
```
