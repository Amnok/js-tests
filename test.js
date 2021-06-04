let obj = {
  Props: 'stuff',
  other: {
    stuff: 'etc',
    other1: {
      Extra: 'filler',
      other2: {
        stuff: 'abc',
        other3: {
          stuff: 'acbh',
          other: {},
        },
      },
    },
  },
};

function updateNested() {
  path = 'other.other1.other2.other3.stuff';
  vaue = 'ankit';
  let x = '';
  const keys = path.split('.');
  console.log(keys);
  for(let i=0 ;i<keys.length ; i++) {
      let keyName = `${keys[i]}`;
      console.log('keyname', keyName);
      console.log(obj[keyName]);
    x +=`['${keys[i]}']`;
  }
  console.log("key ", x);
  console.log("value", obj`${x}`);
}
updateNested()