'use strict'

let rand_num1 = 0;
let rand_num2 = 0;
let correctCount = 0;  // oikein vastattujen laskuri
let incorrectCount = 0;  // väärin vastattujen laskuri

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10);
    rand_num2 = getRandomIntNumberInRange(1, 10);
    document.querySelector('#num1').innerHTML = rand_num1;
    document.querySelector('#num2').innerHTML = rand_num2;
}

const updateAnswerCounts = () => {
    document.querySelector('#correct-count').value = correctCount;
    document.querySelector('#incorrect-count').value = incorrectCount;
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
    updateAnswerCounts(); // päivittää laskurit
});

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value);
    const correctAnswer = rand_num1 + rand_num2;

    if (answer === correctAnswer) {
        correctCount++;  // kasvattaa oikein-laskuria
        alert('Correct!');  // ilmoittaa oikein vastauksesta
    } else {
        incorrectCount++;  // kasvattaa väärin-laskuria
        alert('Incorrect!');  // ilmoittaa väärästä vastauksesta
    }

    updateAnswerCounts();
    randomizeNumbers();
    document.querySelector('input').value = '';
});
