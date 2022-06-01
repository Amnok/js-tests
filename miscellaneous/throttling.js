const element = document.querySelector('#myInput');
const name = document.querySelector('#name');
name.textContent = 'throttling';

const calculateThrottle = throttle((val) => {
console.log(val);
}, 1000);
element.addEventListener('input', (e) => {
calculateThrottle(e.target.value);
});

function throttle(cb, delay = 1000) {
    let shouldWait = false;
    return (args) => {
        if(shouldWait) return;
        cb(args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);

    }

}