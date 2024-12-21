const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const lines = input.split('\n');
let safeCounter = 0;

function isDesc(arr) {
    return arr.every((val, i) => i === 0 || val <= arr[i - 1]);
}

function isAsc(arr) {
    return arr.every((val, i) => i === 0 || val >= arr[i - 1]);
}

function isOrdered(arr) {
    console.log(isAsc(arr) || isDesc(arr));
    return isAsc(arr) || isDesc(arr);
}

function isSafe(arr) {
    isOrdered(arr);
}

for (let i = 0; i < 6; i++) {
    let one_line = Array.from(lines[i].split(' '));
    console.log(one_line)
    isSafe(one_line);

}
