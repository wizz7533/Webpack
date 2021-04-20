import hello from './js/hello';
import './scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const message = hello('John');
    document.querySelector("#target").innerText = message;

});