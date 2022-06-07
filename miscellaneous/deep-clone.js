const object = {
    name: 'Student 1',
    age: 25,
    address: {
        location : {
            city: 'New Delhi',
            state: 'Delhi'
        },
        phone: 8888888888,
        languages: ['Hindi', 'English']
    }
};

function deepClone(object){
	var newObject = {};
	for(var key in object){
    if(Array.isArray(object[key])) {
      newObject[key] = object[key];
    }
		else if(typeof object[key] === 'object'  && object[key] !== null ){
		 newObject[key] = deepClone(object[key]);
		}else{
		 newObject[key] = object[key];
		}
	}
	return newObject;
}

const val = deepClone(object);
console.log(val);