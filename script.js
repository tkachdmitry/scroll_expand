'use strict'
const button = document.querySelector('button');
const box = document.querySelector('.box');
const height = box.scrollHeight;

button.addEventListener('click', function() {
    box.style.height = height + 'px';
    console.log(height);
});