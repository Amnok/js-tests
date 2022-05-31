function Person(name) {
this.name = name;
}
Person.prototype.sayMyName = function() {
    console.log("sayMyName");
}
Person.prototype.eat = function() {
    console.log("eat");
}
let p = new Person('Ankit');
console.log(p);
console.log(p.__proto__.constructor === Person.prototype.constructor);// true
console.log(Object.getPrototypeOf(p).constructor === Person.prototype.constructor); //true
console.log(p instanceof Person); //true