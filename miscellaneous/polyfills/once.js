let once = function(fn) {
    let res = null;
    return function() {
        if(fn) {
            res = fn.call(this, arguments);
            fn = null;
        } else {
            console.log('return from memo');
        }
        return res;
    }

}

function test() {
    console.log('i got called');
}

let ts = once(test);
ts()
ts()