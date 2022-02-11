function Person(name) {
    let person = {};
    person.name = 'test';
    person.getName = function() {
        console.log(this.name);
    }
}
const a = Person('a');
const b = Person('b');
// both a & b receive their own copy of name and getName , which is not good

//  the problem with above approach is that we are creating getName function for
//  each object and allocating to methods everytime

