let obj = {
    val: 10,
    printVal() {
        console.log('val is', this.val);
    }
}

setTimeout(() => {
    obj.printVal()
}, 1000);