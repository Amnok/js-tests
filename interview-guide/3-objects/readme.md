-> objects are reference types

-> Object.keys, Object.values, Object.entries, Object.assign

this
-> it is the execution context for a function call
-> it allows you to introduce reusability by allowing this value to be dynamic based on how a
function is invoked.

-> different ways to determine this keyword
-->implicit binding
when a object is invoked with the dot notation , the object to the left of that dot
is what the this keyword is referencing. Ex :- person.sayName()
--> explicit binding
call, apply, bind
--> new binding

--> defaut binding
fallback if none of above matched
if none of the three rules are satisfied , javascript will default to the global scope.
