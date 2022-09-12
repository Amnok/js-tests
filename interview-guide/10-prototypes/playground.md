# prototype example

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
