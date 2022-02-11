// with setInterval
// function printNumbers(from, to) {
//     let timer = setInterval(() => {
//         if(from<=to) {
//             console.log(from);
//             from++;
//         } else {
//             clearInterval(timer);
//         }
//     }, 1000);
// }

// with setTimeout nested
function printNumbers(from, to) {
let timer1 = setTimeout(() => {
    let timer2= setTimeout(() => {
        
    }, 1000);
    
}, 1000);
}


printNumbers(1, 5);