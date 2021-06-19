let v = {
  name: 'ak',
  getVal() {
    return 'value';
  },
  user: {
    firstName: 'ak',
    lastName: 'bk',
  },
};
let cloned = {};

function clone(obj) {
    let keys  = Object.keys(obj);
    keys.forEach(k => {
        if( typeof obj[k] === 'object' ) {
            console.log("here", obj[k]);
            clone(obj[k]);
            //recursive
        }
        else if(typeof obj[k] === 'function' ) {
            cloned[k] = {...obj[k]};
        }
        else {
            cloned[k] = obj[k];
        }
    });
    console.log('cloned', cloned);
    console.log('obj', obj);
}
clone(v);