var a = 1;
function b() {
    var a = 5;
    function a() {}
    console.log("inside",a);
}
b();
console.log("outside",a);

// https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript#order-of-precedence