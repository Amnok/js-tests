let v = [
    [0,1],
    [2,3]
].reduce(
    (acc, cur) => {
        console.log(acc, cur);
        return acc.concat(cur)
    },
    [1,2]
)
console.log(v);