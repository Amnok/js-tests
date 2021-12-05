const element = document.querySelector('#myInput');
let timeout;
element.addEventListener('input', (e) => {
    if(timeout > 2000) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
        someApi();
    }, 2000);
});

function someApi() {
    console.log('calling api...');
}