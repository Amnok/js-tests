function* generatorFunction() {
    yield 'hello';
    yield 'world'
}

const genratorObject = generatorFunction();

for (const iterator of genratorObject) {
 console.log(iterator);   
}