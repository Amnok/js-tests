// function Person(name) {
//   let person = {};
//   person.name = 'test';
//   person.getName = function () {
//     console.log(this.name);
//   };
// }
// const a = Person('a');
// const b = Person('b');
// both a & b receive their own copy of name and getName , which is not good

//  the problem with above approach is that we are creating getName function for
//  each object and allocating to methods everytime

// Inheritance example

function Person(name) {
  this.name = name;
}
Person.prototype.sayMyName = function () {
  console.log('name is ', this.name);
};

Person.prototype.eat = function (food) {
  console.log('eating ', food);
};

Person.prototype.sleep = function () {
  console.log('sleeping');
};

function Programmer(name, language) {
  Person.call(this, name);
  this.language = language;
}
Programmer.prototype = Object.create(Person.prototype);
// if method not found on Programmer then delegate it to Person
Programmer.prototype.code = function() {
    console.log('I am coding in', this.language);
}
Programmer.prototype.constructor = Programmer;

const test = new Programmer('test', 'JS');
test.code();
test.sayMyName();


