const person = {
    name: 'test',
    sayMyName() {
        const printName = function() {
            console.log(this.name);
        }
        printName();
    }
}
person.sayMyName();
//  the above example prints undefined as printName is called in global space, to fix 
// change printname to arrow func because arrow func takes this from its lexical scope.
