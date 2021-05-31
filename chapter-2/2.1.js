function first(x) {
    return function(y) {
        return x+y;
    }
}
console.log(first(2)(3));