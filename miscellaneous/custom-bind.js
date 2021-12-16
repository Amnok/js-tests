Function.prototype.myBind = function (context) {
    let self = this;
    return function(args) {
         self.call(context);
    }
}

const user = {
    name: 'aka',
    getName = () => {

}
}

const secondMethod = user.getName.myBind(user);
secondMethod(1);

