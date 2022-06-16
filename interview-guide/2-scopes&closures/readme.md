scope
-> availability of variables in our code
-> scope dictates where the javascript engine should look for things

closures
->the combination of the function and its scope chain (lexical environment )
is what called a closure.
=> In JS when we return a func from another func, we are effectively returning a combination of the func along with the func's scope chain.
=> An inner func has access to variables in the outer function scope even after the outer
function has finished exection.
=> closure enable privacy (private variables) and utilities like memoization.
=> module pattern

function currying
-> in this we transform a function with multiple arguments into a sequence of
nesting functions that take one argument at a time.
-> currying vs partial application

sources :-

https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
