const person = {
    name: 'test',
}

function sayMyName() {
    console.log('my name is ', this.name);
}
Function.prototype.bind2 = function(context) {
    let func = this;
    return function () {
        func.call(context);
    }
}

const namedMethod = sayMyName.bind2(person);
namedMethod();