"use strict"
// first task

let userName = prompt('Приветствую Вас, не соблаговолите ли представиться?');

let userMood = prompt('Как,' + ' ' + userName + ', ваши дела?');

let userFood = prompt('У меня тоже' + ' ' + userMood + '!!!' + ' ' + 'Еще вопрос' + ', ' + userName + ', ' +'что кушали сегодня?');

let userParting = prompt('Я компьютер и не ем' + ' ' + userFood + ', ' + 'прощайте' + ' ' + userName + '!!!'); 

alert(userParting);


//second task

let firstNumber = +prompt('введи первое число');
let secondNumber = +prompt('введи второе число');

if(firstNumber < secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i%2 === 0 || i%5 === 0 ) {
            console.log(i);
        }
    }
}
else if(firstNumber === secondNumber) {
        console.log('числа равны');
}
    
else {
    for (let i =secondNumber; i <= firstNumber; i++) {
        if (i%2 === 0 || i%5 === 0 ) {
            console.log(i);
        }
    }
}











