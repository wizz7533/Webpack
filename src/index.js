import hello from './js/hello';

document.addEventListener('DOMContentLoaded', () => {
    const message = hello('John');
    document.querySelector("#target").innerText = message;

});