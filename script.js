'use strict'

const text = document.querySelector('h1')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    text.classList.add('red')
})