let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  function getSum(company) {
    let total = 0;
    function calculateSum(data) {
        for([key, value] of Object.entries(data)) {
            if(Array.isArray(value)){
                total += value.reduce((acc, cur) => {return acc + cur.salary}, 0)
            } else {
                calculateSum(value);
            }
        }

  }
  calculateSum(company);
  return total;
}
let val = getSum(company);
console.log(val);