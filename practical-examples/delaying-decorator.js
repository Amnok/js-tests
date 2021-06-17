
function f(x) {
    console.log(x);
}

function delay (f, timeout) {

    return function(x) {
        setTimeout(() => f.apply(this, [x]), timeout);
    }
}

let f100 = delay(f, 5000);
// let f1500 = delay(f, 1500);

f100('test');
// f1500('test');
