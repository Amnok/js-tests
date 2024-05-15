> use strict
>
> > runs js in strict mode, developers console doesn't use use strict by default.

> Primitives
>
> > Number, String, boolean, Symbol, undefined, null

> Reference types
>
> > Object, Function, Array

> Symbols
>
> > “Hidden” object properties.

> If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

> javascript is synchronous , single threaded language.

> Execution is where the javascript code is executed.
> it has two parts memory(variable environment) and code (thread of execution).