const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const lines = input.split('\n');
let safeCounter = 0;

function isDesc(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] <= arr[i]) {
            return false;
        }
    }
    return true;
}

function isAsc(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] >= arr[i]) {
            return false;
        }
    }
    return true;
}

function isOrdered(arr) {
    return isAsc(arr) || isDesc(arr);
}


function isSafe(arr) {
    let numArray = arr.map(Number);
    let bool;
    if (isOrdered(numArray)) {
        for (let i = 1; i < numArray.length; i++) {
            const diff = Math.abs(numArray[i] - numArray[i - 1]);
            if (diff > 3) {
                bool = false;
                break;
            } else {
                bool = true;
            }
        }
    }
    return bool;
}

for (let i = 0; i < lines.length; i++) {
    let one_line = Array.from(lines[i].split(' '));
    if (isSafe(one_line)) {
        safeCounter += 1;
    }
}
console.log(safeCounter);
