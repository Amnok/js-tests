// function b() {
//     console.log(a);
// }
// b();
// var a = 10;

// abstraction example
function Drive() {

    function move(val) {
console.log('moving to ', val);
    }
    return {
        moveLeft: function() {
            move('left')
        },
        moveRight: function() {
            move('right')
        },
    }
}
let d   = Drive();
d.moveLeft();
console.log(d);