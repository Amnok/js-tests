const element = document.querySelector('#debounce');
let timeout;
element.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        someApi();
    }, 1000);
});

function someApi() {
    console.log('calling api...');
}