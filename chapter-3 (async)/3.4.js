
// scenario-1 multiple promises test

// var p1 = Promise.resolve(1);
// var p2 = Promise.reject(2);
// var p3 = Promise.resolve(3);

// let pro = Promise.all([p1, p2, p3])
// .then(val => console.log(val))
// .catch(err => console.log('error', err));

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-2 

// function test () {
//     return new Promise((resolve, reject) => {
//         resolve(1);
//     })
// }
// test().then(val => {
//     console.log('the first one', val);
//     return 2;
// }).then(val => {
//     console.log('the second one', val);
//     throw new Error('bad error');
// }).catch(e => console.log(e))
// .then(val => {
//     console.log('the third one', val);
// }).then(val => {
//     console.log('the forth one', val);
// }).catch(e => console.log('the last error'));

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-3

// function test() {
//     return new Promise((resolve, reject) => {
//         reject(1);
//     })
// }
// test()
// .finally(() => console.log('in finally'))
// .then((val) => console.log(val))
// .finally(() => console.log('in finally 2'))
// .catch((e) => console.log(e))

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-4

// Promise.then(f1).catch(f2);
// vs
// Promise.then(f1, f2);

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-4

// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  scenario-5

// var p = new Promise((resolve, reject) => {
//     return Promise.reject(Error('The Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-6

// new Promise((resolve, reject) => {
//     resolve('Success!')
//   })
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return "actually, that worked"
//   })
//   .catch(error => console.log(error.message))

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-7

// var p = new Promise(function() {
//     return "OK";
//  });
//  console.log(p);
//  var p2 = p.then(function(data) {
//     return data;
//  });
//  console.log(p2);
//  var p3 = p2.then(function(data) {
//     console.log(data + " Bye");
//  });
 

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-8

// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        resolve("OK");
//     }, 2000);
//  });
 
//  p.then().then(function(data) {
//     console.log(data);
//  });

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-9

// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        resolve("OK");
//     }, 2000);
//  }).
//  then();
 
//  var p2 = p.then(function(data) {
//     console.log(data + " Good");
//  })

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-10

// var p = new Promise(function(resolve, reject) {
//     throw "Sorry";
//  }).
//  then((data) => console.log(data), (data) => console.log(data));

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-11

// var p = new Promise(function(resolve, reject) {
//     resolve("OK");
//  });
 
//  var p2 = p.then(function(data) {
//     return data;
//  });
 
//  var p3 = p.then(function(data) {
//     return data;
//  });
 
//  console.log(p2 === p3);


// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scenario-12

// var p = new Promise(function(resolve, reject) {
//     resolve("OK");
//  });
 
//  var p2 = p.then(function(data) {
//     return new Promise(function(resolve, reject) {
//        resolve(`data is ${data}`);
//     });
//  });
 
//  p2.then(function(data) {
//     console.log(data);
//  });
