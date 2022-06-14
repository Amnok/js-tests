// factory function 
function circle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}


// constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const cir = new Circle();