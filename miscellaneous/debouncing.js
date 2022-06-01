const element = document.querySelector('#myInput');


// let timeout = null;
// element.addEventListener('input', (e) => {
//     clearTimeout(timeout);
// // console.log(e.target.value);
// timeout = setTimeout(api, 1000, e.target.value);
// })

// function api(val) {
//     console.log('some api', val);
// }
const calculateDebounce = debounce((val) => {
console.log(val);
}, 1000);
element.addEventListener('input', (e) => {
    calculateDebounce(e.target.value);
})

 function debounce(cb, delay = 1000) {
     let timer;
     return (args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
        cb(args);       
        }, delay);
     }
 }