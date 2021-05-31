function getMemoize() {
  const map = new Map();
  console.log('inside mem', map.keys());
  map.keys();
  return function (x) {
    if (map.has(x)) {
      console.log('getting from cache', map.get(x));
      return map.get(x);
    }
    map.set(x, x * x);
  };
}

const memoize = getMemoize();
memoize(2);
memoize(100);
memoize(2);
