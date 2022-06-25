function test() {
    let i = 9;
    setTimeout(() => {
        i = i+1;
    }, 0);
    while(i!=10) {
        continue;
    }
    return i;
}
let p = test();
console.log(p);