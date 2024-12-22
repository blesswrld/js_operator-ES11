'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// Если объект (или промежуточное значение в цепочке) равен null или undefined, оператор ?. возвращает undefined, не вызывая ошибку

// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent); // выводит undefined в консоль

console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
}

userData.say();
userData.hey?.(); // undefined - так как такой функции не существует

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData?.skills?.js);
