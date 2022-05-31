class Calculator {
    constructor() {
        this.value = 0;
    }
    add(x) {
        this.value+=x;
        console.log("inside add", this.value);
        return this;
    }
    subtract(x) {
        this.value-=x;
        console.log("inside subtract", this.value);
        return this;
    }
    print(x) {
        console.log("value is ", this.value);
    }
}

class ScientificCalculator extends Calculator {

    square() {
        this.value *=this.value;
        console.log("inside square", this.value);
        return this;
    }
}

const s = new ScientificCalculator();
s.add(10).subtract(5).square().print();
// s.add(10).sub(5).square().print();