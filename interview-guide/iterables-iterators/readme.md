Iterables & iterators

->they were introduced to process a sequence of data more efficiently.
->iteration in JS can be done through for loop, while loop, do while loop.
-> these were introduced to have a uniform way of accessing the data.

-> An object that implements the iterable protocol is called an iterable.
-> An object that implements the iterator protocol is called an iterator.

->An iterable is a data structure that wants to make its elements accessible to the public.
-> An iterator is an object that knows how to access items from a collection one at a time while keeping track of its current position within that sequence.

-> Strings, arrays, maps & sets are built in iterable.
-> for..of loop used as iterable by default.

typeof str[Symbol.iterator] -> returns function as string is an built in iterable
typeof obj[Symbol.iterator] -> return undefined as obejct is not an built in iterable

-> An iterable is any object type that implements a method at the key [Symbol.iterator]
that returns an object that conforms to the iterator protocol.

-> An iterator is an object that implements a next method that will return an object
with two keys - value and done and is capable of giving us access to elements in a collection one at a time.
