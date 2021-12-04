
const user = {
    name: 'ankit',
    print(a,b) {
        console.log(this.name, a, b);
    }
}

user.print('hi', 'there');// normal method
user.print.call({name:'from call'}, 'hi', 'there');  // call
user.print.apply({name:'from apply'}, ['hi', 'there']);// apply
const bindedMethod = user.print.bind({name: 'from bind'}); // bind
bindedMethod('hi', 'there');