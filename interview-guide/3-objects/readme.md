# Objects

> objects are reference types

> Object.keys, Object.values, Object.entries, Object.assign, Object.fromEntries

## this

> it is the execution context for a function call
> it allows you to introduce reusability by allowing this value to be dynamic based on how a
> function is invoked.

> different ways to determine this keyword
> ->implicit binding
> when a object is invoked with the dot notation , the object to the left of that dot
> is what the this keyword is referencing. Ex :- person.sayName()
> -> explicit binding
> call, apply, bind
> -> new binding

## defaut binding

> fallback if none of above matched
> if none of the three rules are satisfied , javascript will default to the global scope.

> json.stringify vs json.parse
> shallow copy vs deep copy

## constructor functions

> In case of constructor functions three things happen

- a new empty object is created.

- this points to newly created object.

- and finally this is retured .

## key notes

> delete object.key doesn't delete from prototype.

> to check existence of a property in an object user ("key" in object).

> numeric keys in an object are always sorted, to fix this add a + sign before each to make them non-numeric.

> new.target can be used inside functions to find out whether they are called by constructor function or normal one.

> if we explicitky return any object from a constructor function then this is ignored

> and that object gets returned (that object overrides this)

> Symbols keys are skipped in for-in loop and Object.keys()

> Object.seal() -> sets configurable : false.

> Object.freeze() => sets configurable : false and writable : false.
