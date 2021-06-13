-> arr.splice() is used to delete an element from an array.
-> we can also insert element in between array using splice
For example :-

let arr = ['a', 'am', 'going']
arr.splice(2, 0, 'hi', 'there');
arr// ['a', 'am','hi','there','going']

-> arr.slice is used to copy and array

-> We can't use object as a key on Objects, but we can in Map.

-> Map can be iterated with for of loop.

-> Map preserves the insertion order unlike a regular object.

-> we can also create a MAP out of a normal object. example below:-

let obj = {
name: 'ak',
age: 27
}
let map = new Map(Object.entries());

-> Object.fromEntries() creates an objec out of a given array. example below :-

let pr = Object.fromEntries([['1': 'banaana'], ['2'], 'apple'])
{1: 'banana', 2: 'aple'} // pr

-> Weakmaps keys must be objects, Now the main usage is supose if wen have an object as the
key and there are no references to it, so it will be removed in the case of weakMap but not in case of Map.

-> One of the application of WeakMap is in Caching , suppose we acces an objecg multiple
number of times and later we delet that objec. When we calculate the size in case of Map
then its still there but not in the case of WeakMap.

-> WeakSet is also same, only difference we can only store objects there.
