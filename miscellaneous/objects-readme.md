-> delete object.key doesn't delete from prototype.
-> to check existence of a property in an object user ("key" in object).
-> numeric keys in an object are always sorted, to fix this add a + sign before each
to make them non-numeric.
-> new.target can be used inside functions to find out whether they are called by constructor function or normal one.
-> if we explicitky return any object from a constructor function then this is ignored
and that object gets returned (that object overrides this)
-> Symbols keys are skipped in for-in loop and Object.keys()
->Object.seal() -> sets configurable : false.
-> Object.freeze() => sets configurable : false and writable : false.
