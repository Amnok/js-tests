const logger = (date) => (importance) => (desc) => console.log(`${date} - ${importance} - ${desc}`);

const now = logger(new Date());
now('HIGH')('best');
now('HIGH')('best2');


// write a function that takes any function and returns a curried verison of the function (Problem 1)

function sum(a, b, c) {
  return a + b + c;
}

function genericCurry(func) {
  return function currify(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...newargs) {
        return currify.apply(this, args.concat(newargs));
      };
    }
  };
}
const curriedSum = genericCurry(sum);
console.log(curriedSum(2)(3)(5));
console.log(curriedSum(2, 3, 5));

//  shorter solution for above

const curry =(fn) =>{
  return curried = (...args) => {
      if (fn.length !== args.length){
          return curried.bind(null, ...args)
      }
  return fn(...args);
  };
}
const totalNum=(x,y,z) => {
  return x+y+z 
} 
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30));
console.log(curriedTotal(10, 20, 30));





// infinite currying (Problem 2)

function sum(a) {
    return function(b) {
        if(b) return sum(a+b);
        return a;
    }
}

console.log(sum(1)(2)(3)());
